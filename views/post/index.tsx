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
import postAPI from 'common/api/postAPI';
import DraftViewer from 'views/components/editor-viewer';
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
    else {
      const result = postAPI.deletePost(post.id);
      if (!result) alert('삭제 실패');
      else alert('삭제가 완료되었습니다.\n다이어리 홈 화면으로 이동합니다.');
      router.replace('/');
    }
  };

  const updatePost = () => {
    router.push(`/post/${post.id}/edit`);
  };

  const otherPostClickHandler = (list) => {
    router.push('/post/' + list.value);
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
            {post.moodId} {post.createdAt.slice(0, 10)}​
          </S.EmojiDateContainer>
          <S.PostContent>
            <DraftViewer rawPostContent={post.content} />​
          </S.PostContent>
        </S.PostContainer>
        <S.ButtonContainer>
          <ThemeButton
            width={'150px'}
            text={'홈으로'}
            onClick={() => router.push('/')}
            isBrownTheme={true}
          />
          <S.EditDeleteButtonContainer>
            ​<ThemeButton text={'수정하기'} onClick={updatePost} isBrownTheme={true} />
            ​<ThemeButton text={'삭제하기'} onClick={deletePost} isBrownTheme={false} />​
          </S.EditDeleteButtonContainer>
        </S.ButtonContainer>
        <S.ListContainer>
          <S.OtherPosts>다른 글 보기</S.OtherPosts>
          <ListBox options={otherPosts} onChange={otherPostClickHandler} />​
        </S.ListContainer>
      </S.PageContentContainer>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id;
  const posts = await getMockdata();
  const item = await postAPI.getPostById(Number(id));
  const otherPosts = posts.filter(
    (data) => data.id === Number(id) - 1 || data.id === Number(id) + 1 //TODO: 글 목록 앞뒤 글 말고 다르게 받아오기 ?
  );
  return { props: { post: item, postList: otherPosts } };
};

export default PostViewPage;
