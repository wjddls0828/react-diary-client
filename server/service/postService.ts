import DBPool from './config';
import { Post } from '../../share/interfaces/post';
import { parseRawData } from '../utils/parseRawData';

export default class PostService {
  public static async getAllPosts(userId: number): Promise<Post[]> {
    const [data] = await DBPool.query(`select * from post where userId = ?`, [userId]).catch(
      (err) => {
        console.error(err.message);
        throw new Error();
      }
    );

    return parseRawData(data);
  }
}
