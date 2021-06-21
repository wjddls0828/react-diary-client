import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  /* display: table; */
  margin-left: auto;
  margin-right: auto;

  width: 1200px;
  height: 100%;
  max-width: 1500px;
  min-width: 1000px;

  padding: 0 100px;
  padding-top: 10px;
  background-color: #eeeeee;

  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;
