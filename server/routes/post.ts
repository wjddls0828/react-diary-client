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

postRouter.get('/:id', async (req: Request, res: Response) => {
  const userId = req.userId;
  const postId = parseInt(req.params.id); //TODO: 잘못된 params 입력한 경우

  const post = await PostService.getPostById(userId, postId).catch(() => {
    res.status(500).send({ error: '서버 점검중입니다. 잠시 후 다시 시도해주세요!' });
  });

  if (!post) {
    res.status(403).send({ error: '잘못된 접근입니다.' });
  }

  res.status(200).send(post);
});

postRouter.post('/', async (req: Request, res: Response) => {
  const userId = req.userId;
  const post = await PostService.createPost(userId, req.body).catch(() => {
    res.status(500).send({ error: '서버 점검중입니다. 잠시 후 다시 시도해주세요!' });
  });

  res.status(200).send(post);
});

postRouter.patch('/:id', async (req: Request, res: Response) => {
  const userId = req.userId;
  const postId = parseInt(req.params.id);

  const post = await PostService.updatePost(userId, postId, req.body).catch(() => {
    res.status(500).send({ error: '서버 점검중입니다. 잠시 후 다시 시도해주세요!' });
  });

  res.status(200).send(post);
});

postRouter.delete('/:id', async (req: Request, res: Response) => {
  const userId = req.userId;
  const postId = parseInt(req.params.id);

  const result = await PostService.deletePost(userId, postId).catch(() => {
    res.status(500).send({ error: '서버 점검중입니다. 잠시 후 다시 시도해주세요!' });
  });

  res.status(200).send(result);
});

export default postRouter;
