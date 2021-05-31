import Link from 'next/link';

const LoginPage = () => {
  return (
    <>
      <Link href={process.env.API_BASE_URL + '/auth/google'}>로그인 페이지</Link>
    </>
  );
};

export default LoginPage;
