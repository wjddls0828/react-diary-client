// for transpiling all ESM @fullcalendar/* packages
// also, for piping fullcalendar thru babel (to learn why, see babel.config.js)
const withTM = require('next-transpile-modules')([
  '@fullcalendar/common',
  '@fullcalendar/react',
  '@fullcalendar/daygrid',
]);

module.exports = withTM({
  async rewrites() {
    return [
      {
        source: '/naver-api/:slug*',
        destination: 'https://openapi.naver.com/v1/search/book.json' + '/:slug*',
      },
    ];
  },

  env: {
    JWT_SECRET: process.env.JWT_SECRET,
    API_BASE_URL: process.env.SERVER_BASE_URL,
    NAVER_API_CLIENT_ID: process.env.NAVER_API_CLIENT_ID,
    NAVER_API_CLIENT_SECRET: process.env.NAVER_API_CLIENT_SECRET,
  },
  webpack5: false,
});
