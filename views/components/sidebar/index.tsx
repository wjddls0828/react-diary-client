import { useUser } from 'common/context/user/user';
import router from 'next/router';
import React from 'react';
import ThemeButton from 'views/components/theme-button';
import * as S from './styles';
import quotes from 'share/utils/quotes';
import { Card } from 'antd';
import SearchBar from 'views/index/SearchBar';
import getRecentMoodId from './utils/getRecentMoodId';
import { useState } from 'react';

import 'antd/lib/card/style/index.css';
import Image from 'next/image';
import { MOOD_ICONS } from 'common/constant';

const Sidebar: React.FC = () => {
  const [currentMoodId, setCurrentMoodId] = useState(1);
  const [quote, setQuote] = useState('');
  const user = useUser();
  const handleOnClick = (href: string) => {
    router.push(href);
  };

  React.useEffect(() => {
    const setTodayQuote = async () => {
      const recentMoodId = await getRecentMoodId();
      setCurrentMoodId(recentMoodId);
      const date = new Date();
      const currentQuotes = quotes.find((quoteList) => quoteList.moodId === recentMoodId).quotes;
      const todayQuote = currentQuotes[date.getDay() % currentQuotes.length];
      setQuote(todayQuote);
    };

    setTodayQuote();
  }, []);

  const quoteCardBackgroundColor = React.useMemo(() => {
    switch (currentMoodId) {
      case 1:
        return '#ef9a9a';
      case 2:
        return '#a5d6a7';
      case 3:
        return '#ce93d8';
      default:
        return undefined;
    }
  }, [currentMoodId]);

  const logout = () => {
    window.location.href = process.env.API_BASE_URL + '/auth/logout';
  };

  return (
    <S.Sidebar>
      <S.UserProfile>
        {user && user.name} 님<S.LogoutButton onClick={logout}>로그아웃</S.LogoutButton>
      </S.UserProfile>
      <ThemeButton text={'글쓰기'} onClick={() => handleOnClick('/post')} isBrownTheme={true} />
      <ThemeButton
        text={'책갈피 보기'}
        onClick={() => handleOnClick('/bookmark')}
        isBrownTheme={false}
      />
      <S.PCard backgroundColor={quoteCardBackgroundColor}>
        <Card title='오늘의 편지'>{quote}</Card>
      </S.PCard>
      <SearchBar />
      <div>
        <p>기분별 일기 조회하기</p>
        <S.MoodIcon>
          <Image
            onClick={() => router.push('/mood?moodId=1')}
            src={'/' + MOOD_ICONS[0].src}
            width='48px'
            height='48px'
          />
        </S.MoodIcon>
        <S.MoodIcon>
          <Image
            onClick={() => router.push('/mood?moodId=2')}
            src={'/' + MOOD_ICONS[1].src}
            width='48px'
            height='48px'
          />
        </S.MoodIcon>
        <S.MoodIcon>
          <Image
            onClick={() => router.push('/mood?moodId=3')}
            src={'/' + MOOD_ICONS[2].src}
            width='48px'
            height='48px'
          />
        </S.MoodIcon>
      </div>
    </S.Sidebar>
  );
};

export default Sidebar;
