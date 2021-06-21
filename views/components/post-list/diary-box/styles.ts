import { THEME_COLOR } from 'common/constant';
import styled from 'styled-components';

export const DiaryBox = styled.div`
  height: 30px;
  width: 100%;
  margin-bottom: 10px;
  cursor: pointer;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 3px 0px;
  font-size: 13px;
  color: #453e3e;

  :hover {
    background-color: ${THEME_COLOR.BEIGE};
  }
`;
export const iconAndContent = styled.div`
  margin: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const contentbox = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
`;

export const forleft = styled.div`
  float: left;
  height: 25px;
  margin-right: 5px;
`;

export const datebox = styled.div`
  margin-right: 10px;
  margin: 5px;
  height: 30px;
  display: flex;
  align-items: center;
`;
