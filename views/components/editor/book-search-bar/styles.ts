import { THEME_COLOR } from 'common/constant';
import styled, { css } from 'styled-components';

export const BookSeachBar = styled.div<{ show: boolean }>`
  z-index: 10;
  width: 100%;

  display: flex;
  flex-direction: column;
  position: fixed;
  transition: all 0.3s linear;
  top: 100%;
  left: 0;

  text-align: left;
  background-color: white;

  box-shadow: 0 -3px 6px rgba(0, 0, 0, 0.16), 0 -2px 4px rgba(0, 0, 0, 0.12);
  overflow-x: scroll;

  ${(props) =>
    props.show &&
    css`
      top: 65%;
      height: 40%;
    `};
`;

export const SearchContainer = styled.button`
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding-left: 15px;

  width: 100%;
  display: flex;
  align-items: center;
  background-color: white;
  margin-right: 5px;

  font-size: 20px;
`;

export const SearchButton = styled.div`
  cursor: pointer;
  padding: 5px;
  margin-right: 5px;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 30px;
  border: 0px;

  :focus {
    outline: none;
  }
`;

export const EmptyBookSearchList = styled.div`
  width: 100%;
  padding: 10px 10px;
  color: gray;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
  top: 50px;

  svg {
    margin-bottom: 5px;
    font-size: 30px;
  }
`;

export const BookSearchList = styled.div`
  width: 100%;
  padding: 15px 30px;

  display: flex;
  justify-content: center;
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
`;

export const BookShelf = styled.div`
  background-color: ${THEME_COLOR.BROWN};
  width: 101%;
  height: 10px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
`;

export const PaginationContainer = styled.div`
  width: 100%auto;
  margin-left: 20px;
`;
