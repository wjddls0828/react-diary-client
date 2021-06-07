import { THEME_COLOR } from 'common/constant';
import styled from 'styled-components';

export const Mainpage = styled.div`
  width: 100%;
  max-height: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MonthlyMoodCountContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  padding: 30px;

  background-color: white;
  margin-bottom: 30px;
`;

export const MoodCountContainerTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;

  color: ${THEME_COLOR.BROWN};
`;

export const Search_box = styled.div`
  margin: 30px;
`;
