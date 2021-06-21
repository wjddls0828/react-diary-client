import styled from 'styled-components';

export const BookCard = styled.div`
  background-color: white;
  width: 250px;
  height: 120px;
  padding-right: 10px;

  display: flex;
  align-items: center;
  cursor: pointer;

  border: 1px solid transparent;
  text-align: center;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  margin-bottom: 8px;
  user-select: none;
`;

export const BookCardImage = styled.img`
  width: 90px;
  min-height: 120px;
  object-fit: cover;
`;

export const BookCardInfo = styled.div`
  width: 100%;
  padding: 6px 13px;
`;

export const BookCardTitle = styled.div`
  width: 140px;
  font-size: 13px;

  font-weight: 700;
  color: gray;
  margin: 2px 0;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const BookCardMeta = styled.div`
  width: 130px;
  padding: 0 5px;
  font-size: 11px;
  color: gray;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
