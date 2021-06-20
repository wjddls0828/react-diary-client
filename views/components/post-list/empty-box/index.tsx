import React from 'react';
import ThemeButton from 'views/components/theme-button';
import { BsPencil } from 'react-icons/bs';
import * as S from './styles';
import router from 'next/router';

const EmptyBox: React.FC = () => {
  const routeToWritePost = () => {
    router.push('/post');
  };

  return (
    <S.EmptyBox>
      <S.EmptyBoxTitle>아직 작성된 글이 없습니다.</S.EmptyBoxTitle>
      <S.EmptyBoxText>하루의 기분과 함께 소중한 일상을 기록해 보세요!</S.EmptyBoxText>
      <ThemeButton isBrownTheme={false} width={'100px'} text={''} onClick={routeToWritePost}>
        <BsPencil /> {'글쓰기'}
      </ThemeButton>
    </S.EmptyBox>
  );
};

export default React.memo(EmptyBox);
