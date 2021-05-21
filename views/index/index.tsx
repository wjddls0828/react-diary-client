import Layout from 'views/components/layout/index';
import { NextPage } from 'next';
import { Post } from 'share/interfaces/post';
import { getMockdata } from 'share/utils/mock-data';
import * as S from './styles';
import Sidebar from 'views/components/sidebar';

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
  const data = await getMockdata();

  return {
    props: { posts: data },
  };
}
