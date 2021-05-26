import postRouter from './routes/post';
const express = require('express');
const next = require('next');
const dotenv = require('dotenv');

dotenv.config();

const port = process.env.SERVER_PORT;
const app = next({ dev: true });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.use('/api/posts', postRouter);

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
