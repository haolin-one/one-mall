const connection = require('../app/database');

class goodsService {
  async getGoodsList(goods) {
    const { name = '', goods_cate_id = '', offset, size } = goods;
    const statement = `SELECT g.*,gc.name as goodsCate
                      FROM goods g
                      LEFT JOIN goods_cate gc ON g.goods_cate_id = gc.id
                      WHERE g.name like '%${name}%' AND g.goods_cate_id like '%${goods_cate_id}%'
                      LIMIT ?,?`;
    const result = await connection.execute(statement, [offset, size]);
    const statement2 = `SELECT COUNT(*) as totalCount
                      FROM goods g LEFT JOIN goods_cate gc
                      ON g.goods_cate_id = gc.id
                      WHERE g.name like '%${name}%' AND g.goods_cate_id like '%${goods_cate_id}%'`;
    const result2 = await connection.execute(statement2);
    return { list: result[0], ...result2[0][0] };
  }
  async updateGoodsList(goodsId, goods) {
    const { name, price, description, picture, goods_cate_id } = goods;
    const statement = `UPDATE goods SET name = ?, price = ?, description = ?, picture = ?, goods_cate_id = ? WHERE id = ?`;
    await connection.execute(statement, [
      name,
      price,
      description,
      picture,
      goods_cate_id,
      goodsId
    ]);
    return;
  }
  async createGoodsList(goods) {
    const { name, price, picture, description, goods_cate_id } = goods;
    const statement = `INSERT INTO goods (name,price,picture,description,goods_cate_id) VALUES (?,?,?,?,?)`;
    await connection.execute(statement, [
      name,
      price,
      picture,
      description,
      goods_cate_id
    ]);
    return;
  }
  async deleteGoodsList(goodsId) {
    const statement = `DELETE FROM goods WHERE id = ?`;
    await connection.execute(statement, [goodsId]);
    return;
  }
}

module.exports = new goodsService();
