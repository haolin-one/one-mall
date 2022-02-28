const connection = require('../app/database');

class GoodsService {
  async qSearch(queryInfo) {
    const statement = `SELECT * FROM goods WHERE description like "%${queryInfo}%"`;
    const result = await connection.execute(statement);
    return result[0];
  }
}

module.exports = new GoodsService();
