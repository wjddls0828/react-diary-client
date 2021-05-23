import DBPool from './config';
import { Post } from '../../share/interfaces/post';
import { PoolConnection } from 'mysql2/promise';
import { parseRawData } from '../utils/parseRawData';

export default class PostService {
  public static async getAllPosts(): Promise<Post[]> {
    try {
      const connection: PoolConnection = await DBPool.getConnection();
      const [data] = await connection.query(`select * from post`);
      connection.release();

      return parseRawData(data);
    } catch (err) {
      console.error(err);
      throw new Error();
    }
  }
}
