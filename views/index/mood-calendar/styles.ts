import styled from 'styled-components';
import { THEME_COLOR } from 'common/constant';

export const MoodCalendarContainer = styled.div`
  font-size: 12px;
  color: ${THEME_COLOR.BROWN};
`;

export const MonthlyMoodCountContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  background-color: white;
  margin-top: 30px;
`;

export const MoodCountContainerTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;

  color: ${THEME_COLOR.BROWN};
`;
