import Layout from 'views/components/layout/index';
import { NextPage } from 'next';
import * as S from 'views/index/styles';
import Sidebar from 'views/components/sidebar';
import Diarybox from 'views/index/diarybox';
import React from 'react';
import ReactPaginate from 'react-paginate';
import postAPI from 'common/api/postAPI';
import Emptybox from 'views/index/emptybox';
import { PagedPosts, Post } from 'share/interfaces/post';
import MoodCalendar from 'views/index/mood-calendar';
import { usePagedPosts } from './hooks/usePagedPosts';
import { useRouter } from 'next/router';

interface MoodPageProps {
  initialPosts: Post[];
  total: number;
  moodId?: number;
}

const MoodPage: NextPage<MoodPageProps> = ({ initialPosts, moodId, total }) => {
  const router = useRouter();

  React.useEffect(() => {
    if (![1, 2, 3].includes(moodId)) {
      alert('존재하지 않는 moodId입니다!');
      router.back();
    }
  }, [router, moodId]);

  const { pageCount, changePage, pagedPosts } = usePagedPosts({ initialPosts, total, moodId });

  return (
    <Layout>
      <Sidebar />
      <S.Mainpage>
        <S.CalendarContainer>
          <MoodCalendar />
        </S.CalendarContainer>
        <S.DiaryListContainer>
          <S.Diaryinfo>나의 일기들</S.Diaryinfo>
          <S.DiaryBoxContainer>
            {pagedPosts.length ? (
              pagedPosts.map((post) => {
                return <Diarybox key={post.id} post={post} />;
              })
            ) : (
              <Emptybox />
            )}
          </S.DiaryBoxContainer>
          <S.Pgbox>
            {pageCount > 0 && (
              <ReactPaginate
                pageRangeDisplayed={2}
                marginPagesDisplayed={3}
                previousLabel={'이전'}
                nextLabel={'다음'}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={'pagebtn'}
                activeClassName={'page_active_btn'}
              />
            )}
          </S.Pgbox>
        </S.DiaryListContainer>
      </S.Mainpage>
    </Layout>
  );
};

export default MoodPage;

export async function getServerSideProps({ query }) {
  const { moodId: rawMoodId } = query;
  const moodId = parseInt(rawMoodId);

  if (![1, 2, 3].includes(moodId)) {
    return { props: { total: 0, initialPosts: [], moodId: 0 } };
  }

  const data: PagedPosts = await postAPI.getPostsByMoodId(moodId, 1);

  if (!data) {
    return { props: { total: 0, initialPosts: [], moodId } };
  }

  const { total, posts } = data;

  return { props: { total, initialPosts: posts, moodId } };
}
