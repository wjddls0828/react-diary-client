import { useUser } from 'common/context/user/user';
import router, { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import ThemeButton from 'views/components/theme-button';
import * as S from './styles';
import quotes from 'common/utils/quotes';
import { Card } from 'antd';
import SearchBar from 'views/index/SearchBar';
import getRecentMoodId from './utils/getRecentMoodId';
import { useState } from 'react';
import { BsPencil } from 'react-icons/bs';
import 'antd/lib/card/style/index.css';
import Image from 'next/image';
import { MOOD_ICONS } from 'common/constant';

const Sidebar: React.FC = () => {
  const {
    query: { moodId },
  } = useRouter();
  const [currentMoodId, setCurrentMoodId] = useState(1);
  const [quote, setQuote] = useState('');
  const user = useUser();
  const handleOnClick = (href: string) => {
    router.push(href);
  };

  useEffect(() => {
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
        return '#F7DBD7';
      case 2:
        return '#FAEACB';
      case 3:
        return '#9CC0E7';
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
      <ThemeButton height={'35px'} onClick={() => handleOnClick('/post')} isBrownTheme={true}>
        <S.ButtonText>
          <BsPencil /> {'글쓰기'}
        </S.ButtonText>
      </ThemeButton>
      <S.MetaContainer>
        <SearchBar />
        <S.MoodSearchBox>
          <S.MoodUpContent>기분별 일기 조회</S.MoodUpContent>
          {[1, 2, 3].map((mood) => (
            <S.MoodIcon key={mood} isSelected={parseInt(moodId as string) === mood}>
              <Image
                onClick={() => router.push(`/mood?moodId=${mood}`)}
                src={'/' + MOOD_ICONS[mood - 1].src}
                width='41px'
                height='41px'
              />
            </S.MoodIcon>
          ))}
        </S.MoodSearchBox>
        <S.PCard backgroundColor={quoteCardBackgroundColor}>
          <Card title='오늘의 편지'>{quote}</Card>
        </S.PCard>
      </S.MetaContainer>
    </S.Sidebar>
  );
};

export default Sidebar;
