import React from 'react';
import { NaverBook } from 'share/interfaces/naverBook';
import * as S from './styles';
import { ContentBlock, ContentState } from 'draft-js';

interface EditorBlockProps {
  block: ContentBlock;
  contentState: ContentState;
  blockProps?: any;
}

const BookCardBlock: React.FC<EditorBlockProps> = (props) => {
  const { block, contentState } = props;
  const blockData: { data: NaverBook } = contentState.getEntity(block.getEntityAt(0)).getData();

  const { title, image, author, publisher, pubdate } = blockData.data;
  const titleText = title.replace(/<[^>]*>/g, '');
  const parsedTitle = titleText.length > 30 ? titleText.slice(0, 30) + '...' : titleText;
  const pubDate = pubdate.slice(0, 4) + '.' + pubdate.slice(4, 6) + '.' + pubdate.slice(6, 8);
  // TODO: util 정리

  const onClick = () => {
    // TODO: 삭제, 정렬 버튼 보이게?
  };

  return (
    <S.BookCard onClick={onClick} contentEditable={false}>
      <img src={image} />
      <S.BookCardInfo>
        <S.BookCardTitle>{parsedTitle}</S.BookCardTitle>
        <p> 저자 {author}</p>
        <p> 출판 {publisher}</p>
        <p> 발매 {pubDate}</p>
      </S.BookCardInfo>
    </S.BookCard>
  );
};

export default React.memo(BookCardBlock);
