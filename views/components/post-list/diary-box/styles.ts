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
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  :hover {
    background-color: #c1b7b7;
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
`;
