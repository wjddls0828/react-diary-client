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
import MoodCount from './mood-count';
import { getCurrentYearMonth } from 'common/utils/getCurrentYearMonth';
import { PagedPosts, Post, PostCountsByMoodId } from 'share/interfaces/post';
import SearchFeature from './SearchFeature';
import { useState } from 'react';
interface IndexPageProps {
  initialPosts: Post[];
  total: number;
  moodCounts: PostCountsByMoodId[];
}

const IndexPage: NextPage<IndexPageProps> = ({ initialPosts, total, moodCounts }) => {
  const [posts, setPosts] = useState(initialPosts);
  const { pageCount, changePage, pagedPosts } = usePagedPosts({ initialPosts, total });
  const [SearchTerm, setSearchTerm] = useState('');
  const monthlyTotal = useMemo(
    () =>
      moodCounts.reduce((acc, mood) => {
        return acc + mood.count;
      }, 0),
    [moodCounts]
  );

  const updateSearchTerm = (newSearchTerm) => {
    setSearchTerm(newSearchTerm);
    if (newSearchTerm) {
      postAPI.searchPosts(newSearchTerm, pageCount).then((value) => {
        console.log(value);
        setPosts(value);
      });
    }
  };

  return (
    <Layout>
      <Sidebar />

      <S.Mainpage>
        <S.DiaryListContainer>
          <S.DiaryBoxContainer>
            {pagedPosts.length ? (
              pagedPosts.map((post) => {
                return <Diarybox key={post.id} post={post} />;
              })
            ) : (
              <Emptybox />
            )}
          </S.DiaryBoxContainer>

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
          <SearchFeature refreshFunction={updateSearchTerm} />
        </S.DiaryListContainer>

        <S.MonthlyMoodCountContainer>
          <S.MoodCountContainerTitle>이번 달 내 기분은 ...</S.MoodCountContainerTitle>
          {moodCounts &&
            moodCounts.map((moodCount) => {
              return (
                <MoodCount key={moodCount.moodId} moodCount={moodCount} total={monthlyTotal} />
              );
            })}
        </S.MonthlyMoodCountContainer>
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
