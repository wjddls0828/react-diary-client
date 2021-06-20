import React from 'react';
import * as S from './styles';
import { ContentState, convertFromRaw } from 'draft-js';
import { Post } from 'share/interfaces/post';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { MOOD_ICONS } from 'common/constant';

const Diarybox: React.FC<{ post: Post }> = ({ post }) => {
  const { id, createdAt, content, moodId } = post;
  let contentText: string;
  const parsedContent: ContentState = convertFromRaw(JSON.parse(content));
  contentText = parsedContent.getPlainText();
  contentText = contentText.trim();

  if (!contentText.length) {
    contentText = '...';
  }
  const router = useRouter();
  const handleClick = () => {
    router.push(`post/${id}`);
  };

  const iconSrc = React.useMemo(() => {
    return MOOD_ICONS.find((mood) => mood.id === moodId).src;
  }, [moodId]);

  return (
    <S.DiaryBox onClick={handleClick}>
      <S.forleft>
        <Image src={`/${iconSrc}`} width={'20px'} height={'20px'} />
      </S.forleft>
      <S.contentbox>{contentText.slice(0, 30)}</S.contentbox>
      <S.datebox>{createdAt.slice(0, 10)}</S.datebox>
    </S.DiaryBox>
  );
};
export default React.memo(Diarybox);
