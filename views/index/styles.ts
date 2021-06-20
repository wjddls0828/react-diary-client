import { THEME_COLOR } from 'common/constant';
import styled from 'styled-components';

export const Mainpage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-bottom: 30px;
`;

export const DiaryListContainer = styled.div`
  width: 100%;
  height: 100% auto;
  background-color: white;
  padding: 30px;

  display: flex;
  flex-direction: column;
`;

export const DiaryBoxContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;

  padding: 30px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SearchBox = styled.div`
  margin: 30px;
`;

export const Diaryinfo = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;

  color: ${THEME_COLOR.BROWN};
`;

export const Pgbox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`  
  
export const CalendarContainer = styled.div`
  width: 100%;
  height: 100% auto;

  background-color: white;
  padding: 30px 40px;
  margin-bottom: 30px;
`;

export const Diaryinfo = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
  color: ${THEME_COLOR.BROWN};
`;

export const Pgbox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
