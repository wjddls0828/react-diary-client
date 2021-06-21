import FullCalendar, { EventClickArg } from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import koLocale from '@fullcalendar/core/locales/ko';
import * as S from './styles';
import React from 'react';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { useMonthlyPosts } from 'views/index/hooks';
import MoodCount from 'views/index/mood-count';

function MyFullCalendar() {
  const { moodCounts, setMonthlyPosts } = useMonthlyPosts();

  const router = useRouter();
  const handleEventClick = (arg: EventClickArg) => {
    router.push(`/post/${arg.event.id}`);
  };

  const monthlyTotal = useMemo(
    () =>
      moodCounts.reduce((acc, mood) => {
        return acc + mood.count;
      }, 0),
    [moodCounts]
  );

  return (
    <S.MoodCalendarContainer>
      <FullCalendar
        plugins={[dayGridPlugin]}
        navLinks={false}
        eventClick={handleEventClick}
        locale={koLocale}
        displayEventTime={false}
        timeZone={'UTC'}
        dayMaxEventRows={6}
        moreLinkText={''}
        events={setMonthlyPosts}
      />
      <S.MonthlyMoodCountContainer>
        {moodCounts &&
          moodCounts.map((moodCount) => {
            return <MoodCount key={moodCount.moodId} moodCount={moodCount} total={monthlyTotal} />;
          })}
      </S.MonthlyMoodCountContainer>
    </S.MoodCalendarContainer>
  );
}

export default React.memo(MyFullCalendar);
