import React from 'react';
import { usePagedBooks } from './hooks';
import Pagination from 'views/components/pagination';
import { BookSearchProps } from './types';
import * as S from './styles';
import { AiOutlineSearch } from 'react-icons/ai';
import BookSearchCard from './book-search-card';
import { GiSpellBook } from 'react-icons/gi';
import { NaverBook } from 'share/interfaces/naverBook';

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

  const handleClickSearchedBook = (book: NaverBook) => {
    const parsedBook = {
      title: book.title,
      author: book.author,
      link: book.link,
    };

    insertOnEditor(parsedBook);
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
          placeholder={'검색어를 입력하세요'}
        />
      </S.SearchContainer>

      {books ? (
        <>
          <S.BookSearchList>
            <S.Row>
              {books.map((book) => {
                return (
                  <BookSearchCard
                    key={book.link}
                    book={book}
                    onClick={() => handleClickSearchedBook(book)}
                  />
                );
              })}
              <S.PaginationContainer>
                <Pagination
                  currentPage={currentPage}
                  maxPage={maxPage}
                  updatePage={updateCurrentPage}
                  columnStyle={true}
                />
              </S.PaginationContainer>
            </S.Row>
          </S.BookSearchList>
        </>
      ) : (
        <S.EmptyBookSearchList>
          <GiSpellBook />
          오늘은 어떤 책을 읽었나요?
        </S.EmptyBookSearchList>
      )}
    </S.BookSeachBar>
  );
};

export default React.memo(BookSearchBar);
