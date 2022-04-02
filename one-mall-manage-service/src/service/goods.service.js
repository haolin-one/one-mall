const connection = require('../app/database');

class goodsService {
  async getGoodsList(name = '', offset, size) {
    const statement = `SELECT g.*,gc.name as goodsCate
                      FROM goods g
                      LEFT JOIN goods_cate gc ON g.goods_cate_id = gc.id
                      WHERE g.name like '%${name}%'
                      LIMIT ?,?`;
    const result = await connection.execute(statement, [offset, size]);
    const statement2 = `SELECT COUNT(*) as totalCount
                      FROM goods g LEFT JOIN goods_cate gc
                      ON g.goods_cate_id = gc.id
                      WHERE g.name like '%${name}%'`;
    const result2 = await connection.execute(statement2);
    return { list: result[0], ...result2[0][0] };
  }
}

module.exports = new goodsService();
