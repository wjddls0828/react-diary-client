import React from 'react';
import * as S from './styles';
import { PaginationButtonProps } from './types';

export const PaginationButton: React.FC<PaginationButtonProps> = ({ number, focus, onClick }) => {
  return (
    <S.PaginationButton focus={focus} onClick={onClick}>
      <a>{number}</a>
    </S.PaginationButton>
  );
};
