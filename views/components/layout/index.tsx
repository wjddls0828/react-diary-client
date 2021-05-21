import React from 'react';
import Header from 'views/components/header';
import * as S from './styles';

const Layout: React.FC = ({ children }) => (
  <S.Layout>
    <Header />
    <S.Content>{children}</S.Content>
  </S.Layout>
);

export default Layout;
