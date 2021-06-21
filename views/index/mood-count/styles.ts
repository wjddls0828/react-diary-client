import styled from 'styled-components';

export const MoodCount = styled.div`
  display: flex;
  align-items: center;
  height: 55px;
`;

export const CountBar = styled.div<{ width; color }>`
  height: 18px;
  border-radius: 10px;
  background-color: ${(props) => props.color};
  opacity: 70%;
  width: ${(props) => (props.width ? props.width : 1)}%;

  overflow: hidden;
  font-weight: 800;
  line-height: 20px;

  transition: width 1s;
`;

export const CountText = styled.div`
  margin-left: 10px;
  font-size: 10px;
  color: #453e3e;
`;
