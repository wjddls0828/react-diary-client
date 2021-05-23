import DBPool from './index';
import { Post } from '../../share/interfaces/post';
import { PoolConnection } from 'mysql2/promise';

export default class PostService {
  public static async getAllPosts(): Promise<Post[]> {
    try {
      const connection: PoolConnection = await DBPool.getConnection();
      const [data] = await connection.query(`select * from post`);
      connection.release();

      return JSON.parse(JSON.stringify(data));
    } catch (err) {
      console.error(err);
      throw new Error();
    }
  }
}
