const connection = require('../app/database');

class GoodsCateService {
  async getGoodsParentCate() {
    const statement = `SELECT * FROM goods_cate WHERE parent_id = 0`;
    const result = await connection.execute(statement);
    return result[0];
  }

  async getGoodsChildCate(parent_id) {
    const statement = `
      SELECT
      c.id,c.parent_id,c.picture,c.name,c.level,c.show_status,c.sort,c.goods_unit,c.goods_count
      FROM goods_cate  c
      WHERE c.parent_id = ?
      OR c.parent_id in (SELECT c.id FROM goods_cate c WHERE c.parent_id = ?)
    `;
    const result = await connection.execute(statement, [parent_id, parent_id]);
    return result[0];
  }
}

module.exports = new GoodsCateService();
