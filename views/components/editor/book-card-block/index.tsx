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

  const { title, image, author } = blockData.data;
  const titleText = title.replace(/<[^>]*>/g, '');

  const onClick = () => {
    // TODO: 삭제, 정렬 버튼 보이게?
  };

  return (
    <S.BookCard onClick={onClick} contentEditable={false}>
      <S.BookCardImage src={image} />
      <S.BookCardInfo>
        <S.BookCardTitle>{titleText}</S.BookCardTitle>
        <S.BookCardMeta> {author}</S.BookCardMeta>
      </S.BookCardInfo>
    </S.BookCard>
  );
};

export default React.memo(BookCardBlock);
