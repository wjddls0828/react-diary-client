import styled, { css } from 'styled-components';

export const BookSeachBar = styled.div<{ show: boolean }>`
  z-index: 10;
  position: absolute;

  right: 0px;
  margin-top: 35px;
  width: 250px;
  height: 600px;

  border: 1px solid black;
  background-color: white;

  overflow-x: hidden;
  overflow-y: scroll;

  transition: all 0.3s linear;
  transform: translate(100%);

  ${(props) =>
    props.show &&
    css`
      transform: translate(0);
    `};
`;

export const SearchContainer = styled.button`
  border: none;
  border-bottom: 1px solid black;

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

export const BookSearchList = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px 10px;
`;

export const BookCard = styled.div`
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
  width: 60%;
  font-weight: 700;
  color: black;
  margin-bottom: 10px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
