import { THEME_COLOR } from 'common/constant';
import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const BlogTitle = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;

  width: 100%;
  height: 200px;

  font-size: 30px;
  font-weight: 800;
  color: ${THEME_COLOR.BROWN};
`;

export const StyleLine = styled.div`
  background-color: #c1b7b7;

  margin-top: 30px;
  width: 300px;
  height: 5px;
`;
