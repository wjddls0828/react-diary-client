import { Router, Response } from 'express';
import PostService from '../service/postService';
import Request from '../extend';
import { PagedPosts, Post, PostCountsByMoodId } from '../../share/interfaces/post';
import { isValidPositiveInteger, validatePostRequest } from '../utils/validate';

const postRouter: Router = Router();

// 검색 기능
postRouter.get('/search', async (req: Request, res: Response) => {
  if (!isValidPositiveInteger(req.query.page as string)) {
    res.status(400).send({ error: '잘못된 요청입니다. query 형식을 확인해주세요.' });
    return;
  }

  const userId = req.userId;
  const keyword = req.query.keyword as string;
  const page = parseInt(req.query.page as string);
  const posts: Post[] | void = await PostService.getPostsByKeyword(userId, keyword, page).catch(
    (err) => {
      res.status(500).send({ error: '서버 점검중입니다. 잠시 후 다시 시도해주세요!' });
      return;
    }
  );

  res.status(200).send(posts);
});

// 기분별 보기
postRouter.get('/mood/:id', async (req: Request, res: Response) => {
  if (!isValidPositiveInteger(req.params.id) || !isValidPositiveInteger(req.query.page as string)) {
    res.status(400).send({ error: '잘못된 요청입니다. param과 query 형식을 확인해주세요.' });
    return;
  }

  const userId = req.userId;
  const moodId = parseInt(req.params.id);
  const page = parseInt(req.query.page as string);

  const posts: Post[] | void = await PostService.getPostsByMoodId(userId, moodId, page).catch(
    (err) => {
      res.status(500).send({ error: '서버 점검중입니다. 잠시 후 다시 시도해주세요!' });
      return;
    }
  );

  res.status(200).send(posts);
});

// 기분별 monthly 게시글 개수 => Not need anymore
postRouter.get('/mood', async (req: Request, res: Response) => {
  const userId = req.userId;
  const yearMonth = req.query.term as string; //'yyyymm'

  if (!isValidPositiveInteger(yearMonth)) {
    res.status(400).send({ error: '잘못된 요청입니다. query 형식을 확인해주세요.' });
    return;
  }

  const counts: PostCountsByMoodId[] | void = await PostService.getMoodPostCountsByYearMonth(
    userId,
    yearMonth
  ).catch((err) => {
    res.status(500).send({ error: '서버 점검중입니다. 잠시 후 다시 시도해주세요!' });
    return;
  });

  res.status(200).send(counts);
});

// 기분별 monthly 게시글과 개수
postRouter.get('/monthly', async (req: Request, res: Response) => {
  const userId = req.userId;
  const yearMonth = req.query.term as string; //'yyyymm'

  if (!isValidPositiveInteger(yearMonth)) {
    res.status(400).send({ error: '잘못된 요청입니다.  query 형식을 확인해주세요.' });
    return;
  }

  const counts = await PostService.getPostsAndCountsByYearMonth(userId, yearMonth).catch((err) => {
    res.status(500).send({ error: '서버 점검중입니다. 잠시 후 다시 시도해주세요!' });
    return;
  });

  res.status(200).send(counts);
});

// 기분별 monthly 게시글과 개수
postRouter.get('/monthly', async (req: Request, res: Response) => {
  const userId = req.userId;
  const yearMonth = req.query.term as string; //'yyyymm'

  if (!isValidPositiveInteger(yearMonth)) {
    res.status(400).send({ error: '잘못된 요청입니다.  query 형식을 확인해주세요.' });
    return;
  }

  const counts = await PostService.getPostsAndCountsByYearMonth(userId, yearMonth).catch((err) => {
    res.status(500).send({ error: '서버 점검중입니다. 잠시 후 다시 시도해주세요!' });
  });

  res.status(200).send(counts);
});

postRouter.get('/', async (req: Request, res: Response) => {
  if (!isValidPositiveInteger(req.query.page as string)) {
    res.status(400).send({ error: '잘못된 요청입니다. query 형식을 확인해주세요.' });
    return;
  }

  const userId = req.userId;
  const page = parseInt(req.query.page as string);
  const posts: PagedPosts | void = await PostService.getAllPostsByPage(userId, page).catch(() => {
    res.status(500).send({ error: '서버 점검중입니다. 잠시 후 다시 시도해주세요!' });
    return;
  });

  res.status(200).send(posts);
});

postRouter.get('/:id', async (req: Request, res: Response) => {
  if (!isValidPositiveInteger(req.params.id)) {
    res.status(400).send({ error: '잘못된 요청입니다. param 형식을 확인해주세요' });
    return;
  }

  const userId = req.userId;
  const postId = parseInt(req.params.id);
  const post: Post | void = await PostService.getPostById(userId, postId).catch((err) => {
    res.status(500).send({ error: '서버 점검중입니다. 잠시 후 다시 시도해주세요!' });
    return;
  });

  if (!post) {
    res.status(404).send({ error: '존재하지 않는 데이터입니다.' });
    return;
  }

  res.status(200).send(post);
});

postRouter.post('/', async (req: Request, res: Response) => {
  if (!validatePostRequest(req.body)) {
    res.status(400).send({ error: '잘못된 요청입니다. request body 형식을 확인해주세요' });
    return;
  }

  const userId = req.userId;
  const post: Post | void = await PostService.createPost(userId, req.body).catch(() => {
    res.status(500).send({ error: '서버 점검중입니다. 잠시 후 다시 시도해주세요!' });
  });

  res.status(200).send(post);
});

postRouter.patch('/:id', async (req: Request, res: Response) => {
  if (!isValidPositiveInteger(req.params.id)) {
    res.status(400).send({ error: '잘못된 요청입니다. param 형식을 확인해주세요' });
    return;
  }

  const userId = req.userId;
  const postId = parseInt(req.params.id);
  const post: Post | void = await PostService.updatePost(userId, postId, req.body).catch(() => {
    res.status(500).send({ error: '서버 점검중입니다. 잠시 후 다시 시도해주세요!' });
  });

  res.status(200).send(post);
});

postRouter.delete('/:id', async (req: Request, res: Response) => {
  if (!isValidPositiveInteger(req.params.id)) {
    res.status(400).send({ error: '잘못된 요청입니다.' });
    return;
  }

  const userId = req.userId;
  const postId = parseInt(req.params.id);
  const result: boolean | void = await PostService.deletePost(userId, postId).catch(() => {
    res.status(500).send({ error: '서버 점검중입니다. 잠시 후 다시 시도해주세요!' });
  });

  res.status(200).send(result);
});

export default postRouter;
