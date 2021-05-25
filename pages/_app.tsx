import Head from 'next/head';
import { AppProps } from 'next/app';
import { UserProvider } from 'common/context/user/user';
import { User } from 'share/interfaces/user';

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

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

export default MyApp;
