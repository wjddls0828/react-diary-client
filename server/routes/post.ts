import { Router, Request, Response } from 'express';
import PostService from '../service/postService';

const postRouter: Router = Router();

postRouter.get('/', async (req: Request, res: Response) => {
  const posts = await PostService.getAllPosts().catch(() => {
    res.status(500).send('서버 점검중입니다. 잠시 후 다시 시도해주세요!');
  });

  res.status(200).send(posts);
});

export default postRouter;
