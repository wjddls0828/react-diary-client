import Link from 'next/link';
import React from 'react';
import * as S from './styles';

const Sidebar: React.FC = () => {
  return (
    <S.Sidebar>
      <S.UserProfile>수영 님</S.UserProfile>
      <Link href='/post'>
        <S.PostButton>글쓰기</S.PostButton>
      </Link>
      <Link href='/bookmark'>
        <S.BookmarkButton>책갈피 보기</S.BookmarkButton>
      </Link>
    </S.Sidebar>
  );
};

export default Sidebar;
