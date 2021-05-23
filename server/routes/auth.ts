import { Router, Request, Response } from 'express';
import { stringify } from 'querystring';

const authRouter: Router = Router();

authRouter.get('/google', async (req: Request, res: Response) => {
  const authConfig = {
    client_id: process.env.GOOGLE_CLIENT_ID,
    redirect_uri: process.env.GOOGLE_REDIRECT_URI,
    response_type: process.env.GOOGLE_AUTH_RESPONSE_TYPE,
    scope: process.env.GOOGLE_AUTH_SCOPE,
    prompt: process.env.GOOGLE_AUTH_PROMPT,
  };

  res.redirect(process.env.GOOGLE_AUTH_URL + stringify(authConfig));
});

authRouter.get('/redirect', async (req: Request, res: Response) => {
  // get google user info
  // ...
  res.redirect('/', 301);
});

export default authRouter;
