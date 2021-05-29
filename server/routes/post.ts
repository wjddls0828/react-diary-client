import { Router, Response } from 'express';
import PostService from '../service/postService';
import Request from '../extend';

const postRouter: Router = Router();

postRouter.get('/', async (req: Request, res: Response) => {
  const userId = req.userId;
  const posts = await PostService.getAllPosts(userId).catch(() => {
    res.status(500).send({ error: '서버 점검중입니다. 잠시 후 다시 시도해주세요!' });
  });

  res.status(200).send(posts);
});

export default postRouter;
