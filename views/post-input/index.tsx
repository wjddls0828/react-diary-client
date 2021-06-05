import Layout from 'views/components/layout/index';
import * as S from './styles';
import Editor from 'views/components/editor';

const PostInputPage = () => {
  return (
    <Layout>
      <S.PostInputPageContainer>
        <Editor />
      </S.PostInputPageContainer>
    </Layout>
  );
};

export default PostInputPage;
