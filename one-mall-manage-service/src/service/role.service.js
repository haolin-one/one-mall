const connection = require('../app/database');

class roleService {
  async getRoleList(role) {
    const { name = '', offset = 0, size = 9999 } = role;
    const statement = `SELECT * FROM role WHERE name like '%${name}%' limit ?,?`;
    const result = await connection.execute(statement, [offset, size]);
    const statement2 = `SELECT COUNT(*) as totalCount FROM role WHERE name like '%${name}%'`;
    const result2 = await connection.execute(statement2);
    return { list: result[0], ...result2[0][0] };
  }
}

module.exports = new roleService();
