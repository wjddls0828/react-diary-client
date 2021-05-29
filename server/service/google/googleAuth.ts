import { stringify } from 'querystring';
import axios from 'axios';
import { AxiosResponse } from 'axios';
import { RawGoogleUser } from './dto/googleUserDto';

export class GoogleAuthService {
  static getGoogleAuthConfig = () => {
    const authConfig = {
      client_id: process.env.GOOGLE_CLIENT_ID,
      redirect_uri: process.env.GOOGLE_REDIRECT_URI,
      response_type: process.env.GOOGLE_AUTH_RESPONSE_TYPE,
      scope: process.env.GOOGLE_AUTH_SCOPE,
      prompt: process.env.GOOGLE_AUTH_PROMPT,
    };

    return authConfig;
  };

  // token 요청
  static getGoogleAuthAccessToken = async (code: string): Promise<string> => {
    const tokenConfig = {
      code: code,
      client_id: process.env.GOOGLE_CLIENT_ID,
      client_secret: process.env.GOOGLE_CLIENT_SECRET,
      redirect_uri: process.env.GOOGLE_REDIRECT_URI,
      grant_type: 'authorization_code',
    };

    const tokenResponse: AxiosResponse = await axios
      .post(process.env.GOOGLE_AUTH_TOKEN_URL + stringify(tokenConfig))
      .catch((error) => {
        console.error(error);
        throw new Error('토큰 인증 오류입니다.'); //TODO: error with status ccode
      });

    return tokenResponse.data.access_token;
  };

  // userinfo 요청
  static getGoogleUserInfoByToken = async (accessToken: string): Promise<RawGoogleUser> => {
    const response: AxiosResponse = await axios
      .get(process.env.GOOGLE_AUTH_USERINFO_URL, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .catch((error) => {
        console.error(error);
        throw new Error('인증 되지 않은 사용자입니다.');
      });

    return response.data;
  };
}
