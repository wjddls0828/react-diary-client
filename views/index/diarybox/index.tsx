import React from 'react';
import { Panel } from 'primereact/panel';
import * as S from './styles';
import { ContentState, convertFromRaw } from 'draft-js';
import { Post } from 'share/interfaces/post';

const Diarybox: React.FC<{ post: Post }> = ({ post }) => {
  const { createdAt, content } = post;
  const date = createdAt.slice(0, 10);

  let contentText: string;
  try {
    const parsedContent: ContentState = convertFromRaw(JSON.parse(content));
    contentText = parsedContent.getPlainText();
    contentText = contentText.trim();

    if (!contentText.length) {
      contentText = '...';
    }
  } catch {
    contentText = content; // for 에디터 구현 이전의 posts
  }

  return (
    <S.DiaryBox>
      <Panel header={date}>
        <S.DiaryContent>{contentText}</S.DiaryContent>
      </Panel>
    </S.DiaryBox>
  );
};

export default React.memo(Diarybox);
