import { THEME_COLOR } from 'common/constant';
import styled from 'styled-components';

interface PCardProps {
  backgroundColor?: string;
}

interface MoodIconProps {
  isSelected?: boolean;
}

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;

  width: 200px;
  height: 700px;

  padding: 15px;
  margin-right: 15px;
  margin-bottom: 15px;

  background-color: white;
  color: ${THEME_COLOR.BROWN};
`;

export const UserProfile = styled.div`
  width: 100%;
  height: 30px;

  margin-bottom: 10px;
  font-weight: bolder;
  font-size: 15px;

  display: flex;
  align-items: center;
  color: ${THEME_COLOR.BROWN};
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

export const MetaContainer = styled.div`
  margin-top: 120px;
`;

export const PCard = styled.div<PCardProps>`
  background: ${(props) => props.backgroundColor ?? '#7d5a5a'};
  padding: 10px;
  margin-bottom: 30px;
  margin-top: 10px;
`;

export const MoodIcon = styled.button<MoodIconProps>`
  border: none;
  background: none;
  width: 40px;
  opacity: ${(props) => (props.isSelected ? '1' : '0.7')};

  :hover,
  :active,
  :focus {
    opacity: 1;
  }
`;

export const MoodSearchBox = styled.div`
  width: 100%;
  border: 2px solid #d7d2d2;
  border-radius: 2px;
  margin-top: 10px;
  padding: 3px;
  padding-left: 12px;
`;

export const MoodUpContent = styled.div`
  color: #c1b7b7;
  padding: 3px;
  margin-left: auto;
  font-size: 13px;
  padding-left: 13px;
  justify-content: center;
  font-weight: bolder;
`;
