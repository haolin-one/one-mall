const connection = require('../app/database');

class cartService {
  async getCart(id) {
    const statement = `SELECT c.id as c_id,c.count,c.select_status,g.*
                        FROM cart c
                        INNER JOIN goods g ON c.goods_id = g.id
                        WHERE c.user_id = ?`;
    const result = await connection.execute(statement, [id]);
    return result[0];
  }
}

module.exports = new cartService();
