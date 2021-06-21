import React from 'react';
import * as S from './styles';

const BookSearchCard = ({ book, onClick }) => {
  const { title, image, author } = book;
  const titleText = title.replace(/<[^>]*>/g, '');

  return (
    <S.BookSearchCardContainer>
      <S.BookSearchCard onClick={onClick}>
        <S.BookCardImage src={image} />
        <S.BookCardInfo>
          <S.BookCardTitle>{titleText}</S.BookCardTitle>
          <S.BookCardMeta> {author}</S.BookCardMeta>
        </S.BookCardInfo>
      </S.BookSearchCard>
    </S.BookSearchCardContainer>
  );
};

export default React.memo(BookSearchCard);
