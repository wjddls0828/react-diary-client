const express = require('express');
const next = require('next');

const port = 3000;
const app = next({ dev: true });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.get('*', (req, res) => {
      return handle(req, res, '*');
    });

    server.listen(port, () => {
      console.log(`> Ready on http://localhost:${port}`);
    });
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
