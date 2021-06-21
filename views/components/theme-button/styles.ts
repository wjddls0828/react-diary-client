import { THEME_COLOR } from 'common/constant';
import styled, { css } from 'styled-components';
import { ThemeButtonStyleProps } from './types';

export const ThemeButton = styled.button<ThemeButtonStyleProps>`
  width: ${(props) => (props.width ? props.width : '100%')};
  height: ${(props) => (props.height ? props.height : '30px')};
  margin-bottom: 5px;

  border-radius: 2px;
  min-height: 30px;

  ${(props) =>
    props.isBrownTheme
      ? css`
          border: none;
          background-color: #7b6d6c;
          color: white;
          :hover {
            background-color: ${THEME_COLOR.LIGHT_BROWN};
          }
        `
      : css`
          border: 1px solid #7b6d6c;
          background-color: white;
          color: #7b6d6c;
          :hover {
            background-color: ${THEME_COLOR.BROWN};
            opacity: 0.6;
            color: ${THEME_COLOR.BEIGE};
          }
        `}
`;
