import { THEME_COLOR } from 'common/constant';
import styled from 'styled-components';

export const BookSearchCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 160px;
  margin-left: 20px;
  align-items: center;
`;

export const BookSearchCard = styled.div`
  background-color: ${THEME_COLOR.BEIGE};

  width: 115px;
  height: 155px;

  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  border: 1px solid transparent;
  text-align: center;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  :hover {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.4), 0 3px 6px rgba(0, 0, 0, 0.6);
  }
`;

export const BookCardImage = styled.img`
  width: 80px;
  min-height: 110px;
  object-fit: cover;
`;

export const BookCardInfo = styled.div`
  width: 100%;
  padding: 6px 13px;
`;

export const BookCardTitle = styled.div`
  font-size: 11px;
  font-weight: 800;
  color: gray;
  margin-top: 2px;
  margin-bottom: 3px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const BookCardMeta = styled.div`
  font-size: 10px;
  color: gray;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0 5px;
`;
