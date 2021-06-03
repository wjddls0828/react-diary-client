import { Request } from 'express';
import * as jwt from 'jsonwebtoken';
import { DecodedUserData } from '../../share/interfaces/user';

const decodeAccessTokenCookie = (req: Request): number => {
  const accessToken = req.headers.accessToken as string;
  const decodedData = jwt.verify(accessToken, process.env.JWT_SECRET) as DecodedUserData;
  const userId = decodedData.data.id;

  return userId;
};

export default decodeAccessTokenCookie;
