const connection = require('../app/database');

class userService {
  async login(userInfo) {
    const { account, password } = userInfo;
    const statement = `SELECT * FROM user WHERE username = ? OR phone = ? AND password = ?`;
    const result = await connection.execute(statement, [
      account,
      account,
      password
    ]);
    return result[0];
  }
  async getUserByUsernamePhone(account) {
    const statement = `SELECT * FROM user WHERE username = ? OR phone = ?`;
    const result = await connection.execute(statement, [account, account]);
    return result[0];
  }
  async register(userInfo) {
    const {
      username,
      password,
      phone,
      gender = null,
      nickname = null,
      city = null,
      job = null,
      avatar = null,
      status = null,
      user_level_id = null,
      personalized_signature = null,
      birthday = null
    } = userInfo;
    const statement = ` INSERT INTO user
                        (username,password,phone,gender,nickname,city,job,
                        avatar,status,user_level_id,personalized_signature,birthday)
                        VALUES
                        (?,?,?,?,?,?,?,?,?,?,?,?)
                      `;
    const result = await connection.execute(statement, [
      username,
      password,
      phone,
      gender,
      nickname,
      city,
      job,
      avatar,
      status,
      user_level_id,
      personalized_signature,
      birthday
    ]);
    console.log(result);
    return result;
  }
  async getUserByUsername(username) {
    const statement = `SELECT * FROM user WHERE username = ?`;
    const result = await connection.execute(statement, [username]);
    return result[0];
  }
  async getUserByPhone(phone) {
    const statement = `SELECT * FROM user WHERE phone = ?`;
    const result = await connection.execute(statement, [phone]);
    return result[0];
  }
}

module.exports = new userService();
