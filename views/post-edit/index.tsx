import Layout from 'views/components/layout/index';
import * as S from './styles';
import Editor from 'views/components/editor';
import { GetServerSideProps } from 'next';
import postAPI from 'common/api/postAPI';
import { ContentState, convertFromRaw } from 'draft-js';
import { Post } from 'share/interfaces/post';

const PostEditPage = ({ post }: { post: Post }) => {
  const { id, content } = post;
  const contentState: ContentState = convertFromRaw(JSON.parse(content));

  return (
    <Layout>
      <S.PostEditPageContainer>
        <Editor postState={{ id, contentState }} />
      </S.PostEditPageContainer>
    </Layout>
  );
};

export default PostEditPage;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const id = params.id as string;
  const post: Post = await postAPI.getPostById(parseInt(id));

  if (!post) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return { props: { post } };
};
