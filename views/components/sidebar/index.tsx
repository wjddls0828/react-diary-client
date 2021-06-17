import { useUser } from 'common/context/user/user';
import router from 'next/router';
import React from 'react';
import ThemeButton from 'views/components/theme-button';
import * as S from './styles';
import { quotes_mood3 } from 'share/utils/quotes_mood3';
import { Card } from 'antd';

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
      <S.PCard>
        <Card title='오늘의 힘이 되는 말'>
          {quotes_mood3[Math.floor(Math.random() * quotes_mood3.length)]}
        </Card>
      </S.PCard>
    </S.Sidebar>
  );
};

export default Sidebar;
