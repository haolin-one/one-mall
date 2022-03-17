const connection = require('../app/database');

class orderService {
  async getOrder(userId, status) {
    let statement;
    if (status === '-1') {
      statement = `SELECT o.*,i.*,g.*,g.id as goodsID
                      FROM orders o
                      INNER JOIN order_item i ON o.order_sn = i.order_sn
                      INNER JOIN goods g ON i.goods_id = g.id
                      WHERE user_id = ${userId}`;
    } else {
      statement = `SELECT o.*,i.*,g.*,g.id as goodsID
                      FROM orders o
                      INNER JOIN order_item i ON o.order_sn = i.order_sn
                      INNER JOIN goods g ON i.goods_id = g.id
                      WHERE user_id = ${userId} AND status = ${status}`;
    }
    const result = await connection.execute(statement);
    return result[0];
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
      remark = null
    } = orderInfo;
    const orderSn = new Date().getTime() + userId;
    const statement = `INSERT INTO orders (user_id,order_sn,userName,telNumber,
                        provinceName,cityName,countyName,detailInfo,total_amount)
                        VALUES (?,?,?,?,?,?,?,?,?)`;
    const statement1 = `INSERT INTO order_item (goods_id,goods_count,order_sn,remark)
                        VALUES (?,?,?,?)`;
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
    await connection.execute(statement1, [goods_id, count, orderSn, remark]);
  }
}

module.exports = new orderService();
