import React from 'react';
import * as S from './styles';
import { ThemeButtonProps } from './types';

const ThemeButton: React.FC<ThemeButtonProps> = ({
  isBrownTheme,
  text,
  width,
  height,
  onClick,
  children,
}) => {
  return (
    <S.ThemeButton onClick={onClick} width={width} height={height} isBrownTheme={isBrownTheme}>
      {text}
      {children}
    </S.ThemeButton>
  );
};

export default React.memo(ThemeButton);
