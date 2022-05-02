const connection = require('../app/database');

class GoodsService {
  async qSearch(queryInfo) {
    const statement = `SELECT id,name,description,picture,price FROM goods
                      WHERE description like "%${queryInfo}%" OR goods_cate_id = ?
                      AND usable = 1`;
    const result = await connection.execute(statement, [queryInfo]);
    return result[0];
  }
  async goodsDetail(id) {
    const statement = `SELECT * FROM goods WHERE id = ?`;
    const result = await connection.execute(statement, [id]);
    return result[0][0];
  }
  async goodsStock(goods) {
    const statement = `SELECT stock FROM goods WHERE id = ?`;
    for (let i = 0; i < goods.length; i++) {
      const result = await connection.execute(statement, [goods[i].goods_id]);
      goods[i].goods_stock = result[0][0].stock;
    }
  }
}

module.exports = new GoodsService();
