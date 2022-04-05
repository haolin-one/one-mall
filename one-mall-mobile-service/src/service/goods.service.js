const connection = require('../app/database');

class GoodsService {
  async qSearch(queryInfo) {
    const statement = `SELECT id,name,description,picture,price FROM goods WHERE description like "%${queryInfo}%"`;
    const result = await connection.execute(statement);
    return result[0];
  }
  async goodsDetail(id) {
    const statement = `SELECT * FROM goods WHERE id = ?`;
    const result = await connection.execute(statement, [id]);
    return result[0][0];
  }
}

module.exports = new GoodsService();
