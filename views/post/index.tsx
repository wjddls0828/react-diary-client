import Layout from 'views/components/layout/index';
import Sidebar from 'views/components/sidebar';
import React from 'react';
import router from 'next/router';
import ThemeButton from 'views/components/theme-button';
import { NextPage } from 'next';
import { ListBox } from 'primereact/listbox';
import { Post } from 'share/interfaces/post';
import { GetServerSideProps } from 'next';
import { getMockdata } from '../../share/utils/mock-data';
import * as S from './styles';

interface PostViewPageProps {
  post: Post;
  postList: Post[];
}
interface PostListProps {
  label: string;
  value: number;
}
const PostViewPage: NextPage<PostViewPageProps> = ({ post, postList }) => {
  const deletePost = () => {
    const deleteCheck = confirm('삭제된 글은 복구가 불가능합니다.\n글을 삭제하시겠습니까?');
    if (!deleteCheck) return;
    else return; //TODO: api 연동 후 삭제 구현
  };
  const otherPosts = postList.map((p: Post): PostListProps => {
    return {
      label: p.moodId + '\t' + p.createdAt + '\t' + p.content.slice(0, 20) + '...',
      value: p.id,
    };
  });

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
            width={'150px'}
            text={'돌아가기'}
            onClick={() => router.back()}
            isBrownTheme={true}
          />
          <S.EditDeleteButtonContainer>
            <ThemeButton
              text={'수정하기'}
              onClick={() => router.replace('/post')} //TODO: api 연동 후 수정 구현
              isBrownTheme={true}
            />
            <ThemeButton text={'삭제하기'} onClick={deletePost} isBrownTheme={false} />
          </S.EditDeleteButtonContainer>
        </S.ButtonContainer>
        <S.ListContainer>
          <S.OtherPosts>다른 글 보기</S.OtherPosts>
          <ListBox options={otherPosts} onChange={(e) => router.replace('/post/' + e.value)} />
        </S.ListContainer>
      </S.PageContentContainer>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id;
  const posts = await getMockdata();
  const item = posts.find((data) => data.id === Number(id)); //TODO: id에 match 되는 post 없는 경우
  const otherPosts = posts.filter(
    (data) => data.id === Number(id) - 1 || data.id === Number(id) + 1 //TODO: 글 목록 앞뒤 글 말고 다르게 받아오기 ?
  );
  return { props: { post: item, postList: otherPosts } };
};
export default PostViewPage;
