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
  async createAdmin(admin) {
    const {
      name = '',
      username = '',
      password = '',
      phone = '',
      gender = '',
      email = '',
      role_id = ''
    } = admin;
    const statement = `INSERT INTO admin (name, username,password, phone, gender, email, role_id)
                      VALUES (?,?,?,?,?,?,?)`;
    await connections.execute(statement, [
      name,
      username,
      password,
      phone,
      gender,
      email,
      role_id
    ]);
    return;
  }
  async updateAdmin(id, admin) {
    const {
      name = '',
      username = '',
      phone = '',
      gender = '',
      email = '',
      role_id = ''
    } = admin;

    const statement = `UPDATE admin SET name = ?,username=?,phone=?,gender=?,email=?,role_id=? WHERE id = ?`;
    await connections.execute(statement, [
      name,
      username,
      phone,
      gender,
      email,
      role_id,
      id
    ]);
    return;
  }
  async deleteAdmin(id) {
    const statement = `DELETE FROM admin WHERE id = ?`;
    await connections.execute(statement, [id]);
    return;
  }
}

module.exports = new adminService();
