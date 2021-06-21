import { THEME_COLOR } from 'common/constant';
import styled, { css } from 'styled-components';
import { PaginationButtonStyleProps } from './types';

export const PaginationBar = styled.div<{ columnStyle }>`
  ${(props) =>
    !props.columnStyle &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 10px;
      padding-bottom: 5px;
    `};
`;

export const ButtonContainer = styled.div<{ columnStyle }>`
  ${(props) =>
    !props.columnStyle &&
    css`
      display: flex;
      margin: 0 10px;
    `};
`;

export const ArrowBlock = styled.button`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: ${THEME_COLOR.BROWN};
  border: none;
  color: white;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Arrow = styled.div<{ columnStyle }>`
  border: solid white;
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

  ${(props) =>
    props.columnStyle &&
    css`
      &.right {
        transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
        margin-left: 2px;
        margin-bottom: 2px;
      }

      &.left {
        transform: rotate(-135deg);
        -webkit-transform: rotate(-135deg);
        margin-right: 2px;
      }
    `};
`;

export const PaginationButton = styled.li<PaginationButtonStyleProps>`
  border-radius: 50%;
  font-size: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 25px;
  margin: 3px 0;

  color: ${(props) => (props.focus ? THEME_COLOR.PINK : THEME_COLOR.BROWN)};
`;
