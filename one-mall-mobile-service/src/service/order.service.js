const connection = require('../app/database');

class orderService {
  async getOrder(userId, status) {
    const statement = `SELECT o.id as order_id,o.receiver_name,o.receiver_phone,o.status,g.*
                        FROM orders o
                        INNER JOIN goods g ON o.goods_id = g.id
                        WHERE user_id = ? AND status = ?`;
    const result = await connection.execute(statement, [userId, status]);
    return result[0];
  }
}

module.exports = new orderService();
