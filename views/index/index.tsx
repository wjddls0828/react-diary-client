import Layout from 'views/components/layout/index';
import { NextPage } from 'next';
import { Post } from 'share/interfaces/post';
import * as S from './styles';
import Sidebar from 'views/components/sidebar';
import Search from './search';
import Diarybox from './diarybox';
import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import postAPI from 'common/api/postAPI';

interface IndexPageProps {
  posts: Post[];
}

const IndexPage: NextPage<IndexPageProps> = ({ posts }) => {
  console.log(posts);

  const [users, setUsers] = useState(posts.slice(0, 50));
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;

  const diarybox = users.slice(pagesVisited, pagesVisited + usersPerPage).map((posts) => {
    return <Diarybox posts={posts} />;
  });

  const pageCount = Math.ceil(users.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <Layout>
      <Sidebar />
      <S.Mainpage>
        <Search />
        {diarybox}
        <ReactPaginate
          previousLabel={'이전'}
          nextLabel={'다음'}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={'pagebtn'}
          activeClassName={'page_active_btn'}
        />
      </S.Mainpage>
    </Layout>
  );
};

export default IndexPage;

export async function getServerSideProps() {
  const posts = await postAPI.getPostById(1);

  if (!posts) {
    return { props: { posts: null } };
  }

  return {
    props: { posts },
  };
}
