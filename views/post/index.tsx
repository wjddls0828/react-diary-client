import Layout from 'views/components/layout/index';
import Sidebar from 'views/components/sidebar';
import React from 'react';
import router from 'next/router';
import ThemeButton from 'views/components/theme-button';
import { GetServerSideProps } from 'next';
import { getMockdata } from '../../share/utils/mock-data';
import * as S from './styles';

const PostViewPage = ({ post }) => {
  const deletePost = () => {
    const deleteCheck = confirm('삭제된 글은 복구가 불가능합니다.\n글을 삭제하시겠습니까?');
    if (!deleteCheck) return;
    else return; /* 삭제 구현할 부분 */
  };

  return (
    <Layout>
      <Sidebar />
      <S.PageContentContainer>
        <S.PostContainer>
          <S.EmojiDateContainer>
            {post.moodId} {post.createdAt}
          </S.EmojiDateContainer>
          <S.PostContent>{post.content}</S.PostContent>
        </S.PostContainer>
        <S.ButtonContainer>
          <ThemeButton
            text={'수정하기'}
            onClick={() => router.replace('/post')}
            isBrownTheme={true}
          />
          <ThemeButton text={'삭제하기'} onClick={deletePost} isBrownTheme={false} />
        </S.ButtonContainer>
      </S.PageContentContainer>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id;
  const posts = await getMockdata();
  const item = posts.find((data) => data.id === Number(id));
  return { props: { post: item } };
};
export default PostViewPage;
