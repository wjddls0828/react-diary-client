import Layout from 'views/components/layout/index';
import { Button } from 'primereact/button';
import * as S from './styles';

const PostInputPage = () => {
  return (
    <Layout>
      <S.PostInputPageContainer>
        <S.EditorContainer>
          <textarea id='post-content' cols={80} rows={30}></textarea>
        </S.EditorContainer>
        <S.TagComponentContainer>(태그 컴포넌트 위치)</S.TagComponentContainer>
        <S.ButtonContainer>
          <Button>임시저장</Button>
          <Button>업로드</Button>
        </S.ButtonContainer>
      </S.PostInputPageContainer>
    </Layout>
  );
};

export default PostInputPage;
