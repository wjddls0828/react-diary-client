import React from 'react';
import * as S from './styles';
import { ThemeButtonProps } from './types';

const ThemeButton: React.FC<ThemeButtonProps> = ({
  isBrownTheme,
  text,
  width,
  height,
  onClick,
}) => {
  return (
    <S.ThemeButton onClick={onClick} width={width} height={height} isBrownTheme={isBrownTheme}>
      {text}
    </S.ThemeButton>
  );
};

export default ThemeButton;
