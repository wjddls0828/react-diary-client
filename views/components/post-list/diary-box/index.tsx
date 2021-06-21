import React from 'react';
import * as S from './styles';
import { ContentState, convertFromRaw } from 'draft-js';
import { Post } from 'share/interfaces/post';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { MOOD_ICONS } from 'common/constant';

const Diarybox: React.FC<{ post: Post }> = ({ post }) => {
  const { id, createdAt, content, moodId } = post;
  const date = createdAt.slice(0, 10);

  let contentText: string;
  const parsedContent: ContentState = convertFromRaw(JSON.parse(content));
  contentText = parsedContent.getPlainText();
  contentText = contentText.trim();
  if (!contentText.length) {
    contentText = '...';
  }
 
  const router = useRouter();
  const handleClick = () => {
    router.push(`/post/${id}`);
  };

  const iconSrc = React.useMemo(() => {
    return MOOD_ICONS.find((mood) => mood.id === moodId).src;
  }, [moodId]);

  return (
    <S.DiaryBox onClick={handleClick}>
      <S.iconAndContent>
        <S.forleft>
          <Image src={`/${iconSrc}`} width={'25px'} height={'25px'} />
        </S.forleft>
        <S.contentbox>{contentText.slice(0, 30)}</S.contentbox>
      </S.iconAndContent>
      <S.datebox>{date}</S.datebox>
    </S.DiaryBox>
  );
};

export default React.memo(Diarybox);
