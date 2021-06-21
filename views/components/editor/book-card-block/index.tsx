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
  const blockData: { data: Partial<NaverBook> } = contentState
    .getEntity(block.getEntityAt(0))
    .getData();

  const { title, image, author } = blockData.data;
  const titleText = title.replace(/<[^>]*>/g, '');

  return (
    <S.BookCard contentEditable={false}>
      <S.BookCardImage src={image} />
      <S.BookCardInfo>
        <S.BookCardTitle>{titleText}</S.BookCardTitle>
        <S.BookCardMeta> {author}</S.BookCardMeta>
      </S.BookCardInfo>
    </S.BookCard>
  );
};

export default React.memo(BookCardBlock);
