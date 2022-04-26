const connection = require('../app/database');

class HomeService {
  async getBanner() {
    const statement = `SELECT * FROM banner`;
    const result = await connection.execute(statement);
    return result[0];
  }
  async getRecommend() {
    const statement = `SELECT * FROM goods WHERE usable = 1 ORDER BY RAND() LIMIT 10`;
    const result = await connection.execute(statement);
    return result[0];
  }
}

module.exports = new HomeService();
