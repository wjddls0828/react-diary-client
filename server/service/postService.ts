import DBPool from './config';
import { Post, PostRequestBody } from '../../share/interfaces/post';
import { parseRawData } from '../utils/parseRawData';
import { POSTS_PER_PAGE } from '../../share/constant';

export default class PostService {
  public static async getAllPosts(userId: number, page: number): Promise<Post[]> {
    const take = POSTS_PER_PAGE;
    const skip = (page - 1) * POSTS_PER_PAGE;

    const [data] = await DBPool.query(`select * from post where userId = ? LIMIT ? OFFSET ?`, [
      userId,
      take,
      skip,
    ]).catch((err) => {
      console.error(err.message);
      throw new Error();
    });

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

  public static async createPost(userId: number, body: PostRequestBody): Promise<Post> {
    const connection = await DBPool.getConnection();
    await connection.beginTransaction();

    return await connection
      .query(`insert into post values (NULL, ?, ?, default, default, ?)`, [
        userId,
        body.content,
        body.moodId,
      ])
      .then(async () => {
        const [newPost] = await connection.query(
          `select * from post where id = (select last_insert_id())`
        );
        await connection.commit();

        return parseRawData(newPost);
      })
      .catch(async (err) => {
        await connection.rollback();

        console.log(err.message);
        throw new Error();
      })
      .finally(() => {
        connection.release();
      });
  }

  public static async updatePost(
    userId: number,
    postId: number,
    body: Partial<PostRequestBody>
  ): Promise<Post> {
    const connection = await DBPool.getConnection();
    await connection.beginTransaction();

    return await connection
      .query(`update post set content = ?, moodId = ? where id = ? and userId = ?`, [
        body.content,
        body.moodId,
        postId,
        userId,
      ])
      .then(async () => {
        const post = await this.getPostById(userId, postId);
        await connection.commit();

        return parseRawData(post);
      })
      .catch(async (err) => {
        await connection.rollback();

        console.log(err.message);
        throw new Error();
      })
      .finally(() => {
        connection.release();
      });
  }

  public static async deletePost(userId: number, postId: number): Promise<boolean> {
    await DBPool.query(`delete from post where id = ? and userId = ?`, [postId, userId]).catch(
      async (err) => {
        console.log(err.message);
        throw new Error();
      }
    );

    return true;
  }
}
