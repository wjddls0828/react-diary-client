import { Response } from 'express';

const setAccessTokenCookie = (res: Response, accessToken: string) => {
  res.cookie('accessToken', accessToken);
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Cache-Control', ['no-cache', 'no-store', 'must-revalidate']);
};

export default setAccessTokenCookie;
