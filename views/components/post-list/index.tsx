import React from 'react';
import Diarybox from './diary-box';
import ReactPaginate from 'react-paginate';
import * as S from './styles';
import { usePagedPosts } from './hooks';
import { Post } from 'share/interfaces/post';

interface PostListProps {
  initialPosts: Post[];
  total: number;
}

const PostList: React.FC<PostListProps> = ({ initialPosts, total }) => {
  const { pageCount, changePage, pagedPosts } = usePagedPosts({ initialPosts, total });

  return (
    <S.DiaryListContainer>
      <S.DiaryBoxContainer>
        {pagedPosts.length &&
          pagedPosts.map((post) => {
            return <Diarybox key={post.id} post={post} />;
          })}
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
  );
};

export default PostList;
