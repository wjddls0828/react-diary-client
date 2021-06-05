import React from 'react';
import { IconType } from 'react-icons';
import * as S from './styles';

interface ToolButtonProps {
  Icon: IconType;
  onToggle: (style) => void;
  style: string;
  active?: boolean;
}

const ToolButton: React.FC<ToolButtonProps> = ({ Icon, onToggle, style, active }) => {
  const handleToggle = (e) => {
    e.preventDefault();
    onToggle(style);
  };

  return (
    <S.ToolButton onMouseDown={handleToggle} active={active}>
      <Icon />
    </S.ToolButton>
  );
};

export default React.memo(ToolButton);
