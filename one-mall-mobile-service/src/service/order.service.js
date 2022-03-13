const connection = require('../app/database');

class orderService {
  async getOrder(user_id) {
    const statement = `SELECT o.id as order_id,o.receiver_name,o.receiver_phone,g.*
                        FROM orders o
                        INNER JOIN goods g ON o.goods_id = g.id
                        WHERE user_id = ?`;
    const result = await connection.execute(statement, [user_id]);
    return result[0];
  }
}

module.exports = new orderService();
