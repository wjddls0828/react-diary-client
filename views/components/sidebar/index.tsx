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

  return (
    <S.Sidebar>
      <S.UserProfile>{user.name} 님</S.UserProfile>
      <ThemeButton text={'글쓰기'} onClick={() => handleOnClick('/post')} isBrownTheme={true} />
      <ThemeButton
        text={'책갈피 보기'}
        onClick={() => handleOnClick('/bookmark')}
        isBrownTheme={false}
      />
    </S.Sidebar>
  );
};

export default Sidebar;
