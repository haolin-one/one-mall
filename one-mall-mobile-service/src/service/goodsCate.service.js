const connection = require('../app/database');

class GoodsCateService {
  async getGoodsCate() {
    const statement = `SELECT * FROM goods_cate`;
    const result = await connection.execute(statement);
    return result[0];
  }
}

module.exports = new GoodsCateService();
