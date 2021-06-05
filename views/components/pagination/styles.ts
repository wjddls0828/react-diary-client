import styled from 'styled-components';
import { PaginationButtonStyleProps } from './types';

export const PaginationBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  padding-bottom: 5px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin: 0 10px;
`;

export const ArrowBlock = styled.button`
  width: 30px;
  height: 30px;

  border-radius: 50%;

  background-color: inherit;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Arrow = styled.div`
  border: solid black;
  border-width: 0 1px 1px 0;
  display: inline-block;
  padding: 2px;

  &.right {
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    margin-right: 2px;
  }

  &.left {
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
    margin-left: 2px;
  }
`;

export const PaginationButton = styled.li<PaginationButtonStyleProps>`
  border-radius: 50%;
  font-size: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 30px;

  color: ${(props) => (props.focus ? '#de6287;' : 'black')};
`;
