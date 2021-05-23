import { Router, Request, Response } from 'express';
import { stringify } from 'querystring';
import { RawGoogleUser, GoogleUserDTO } from '../service/google/dto/googleUserDto';
import { User } from '../../share/interfaces/user';
import { GoogleAuthService } from '../service/google/googleAuth';
import { UserModel } from '../service/userService';
import setAccessTokenCookie from '../utils/setAccessCookie';

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

  const userData = new GoogleUserDTO(googleUser);
  const appUser: User = await UserModel.validateUser(userData);
  const appAccessToken: string = UserModel.createAccessToken(appUser);

  setAccessTokenCookie(res, appAccessToken);

  res.redirect('/', 301);
});

export default authRouter;
