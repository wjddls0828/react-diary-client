import React from 'react';
import * as S from './styles';
import { ContentState, convertFromRaw } from 'draft-js';
import { Post } from 'share/interfaces/post';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { MOOD_ICONS, MoodIcon } from 'common/constant';

var icon;

const Diarybox: React.FC<{ post: Post }> = ({ post }) => {
  const { id, createdAt, content, moodId } = post;
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
  const router = useRouter();
  const handleClick = () => {
    router.push(`post/${id}`);
  };

  if (moodId == 1) {
    icon = '/good.png';
  } else if (moodId == 2) {
    icon = '/sad.png';
  } else if (moodId == 3) {
    icon = '/soso.PNG';
  }

  return (
    <S.DiaryBox onClick={handleClick}>
      <S.forleft>
        <Image src={icon} width={'20px'} height={'20px'} />
      </S.forleft>
      <S.contentbox>{contentText.slice(0, 30)}</S.contentbox>
      <S.datebox>{createdAt.slice(0, 10)}</S.datebox>
    </S.DiaryBox>
  );
};
export default React.memo(Diarybox);
