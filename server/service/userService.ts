import DBPool from './config';
import { PoolConnection } from 'mysql2/promise';
import { User } from '../../share/interfaces/user';
import { GoogleUserDTO } from './google/dto/googleUserDto';
import * as jwt from 'jsonwebtoken';
import { parseRawData } from '../utils/parseRawData';
export class UserModel {
  static async findUserByEmail(email: string): Promise<User[]> {
    const [user] = await DBPool.query(`SELECT * FROM user WHERE email = ? LIMIT 1`, [email]).catch(
      async (err) => {
        console.log(err.message);
        throw new Error();
      }
    );

    return parseRawData(user);
  }

  static async createUser(userInfo: GoogleUserDTO): Promise<User[]> {
    const connection: PoolConnection = await DBPool.getConnection();
    await connection.beginTransaction();

    const defaultBlogTitle = `${userInfo.name}'s Diary`;

    return await connection
      .query(`INSERT INTO user VALUES (null,?,?,?)`, [
        userInfo.email,
        userInfo.name,
        defaultBlogTitle,
      ])
      .then(async () => {
        const [newUser] = await connection.query(`SELECT * FROM user WHERE email = ? LIMIT 1`, [
          userInfo.email,
        ]);
        await connection.commit();

        return parseRawData(newUser);
      })
      .catch(async (err) => {
        await connection.rollback();

        console.error(err.message);
        throw new Error();
      })
      .finally(() => {
        connection.release();
      });
  }

  public static async validateUser(userInfo: GoogleUserDTO): Promise<User> {
    return await this.findUserByEmail(userInfo.email)
      .then(async (user) => {
        if (!user.length) {
          const newUser = await this.createUser(userInfo);
          return newUser[0];
        }

        return user[0];
      })
      .catch((err) => {
        console.error(err.message);
        throw new Error();
      });
  }

  public static createAccessToken(user: User): string {
    return jwt.sign({ data: user, timestamp: Date.now() }, process.env.JWT_SECRET, {
      expiresIn: Number(process.env.JWT_EXPIRATION),
    });
  }
}
