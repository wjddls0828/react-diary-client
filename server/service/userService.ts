import DBPool from './config';
import { PoolConnection } from 'mysql2/promise';
import { User } from '../../share/interfaces/user';
import { GoogleUserDTO } from './google/dto/googleUserDto';
import * as jwt from 'jsonwebtoken';
export class UserModel {
  static async findUserByEmail(email: string): Promise<User[]> {
    const connection: PoolConnection = await DBPool.getConnection();
    try {
      const [user] = await connection.query(`SELECT * FROM user WHERE email = ? LIMIT 1`, [email]);

      return JSON.parse(JSON.stringify(user));
    } catch (err) {
      console.error(err.message);
      throw new Error();
    } finally {
      connection.release();
    }
  }

  static async createUser(userInfo: GoogleUserDTO): Promise<User[]> {
    const connection: PoolConnection = await DBPool.getConnection();
    try {
      await connection.beginTransaction();

      const defaultBlogTitle = `${userInfo.name}'s Diary`;
      await connection.query(`INSERT INTO user VALUES (null,?,?,?)`, [
        userInfo.email,
        userInfo.name,
        defaultBlogTitle,
      ]);

      const newUser = await this.findUserByEmail(userInfo.email);
      await connection.commit();

      return JSON.parse(JSON.stringify(newUser));
    } catch (err) {
      await connection.rollback();

      console.error(err.message);
      throw new Error();
    } finally {
      connection.release();
    }
  }

  public static async validateUser(userInfo: GoogleUserDTO): Promise<User> {
    try {
      const user = await this.findUserByEmail(userInfo.email);

      if (!user.length) {
        const newUser = await this.createUser(userInfo);
        return newUser[0];
      }

      return user[0];
    } catch (err) {
      console.error(err.message);
      throw new Error();
    }
  }
}
