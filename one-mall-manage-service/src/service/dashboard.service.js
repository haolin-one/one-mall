const connection = require('../app/database');

class dashboardService {
  async getCitySale() {
    const statement = `SELECT cityName,COUNT(*) as value FROM orders GROUP BY cityName`;
    const result = await connection.execute(statement);
    return result[0];
  }
  async getCateSale() {
    const statement = `SELECT goods_cate.name as name,count(*) as value
                      FROM order_item LEFT JOIN goods ON order_item.goods_id = goods.id
                      LEFT JOIN goods_cate ON goods_cate.id = goods.goods_cate_id
                      GROUP BY goods.goods_cate_id
                      ORDER BY value DESC
                      limit 5`;
    const result = await connection.execute(statement);
    return result[0];
  }
  async getMonthSale() {
    const statement = `SELECT DATE_FORMAT(createAt,'%Y年%m月') as month,COUNT(*) as value
                      FROM orders
                      GROUP BY month
                      ORDER BY month`;
    const result = await connection.execute(statement);
    return result[0];
  }
}

module.exports = new dashboardService();
