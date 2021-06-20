import Head from 'next/head';
import App, { AppContext, AppProps } from 'next/app';
import jwt from 'jsonwebtoken';
import cookie from 'cookie';
import axios from 'common/api/axios';
import { DecodedUserData, User } from 'share/interfaces/user';
import { UserProvider } from 'common/context/user/user';

import 'views/components/global-styles/paging.css';

interface CustomAppProps extends AppProps {
  user: User;
}

function MyApp({ Component, pageProps, user }: CustomAppProps) {
  return (
    <>
      <Head>
        <title>My DIARY</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name='description' content='Web site created using create-next-app' />
      </Head>
      <UserProvider user={user}>
        <Component {...pageProps} />
      </UserProvider>
    </>
  );
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const { req, res, pathname } = appContext.ctx;
  const appProps = await App.getInitialProps(appContext);
  const userProps: { user: User } = {
    user: null,
  };

  if (!req || pathname === '/login') {
    return { props: { ...appProps, user: null } };
  }

  try {
    const cookies = req.headers.cookie;
    if (cookies) {
      axios.defaults.headers.Cookie = cookies; // 모든 axios 요청 시 쿠키 데이터를 심어줌 for SSR
    }

    const accessToken: string = cookie.parse(cookies).accessToken;
    const userData = jwt.verify(accessToken, process.env.JWT_SECRET) as DecodedUserData;
    userProps.user = userData.data;
  } catch (err) {
    console.log(err);

    // if (typeof res.writeHead === 'function')
    res.writeHead(302, { Location: '/login' }).end();

    return { props: { ...appProps, user: null } };
  }

  return {
    ...appProps,
    ...userProps,
  };
};

export default MyApp;
