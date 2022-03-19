const connection = require('../app/database');

class cartService {
  async getCart(id) {
    const statement = `SELECT c.id as c_id,c.count,c.select_status,c.user_id,c.goods_id,g.*
                        FROM cart c
                        INNER JOIN goods g ON c.goods_id = g.id
                        WHERE c.user_id = ?`;
    const result = await connection.execute(statement, [id]);
    return result[0];
  }
  async addCart(goods) {
    const { id, user_id, select_status, count } = goods;
    const statement = `INSERT INTO cart
                        (user_id,goods_id,count,select_status)
                        VALUES (?,?,?,?)`;
    const result = await connection.execute(statement, [
      user_id,
      id,
      count,
      select_status
    ]);
    return result[0];
  }
  async updateCart({ c_id, count }) {
    const statement = `UPDATE cart SET count = ${count} WHERE id = ${c_id}`;
    const result = await connection.execute(statement);
    return result[0];
  }
}

module.exports = new cartService();
