import styled from 'styled-components';

export const BookSearchCard = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  color: gray;

  cursor: pointer;
  margin-bottom: 10px;

  :hover {
    border: 1px solid black;
  }
`;

export const BookCardInfo = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const BookCardTitle = styled.div`
  width: 65%;
  font-weight: 700;
  color: black;
  margin-bottom: 10px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const BookCardMeta = styled.div`
  width: 65%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
