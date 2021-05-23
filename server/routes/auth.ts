import { Router, Request, Response } from 'express';
import { stringify } from 'querystring';
import { RawGoogleUser } from '../service/google/dto/googleUserDto';
import { GoogleAuthService } from '../service/google/googleAuth';

const authRouter: Router = Router();

authRouter.get('/google', async (req: Request, res: Response) => {
  const authConfig = GoogleAuthService.getGoogleAuthConfig();
  res.redirect(process.env.GOOGLE_AUTH_URL + stringify(authConfig));
});

authRouter.get('/redirect', async (req: Request, res: Response) => {
  const reqCode = req.query.code as string;
  const googleAccessToken: string = await GoogleAuthService.getGoogleAuthAccessToken(reqCode);
  const googleUser: RawGoogleUser = await GoogleAuthService.getGoogleUserInfoByToken(
    googleAccessToken
  );
  console.log(googleUser);

  // pass to app userService
  // ...

  res.redirect('/', 301);
});

export default authRouter;
