const connection = require('../app/database');

class BannerService {
  async getBanner() {
    const statement = `SELECT * FROM banner`;
    const result = await connection.execute(statement);
    return result[0];
  }
}

module.exports = new BannerService();
