import Layout from 'views/components/layout/index';
import Sidebar from 'views/components/sidebar';
import React from 'react';
import router from 'next/router';
import ThemeButton from 'views/components/theme-button';
import { NextPage } from 'next';
import { ListBox } from 'primereact/listbox';
import { PagedPosts, Post } from 'share/interfaces/post';
import { GetServerSideProps } from 'next';
import { ContentState, convertFromRaw } from 'draft-js';
import { MOOD_ICONS, MoodIcon } from 'common/constant';
import Image from 'next/image';
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
  const moodIcon: MoodIcon = MOOD_ICONS.find((icon) => icon.id === post.moodId);
  const bgcolorHandler = React.useMemo(() => {
    switch (post.moodId) {
      case 1:
        return '#fcdad7';
      case 2:
        return '#f5e8bf';
      case 3:
        return '#b1cade';
      default:
        return '#c1b7b7';
    }
  }, [post.moodId]);

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
    let contentText: string;
    try {
      const parsedContent: ContentState = convertFromRaw(JSON.parse(p.content));
      contentText = parsedContent.getPlainText();
      contentText = contentText.trim();
      contentText = contentText.slice(0, 20);
      if (!contentText.length) {
        contentText = '...';
      }
    } catch {
      contentText = p.content;
    }

    return {
      label: p.moodId + '\t' + p.createdAt.slice(0, 10) + '\t' + contentText + '...',
      value: p.id,
    };
  });

  return (
    <Layout>
      <Sidebar />
      <S.PageContentContainer>
        <S.PostContainer>
          <S.EmojiDateContainer backgroundColor={bgcolorHandler}>
            <Image src={`/${moodIcon.src}`} width={'50px'} height={'50px'} />{' '}
            {post.createdAt.slice(0, 10)}​
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
  const id = context.params?.id; // TODO: id에 해당하는 글 없는경우 처리
  const item = await postAPI.getPostById(Number(id));
  const data: PagedPosts = await postAPI.getAllPostsByPage(1); // TODO: 해당 포스트의 page 번호 어떻게 알수있나?
  const { total, posts } = data;
  return { props: { post: item, postList: posts } };
};

export default PostViewPage;
