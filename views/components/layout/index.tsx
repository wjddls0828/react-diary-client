import React from 'react';
import * as S from './styles';

const Layout: React.FC = ({ children }) => (
  <div>
    <S.Header>
      <S.HomeButton href='/'> Home</S.HomeButton>
    </S.Header>
    <S.Content>{children}</S.Content>
  </div>
);

export default Layout;
