import styled from 'styled-components';
import Link from 'next/link';

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const HomeButton = styled(Link)`
  cursor: pointer;
`;
