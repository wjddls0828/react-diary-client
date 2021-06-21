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

  width: 130px;
  height: 160px;

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

export const BookShelf = styled.div`
  background-color: ${THEME_COLOR.BROWN};
  width: 105%;
  height: 10px;

  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
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
  font-size: 13px;

  font-weight: 700;
  color: gray;
  margin: 2px 0;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const BookCardMeta = styled.div`
  padding: 0 5px;
  font-size: 11px;
  color: gray;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
