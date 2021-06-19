import { useUser } from 'common/context/user/user';
import router from 'next/router';
import React from 'react';
import ThemeButton from 'views/components/theme-button';
import * as S from './styles';

const Sidebar: React.FC = () => {
  const user = useUser();
  const handleOnClick = (href: string) => {
    router.push(href);
  };

  const logout = () => {
    window.location.href = process.env.API_BASE_URL + '/auth/logout';
  };

  return (
    <S.Sidebar>
      <S.UserProfile>
        {user && user.name} 님<S.LogoutButton onClick={logout}>로그아웃</S.LogoutButton>
      </S.UserProfile>
      <ThemeButton text={'글쓰기'} onClick={() => handleOnClick('/post')} isBrownTheme={true} />
    </S.Sidebar>
  );
};

export default Sidebar;
