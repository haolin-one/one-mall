const connections = require('../app/database');

class adminService {
  async getAdminList({ username = '', name = '', gender = '', offset, size }) {
    const statement = `SELECT a.*,r.name as role FROM admin a LEFT JOIN
                      role r ON a.role_id = r.id WHERE a.username like
                      '%${username}%' AND a.name like '%${name}%'
                      AND a.gender like '%${gender}%' limit ?,?`;
    const statement2 = `SELECT COUNT(*) as totalCount FROM admin
                        WHERE username like '%${username}%'
                        AND name like '%${name}%' AND gender like '%${gender}%'`;
    const result = await connections.execute(statement, [offset, size]);
    const result2 = await connections.execute(statement2);
    return { list: result[0], ...result2[0][0] };
  }
  async updateAdmin(id, admin) {
    const { name, username } = admin;
    const statement = `UPDATE admin SET name = ?,username=? WHERE id = ?`;
    const result = await connections.execute(statement, [name, username, id]);
    if (result) {
      return;
    }
  }
}

module.exports = new adminService();
