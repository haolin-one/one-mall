const connection = require('../app/database');
const dayjs = require('dayjs');

class orderService {
  async getOrderList(order) {
    const { order_sn = '', order_status = '', size, offset } = order;
    const statement = `SELECT o.*,u.username FROM orders o
                      LEFT JOIN user u ON o.user_id = u.id
                      WHERE o.order_sn like '%${order_sn}%'
                      AND o.order_status like '%${order_status}%' LIMIT ?,?`;
    const result = await connection.execute(statement, [offset, size]);
    const statement2 = `SELECT COUNT(*) as totalCount FROM orders WHERE order_sn like '%${order_sn}%' AND order_status like '%${order_status}%'`;
    const result2 = await connection.execute(statement2);
    const list = [];
    result[0].forEach((item) => {
      list.push({
        ...item,
        address:
          item.provinceName + item.cityName + item.countyName + item.detailInfo
      });
    });
    return { list: list, ...result2[0][0] };
  }

  async updateOrder(id, order) {
    console.log(order);
    const { delivery_company = '', delivery_sn = '' } = order;
    const order_status = 2;
    const delivery_time = dayjs().format('YYYY-MM-DD HH:mm:ss');
    const statement = `UPDATE orders SET delivery_company = ?,delivery_sn = ?,
                      delivery_time = ?,order_status = ? WHERE id = ?`;
    await connection.execute(statement, [
      delivery_company,
      delivery_sn,
      delivery_time,
      order_status,
      id
    ]);
    return;
  }

  async deleteOrder(id) {
    const statement = `DELETE FROM orders WHERE id = ?`;
    await connection.execute(statement, [id]);
    return;
  }
}

module.exports = new orderService();
