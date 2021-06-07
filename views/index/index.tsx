import Layout from 'views/components/layout/index';
import { NextPage } from 'next';
import * as S from './styles';
import Sidebar from 'views/components/sidebar';
import Diarybox from './diarybox';
import React, { useMemo } from 'react';
import ReactPaginate from 'react-paginate';
import postAPI from 'common/api/postAPI';
import { usePagedPosts } from './hooks';
import Emptybox from './emptybox';
import { PagedPosts, Post, PostCountsByMoodId } from 'share/interfaces/post';
import { getCurrentYearMonth } from 'common/utils/getCurrentYearMonth';
interface IndexPageProps {
  initialPosts: Post[];
  total: number;
  moodCounts: PostCountsByMoodId[];
}

const IndexPage: NextPage<IndexPageProps> = ({ initialPosts, total, moodCounts }) => {
  const { pageCount, changePage, pagedPosts } = usePagedPosts({ initialPosts, total });

  return (
    <Layout>
      <Sidebar />

      <S.Mainpage>
        <S.MonthlyMoodCountContainer>
          <S.MoodCountContainerTitle>이번 달 내 기분은 ...</S.MoodCountContainerTitle>
          {moodCounts &&
            moodCounts.map((moodCount: PostCountsByMoodId) => {
              return <div key={moodCount.moodId}>{moodCount.count}</div>;
            })}
        </S.MonthlyMoodCountContainer>

        {pagedPosts.length ? (
          pagedPosts.map((post) => {
            return <Diarybox key={post.id} post={post} />;
          })
        ) : (
          <Emptybox />
        )}

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
      </S.Mainpage>
    </Layout>
  );
};

export default IndexPage;

export async function getServerSideProps() {
  const data: PagedPosts = await postAPI.getAllPostsByPage(1);
  const term = getCurrentYearMonth(); // TODO - SSR ok?
  const moodCounts = await postAPI.getMonthlyMoodPostCounts(term);

  if (!data || !moodCounts) {
    return { props: { total: 0, initialPosts: [], moodCounts: [] } };
  }

  const { total, posts } = data;

  return {
    props: { total, initialPosts: posts, moodCounts },
  };
}
