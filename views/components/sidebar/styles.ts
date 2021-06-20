import { THEME_COLOR } from 'common/constant';
import styled from 'styled-components';

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;

  width: 200px;
  height: 1000px;

  padding: 15px;
  margin-right: 15px;
  margin-bottom: 15px;

  background-color: white;
  color: black;
`;

export const UserProfile = styled.div`
  width: 100%;
  height: 30px;

  margin-bottom: 10px;

  color: #000000;
  font-weight: bolder;
  font-size: 15px;

  display: flex;
  align-items: center;
`;

export const LogoutButton = styled.button`
  border: 1px solid #c1b7b7;
  background-color: transparent;
  width: 50px;
  float: right;
  height: 20px;
  font-size: 10px;
  margin-left: auto;
  :hover {
    background-color: #c1b7b7;
  }

  color: ${THEME_COLOR.BROWN};
`;

interface PCardProps {
  backgroundColor?: string;
}

export const PCard = styled.div<PCardProps>`
  background: ${(props) => props.backgroundColor ?? '#7d5a5a'};
  padding: 10px;
`;
