import * as S from './styles';
import React from 'react';
import Image from 'next/image';
import { PostCountsByMoodId } from 'share/interfaces/post';
import { MOOD_ICONS, MoodIcon } from 'common/constant';

interface MoodCountProps {
  moodCount: PostCountsByMoodId;
  total: number;
}

const MoodCount: React.FC<MoodCountProps> = ({ moodCount, total }) => {
  const { moodId, count } = moodCount;

  const moodIcon: MoodIcon = MOOD_ICONS.find((icon) => icon.id === moodId);
  const percent: number = total ? Math.ceil(count / total) * 100 : 0;

  return (
    <S.MoodCount key={moodId}>
      <Image src={`/${moodIcon.src}`} width={'50px'} height={'50px'} />

      <S.CountBar width={percent} color={moodIcon.color}>
        <S.CountText>{percent} %</S.CountText>
      </S.CountBar>
    </S.MoodCount>
  );
};

export default React.memo(MoodCount);
