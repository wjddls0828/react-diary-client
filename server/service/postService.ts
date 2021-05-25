import DBPool from './config';
import { Post, PostRequestBody } from '../../share/interfaces/post';
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

  public static async getPostById(userId: number, postId: number): Promise<Post> {
    const [data] = await DBPool.query(`select * from post where id = ? and userId = ? limit 1`, [
      postId,
      userId,
    ]).catch((err) => {
      console.error(err.message);
      throw new Error();
    });

    return parseRawData(data);
  }
}
