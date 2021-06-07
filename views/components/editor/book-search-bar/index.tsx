import React from 'react';
import { usePagedBooks } from './hooks';
import Pagination from 'views/components/pagination';
import { BookSearchProps } from './types';
import * as S from './styles';
import { AiOutlineSearch } from 'react-icons/ai';

import BookSearchCard from './book-search-card';

const BookSearchBar: React.FC<BookSearchProps> = ({ insertOnEditor, show }) => {
  /* prettier-ignore */
  const {
    books,
    maxPage,
    currentPage,
    handleChangeKeyword,
    updateCurrentPage,
    getBooksByPage,
    resetPage,
  } = usePagedBooks();

  const searchBooks = () => {
    resetPage();
    getBooksByPage(currentPage)();
  };

  const handleEnterKeyPress = (e) => {
    if (e.keyCode === 13) {
      searchBooks();
    }
  };

  return (
    <S.BookSeachBar show={show}>
      <S.SearchContainer>
        <S.SearchButton onClick={searchBooks}>
          <AiOutlineSearch />
        </S.SearchButton>
        <S.SearchInput
          onChange={(e) => handleChangeKeyword(e)}
          onKeyUp={(e) => handleEnterKeyPress(e)}
        />
      </S.SearchContainer>

      {books && (
        <S.BookSearchList>
          {books.map((book) => {
            return (
              <BookSearchCard key={book.link} book={book} onClick={() => insertOnEditor(book)} />
              // TODO book에 필요한 정보만 넘기기
            );
          })}
          <Pagination currentPage={currentPage} maxPage={maxPage} updatePage={updateCurrentPage} />
        </S.BookSearchList>
      )}
    </S.BookSeachBar>
  );
};

export default React.memo(BookSearchBar);
