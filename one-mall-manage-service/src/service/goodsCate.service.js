const connection = require('../app/database');
class goodsCateService {
  async getGoodsCateList(goodsCate) {
    const { name = '', size = 9999, offset = 0 } = goodsCate;

    const statement = `SELECT g1.*,IFNULL(g2.name,'该分类为一级分类') as parentCate FROM goods_cate g1
                        LEFT JOIN goods_cate g2 ON g1.parent_id = g2.id
                        WHERE g1.name like '%${name}%' limit ?,?`;
    const statement2 = `SELECT count(*) as totalCount FROM goods_cate WHERE name like '%${name}%'`;
    const result = await connection.execute(statement, [offset, size]);
    const result2 = await connection.execute(statement2);
    return { list: result[0], ...result2[0][0] };
  }
  async updateGoodsCate(id, name) {
    const statement = `UPDATE goods_cate SET name = ? WHERE id = ?`;
    const result = await connection.execute(statement, [name, id]);
    if (result) {
      return;
    }
  }
  async createGoodsCate(name) {
    const statement = `INSERT INTO goods_cate (name) VALUES (?)`;
    const result = await connection.execute(statement, [name]);
    if (result) {
      return;
    }
  }

  async deleteGoodsCate(id) {
    const statement = `DELETE FROM goods_cate WHERE id = ?`;
    const result = await connection.execute(statement, [id]);
    if (result) {
      return;
    }
  }
}

module.exports = new goodsCateService();
