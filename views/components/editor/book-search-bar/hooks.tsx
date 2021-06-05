import { useState, useCallback } from 'react';
import naverAPI from 'common/api/naver/naverAPI';
import { NaverBook, PagedNaverBooks } from 'share/interfaces/naverBook';
import { POSTS_PER_PAGE } from 'share/constant';

export const usePagedBooks = () => {
  const [keyword, setKeyword] = useState();
  const [books, setBooks] = useState<NaverBook[]>();

  const getBooksByPage = useCallback(
    (page: number) => async () => {
      if (!keyword) {
        alert('검색어를 입력해주세요');
        return;
      }

      const start = (page - 1) * POSTS_PER_PAGE + 1;
      const pagedBooks: PagedNaverBooks = await naverAPI.searchBookByKeyword(keyword, start);
      if (!pagedBooks) return;

      const { items } = pagedBooks;
      setBooks(items);
    },
    [keyword]
  );

  const handleChangeKeyword = useCallback((e) => {
    setKeyword(e.currentTarget.value);
  }, []);

  return {
    books,
    keyword,
    handleChangeKeyword,
    getBooksByPage,
  };
};
