import { Router, Request, Response } from 'express';

const postRouter: Router = Router();

postRouter.get('/', async (req: Request, res: Response) => {
  res.status(200).send('success');
});

export default postRouter;
