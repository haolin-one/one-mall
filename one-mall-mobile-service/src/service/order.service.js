const connection = require('../app/database');

class orderService {
  async getOrder(order) {
    const { userId, order_status, size, offset } = order;
    let statement;
    if (order_status === '-1') {
      statement = `SELECT o.*,i.*,o.id as ordersID,i.id as itemID
                      FROM orders o
                      INNER JOIN order_item i ON o.order_sn = i.order_sn
                      WHERE user_id = ${userId} GROUP BY i.order_sn
                      ORDER BY o.createAt DESC LIMIT ?,?`;
    } else {
      statement = `SELECT o.*,i.*,g.*,g.id as goodsID,o.id as ordersID,i.id as itemID
                      FROM orders o
                      INNER JOIN order_item i ON o.order_sn = i.order_sn
                      INNER JOIN goods g ON i.goods_id = g.id
                      WHERE user_id = ${userId} AND order_status = ${order_status}
                      GROUP BY i.order_sn ORDER BY o.createAt DESC LIMIT ?,?`;
    }
    const result = await connection.execute(statement, [offset, size]);
    const statement2 = `SELECT o.*,i.*,g.*,g.id as goodsID,o.id as ordersID,i.id as itemID
                        FROM order_item i
                        INNER JOIN orders o ON o.order_sn = i.order_sn
                        INNER JOIN goods g ON i.goods_id = g.id
                        WHERE i.order_sn = ?`;
    let result2;
    let finalResult = [];
    for (let item of result[0]) {
      result2 = await connection.execute(statement2, [item.order_sn]);
      finalResult.push({ orderItem: result2[0], orderInfo: item });
    }
    return finalResult;
  }

  async addOrder(orderInfo) {
    const {
      userId,
      userName,
      telNumber,
      provinceName,
      cityName,
      countyName,
      detailInfo,
      goodsItem,
      total_amount,
      remark
    } = orderInfo;
    const orderSn = new Date().getTime() + userId;
    const statement = `INSERT INTO orders (user_id,order_sn,userName,telNumber,
                        provinceName,cityName,countyName,detailInfo,total_amount)
                        VALUES (?,?,?,?,?,?,?,?,?)`;
    await connection.execute(statement, [
      userId,
      orderSn,
      userName,
      telNumber,
      provinceName,
      cityName,
      countyName,
      detailInfo,
      total_amount
    ]);
    const statement1 = `INSERT INTO order_item (goods_id,goods_count,order_sn,remark)
                        VALUES (?,?,?,?)`;
    const statement2 = `UPDATE goods SET stock = ? WHERE id = ?`;
    goodsItem.forEach(async (item) => {
      const { goods_id, goods_count, goods_stock } = item;
      const stock = goods_stock - goods_count;
      await connection.execute(statement1, [
        goods_id,
        goods_count,
        orderSn,
        remark
      ]);
      await connection.execute(statement2, [stock, goods_id]);
    });
  }

  async updateAddress(address) {
    const {
      userName,
      telNumber,
      provinceName,
      cityName,
      countyName,
      detailInfo,
      id
    } = address;
    const statement = `UPDATE orders SET userName=?,telNumber=?,
                      provinceName=?,cityName=?,countyName=?,detailInfo=?
                      WHERE id = ?`;
    await connection.execute(statement, [
      userName,
      telNumber,
      provinceName,
      cityName,
      countyName,
      detailInfo,
      id
    ]);
    return;
  }

  async confirmReceive(id) {
    const statement = `UPDATE orders SET order_status = 3 WHERE id = ?`;
    await connection.execute(statement, [id]);
    return;
  }

  async confirmComment(order) {
    const { order_sn } = order[0];
    console.log(order_sn);
    const statement = `UPDATE orders SET order_status = 4 WHERE order_sn = ?`;
    const statement2 = `UPDATE order_item SET correspond = ?, logistics = ?,
                      manner = ? WHERE id = ?`;
    await connection.execute(statement, [order_sn]);
    order.forEach(async (item) => {
      const { correspond, logistics, manner, itemID } = item;
      console.log(correspond, logistics, manner);
      await connection.execute(statement2, [
        correspond,
        logistics,
        manner,
        itemID
      ]);
    });
    return;
  }
}

module.exports = new orderService();
