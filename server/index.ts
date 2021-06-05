import postRouter from './routes/post';
import authRouter from './routes/auth';
import authMiddleware from './middleware/authMiddleware';
import cookieParser from 'cookie-parser';
import { loadEnvConfig } from '@next/env';

const express = require('express');
const next = require('next');
const dotenv = require('dotenv');
const cors = require('cors');

const dev = process.env.NODE_ENV !== 'production';

dotenv.config(); //for prod
loadEnvConfig('./', dev); //for dev

const port = process.env.SERVER_PORT;
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();
    server.use(cookieParser());
    server.use(express.json());
    server.use(cors());

    server.use('/api/auth', authRouter);
    server.use('/api/posts', authMiddleware, postRouter);

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(port, () => {
      console.log(`> Ready on http://localhost:${port}`);
    });
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
