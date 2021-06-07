import styled from 'styled-components';

export const BookCard = styled.div`
  border: 1px solid gray;

  width: 350px;
  height: 130px;

  display: flex;
  align-items: center;

  color: gray;

  cursor: pointer;
  margin-bottom: 10px;
  z-index: 10;

  :focus,
  :active {
    border: 1px solid #de6287;
  }
  user-select: none;
`;

export const BookCardInfo = styled.div`
  width: 100%;
  font-size: 14px;

  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const BookCardTitle = styled.div`
  width: 80%;
  font-weight: 700;
  color: black;
  margin-bottom: 10px;
  font-size: 16px;

  /* white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; */
`;
