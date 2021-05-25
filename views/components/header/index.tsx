import Link from 'next/link';
import React from 'react';
import * as S from './styles';

const Header: React.FC = () => (
  <S.Header>
    <Link href='/'>
      <S.BlogTitle>
        최대10글자까지가능 <S.StyleLine />
      </S.BlogTitle>
    </Link>
  </S.Header>
);

export default Header;
