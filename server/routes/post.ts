import { Router, Response } from 'express';
import PostService from '../service/postService';
import Request from '../extend';
import { PagedPosts, Post, PostCountsByMoodId } from '../../share/interfaces/post';

const postRouter: Router = Router();

// 검색 기능
postRouter.get('/search', async (req: Request, res: Response) => {
  const userId = req.userId;
  const keyword = req.query.keyword as string;
  const page = parseInt(req.query.page as string);

  const posts: Post[] | void = await PostService.getPostsByKeyword(userId, keyword, page).catch(
    (err) => {
      console.error(err);
      res.status(500).send({ error: '서버 점검중입니다. 잠시 후 다시 시도해주세요!' });
    }
  );

  res.status(200).send(posts);
});

// 기분별 보기
postRouter.get('/mood/:id', async (req: Request, res: Response) => {
  const userId = req.userId;
  const moodId = parseInt(req.params.id);
  const page = parseInt(req.query.page as string);

  const posts: Post[] | void = await PostService.getPostsByMoodId(userId, moodId, page).catch(
    (err) => {
      console.error(err);
      res.status(500).send({ error: '서버 점검중입니다. 잠시 후 다시 시도해주세요!' });
    }
  );

  res.status(200).send(posts);
});

// 기분별 monthly 게시글 개수
postRouter.get('/mood', async (req: Request, res: Response) => {
  const userId = req.userId;
  const yearMonth = req.query.term as string; //'yyyymm'

  const counts: PostCountsByMoodId[] | void = await PostService.getMonthlyMoodPostCountsBy(
    userId,
    yearMonth
  ).catch((err) => {
    console.error(err);
    res.status(500).send({ error: '서버 점검중입니다. 잠시 후 다시 시도해주세요!' });
  });

  res.status(200).send(counts);
});

postRouter.get('/', async (req: Request, res: Response) => {
  const userId = req.userId;
  const page = parseInt(req.query.page as string);

  const posts: PagedPosts | void = await PostService.getAllPostsByPage(userId, page).catch(() => {
    res.status(500).send({ error: '서버 점검중입니다. 잠시 후 다시 시도해주세요!' });
  });

  res.status(200).send(posts);
});

postRouter.get('/:id', async (req: Request, res: Response) => {
  const userId = req.userId;
  const postId = parseInt(req.params.id); //TODO: 잘못된 params 입력한 경우

  const post: Post | void = await PostService.getPostById(userId, postId).catch(() => {
    res.status(500).send({ error: '서버 점검중입니다. 잠시 후 다시 시도해주세요!' });
  });

  if (!post) {
    res.status(403).send({ error: '잘못된 접근입니다.' });
  }

  res.status(200).send(post);
});

postRouter.post('/', async (req: Request, res: Response) => {
  const userId = req.userId;
  const post: Post | void = await PostService.createPost(userId, req.body).catch(() => {
    res.status(500).send({ error: '서버 점검중입니다. 잠시 후 다시 시도해주세요!' });
  });

  res.status(200).send(post);
});

postRouter.patch('/:id', async (req: Request, res: Response) => {
  const userId = req.userId;
  const postId = parseInt(req.params.id);

  const post: Post | void = await PostService.updatePost(userId, postId, req.body).catch(() => {
    res.status(500).send({ error: '서버 점검중입니다. 잠시 후 다시 시도해주세요!' });
  });

  res.status(200).send(post);
});

postRouter.delete('/:id', async (req: Request, res: Response) => {
  const userId = req.userId;
  const postId = parseInt(req.params.id);

  const result: boolean | void = await PostService.deletePost(userId, postId).catch(() => {
    res.status(500).send({ error: '서버 점검중입니다. 잠시 후 다시 시도해주세요!' });
  });

  res.status(200).send(result);
});

export default postRouter;
