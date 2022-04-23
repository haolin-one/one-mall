const connection = require('../app/database');
class menuService {
  async getMenusById(id) {
    const statement = `SELECT * FROM menu WHERE id IN
                       (SELECT menu_id FROM role_menu_relation
                       WHERE role_id = (SELECT role_id FROM admin WHERE id =?))
                       AND hidden = 0`;
    const result = await connection.execute(statement, [id]);
    return result[0];
  }
}

module.exports = new menuService();
