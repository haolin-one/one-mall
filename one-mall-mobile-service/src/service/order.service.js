const connection = require('../app/database');

class orderService {
  async getOrder(userId, status) {
    let statement;
    if (status === '-1') {
      statement = `SELECT o.*,i.*,o.id as ordersID,i.id as itemID
                      FROM orders o
                      INNER JOIN order_item i ON o.order_sn = i.order_sn
                      WHERE user_id = ${userId} GROUP BY i.order_sn`;
    } else {
      statement = `SELECT o.*,i.*,g.*,g.id as goodsID,o.id as ordersID,i.id as itemID
                      FROM orders o
                      INNER JOIN order_item i ON o.order_sn = i.order_sn
                      INNER JOIN goods g ON i.goods_id = g.id
                      WHERE user_id = ${userId} AND order_status = ${status}
                      GROUP BY i.order_sn`;
    }
    const result = await connection.execute(statement);
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
      goods_id,
      count,
      total_amount,
      remark = ''
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
    goods_id.forEach(async (item) => {
      await connection.execute(statement1, [item, count, orderSn, remark]);
    });
  }
}

module.exports = new orderService();
