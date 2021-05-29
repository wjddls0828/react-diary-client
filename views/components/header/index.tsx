import { useUser } from 'common/context/user/user';
import Link from 'next/link';
import React from 'react';
import * as S from './styles';

const Header: React.FC = () => {
  const user = useUser();

  return (
    <S.Header>
      <Link href='/'>
        <S.BlogTitle>
          {user.blogTitle} <S.StyleLine />
        </S.BlogTitle>
      </Link>
    </S.Header>
  );
};

export default Header;
