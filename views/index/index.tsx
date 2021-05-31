import Layout from 'views/components/layout/index';
import { NextPage } from 'next';
import { Post } from 'share/interfaces/post';
import * as S from './styles';
import Sidebar from 'views/components/sidebar';
import postAPI from 'common/api/postAPI';

interface IndexPageProps {
  posts: Post[];
}

const IndexPage: NextPage<IndexPageProps> = ({ posts }) => {
  console.log(posts);

  return (
    <Layout>
      <Sidebar />
      <S.IndexPage>메인 페이지</S.IndexPage>
    </Layout>
  );
};

export default IndexPage;

export async function getServerSideProps() {
  const posts = await postAPI.getPostById(1);

  if (!posts) {
    return { props: { posts: null } };
  }

  return {
    props: { posts },
  };
}
