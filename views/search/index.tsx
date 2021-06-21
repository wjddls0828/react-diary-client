import { Post } from 'share/interfaces/post';
import { NextPage } from 'next';
import React from 'react';
import Layout from 'views/components/layout';
import Sidebar from 'views/components/sidebar';
import postAPI from 'common/api/postAPI';
import * as S from 'views/index/styles';
import DiaryBox from 'views/components/post-list/diary-box';
import ReactPaginate from 'react-paginate';
import { usePagedPosts } from './hooks/index';

interface SearchPageProps {
  initialPosts: Post[];
  term: string;
  total: number;
}

const SearchPage: NextPage<SearchPageProps> = ({ initialPosts, total, term }) => {
  const { pageCount, changePage, pagedPosts } = usePagedPosts(initialPosts, term, total);

  return (
    <Layout>
      <Sidebar />
      <S.Mainpage>
        <S.DiaryListContainer>
          <S.Diaryinfo>일기 검색 결과</S.Diaryinfo>
          <S.DiaryBoxContainer>
            {pagedPosts.length
              ? pagedPosts.map((post) => <DiaryBox key={post.id} post={post} />)
              : null}
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

export default SearchPage;

export async function getServerSideProps({ query }) {
  const { keyword } = query;
  const decodedTerm = decodeURIComponent(keyword);
  const { total, posts } = await postAPI.searchPosts(keyword, 1);
  return { props: { initialPosts: posts, total, term: decodedTerm } };
}
