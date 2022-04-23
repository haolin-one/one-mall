const connection = require('../app//database');

class bannerService {
  async getBannerList(banner) {
    const { title = '', size, offset } = banner;
    const statement = `SELECT * FROM banner WHERE title like '%${title}%' LIMIT ?,?`;
    const result = await connection.execute(statement, [offset, size]);
    const statement2 = `SELECT COUNT(*) as totalCount FROM banner WHERE title like '%${title}%'`;
    const result2 = await connection.execute(statement2);
    return { list: result[0], ...result2[0][0] };
  }

  async updateBannerList(id, banner) {
    const { title, picture } = banner;
    const statement = `UPDATE banner SET title = ?,picture = ? WHERE id = ?`;
    await connection.execute(statement, [title, picture, id]);
    return;
  }

  async deleteBannerList(id) {
    const statement = `DELETE FROM banner WHERE id = ?`;
    await connection.execute(statement, [id]);
    return;
  }

  async createBannerList(banner) {
    const { title, picture } = banner;
    const statement = `INSERT INTO banner (title,picture) VALUES (?,?)`;
    await connection.execute(statement, [title, picture]);
    return;
  }
}

module.exports = new bannerService();
