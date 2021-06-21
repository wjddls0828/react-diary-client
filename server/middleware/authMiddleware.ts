import { NextFunction, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import { DecodedUserData } from '../../share/interfaces/user';
import Request from '../extend';

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  try {
    const accessToken = req.cookies.accessToken as string;
    const decodedData = jwt.verify(accessToken, process.env.JWT_SECRET) as DecodedUserData;
    const userId = decodedData.data.id;
    req.userId = userId;

    next();
  } catch (err) {
    res.status(403).send({ error: '로그인이 필요한 서비스입니다' });
  }
};

export default authMiddleware;
