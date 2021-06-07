import React from 'react';
import * as S from './styles';

const BookSearchCard = ({ book, onClick }) => {
  const { title, image, author, publisher, pubdate } = book;
  const titleText = title.replace(/<[^>]*>/g, '');

  const pubDate = pubdate.slice(0, 4) + '.' + pubdate.slice(4, 6) + '.' + pubdate.slice(6, 8);

  return (
    <S.BookSearchCard onClick={onClick}>
      <img src={image} />
      <S.BookCardInfo>
        <S.BookCardTitle>{titleText}</S.BookCardTitle>
        <S.BookCardMeta> 저자 {author}</S.BookCardMeta>
        <S.BookCardMeta> 출판 {publisher}</S.BookCardMeta>
        <p> 발매 {pubDate}</p>
      </S.BookCardInfo>
    </S.BookSearchCard>
  );
};

export default React.memo(BookSearchCard);
