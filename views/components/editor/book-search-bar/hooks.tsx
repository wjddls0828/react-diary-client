/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useCallback } from 'react';
import naverAPI from 'common/api/naver/naverAPI';
import { NaverBook, PagedNaverBooks } from 'share/interfaces/naverBook';

const DEFAULT_PAGE = 1;
const BOOK_RESULTS_PER_PAGE = 7;

export const usePagedBooks = () => {
  const [keyword, setKeyword] = useState();
  const [maxPage, setMaxPage] = useState(DEFAULT_PAGE);
  const [currentPage, setCurrentPage] = useState(DEFAULT_PAGE);
  const [books, setBooks] = useState<NaverBook[]>();

  const updateCurrentPage = useCallback(
    (idx) => () => {
      setCurrentPage(idx);
    },
    []
  );

  const resetPage = useCallback(() => {
    setCurrentPage(DEFAULT_PAGE);
    setMaxPage(DEFAULT_PAGE);
  }, []);

  const getBooksByPage = useCallback(
    (page: number) => async () => {
      if (!keyword) {
        alert('검색어를 입력해주세요');
        return;
      }

      const start = (page - 1) * BOOK_RESULTS_PER_PAGE + 1;
      const pagedBooks: PagedNaverBooks = await naverAPI.searchBookByKeyword(
        keyword,
        BOOK_RESULTS_PER_PAGE,
        start
      );
      if (!pagedBooks) return;

      const { total, display, items } = pagedBooks;
      setBooks(items);

      if (currentPage === DEFAULT_PAGE && total) {
        setMaxPage(Math.ceil(total / display));
      }
    },
    [keyword]
  );

  const handleChangeKeyword = useCallback((e) => {
    setKeyword(e.currentTarget.value);
  }, []);

  useEffect(() => {
    if (!keyword) return;

    getBooksByPage(currentPage)();
  }, [currentPage]);

  return {
    books,
    keyword,
    maxPage,
    currentPage,
    handleChangeKeyword,
    resetPage,
    getBooksByPage,
    setCurrentPage,
    updateCurrentPage,
  };
};
