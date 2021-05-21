import styled from 'styled-components';

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;

  width: 300px;
  padding: 15px;
  margin-right: 15px;
  margin-bottom: 15px;

  background-color: white;
  color: black;
`;

export const UserProfile = styled.div`
  width: 100px;
  margin-bottom: 10px;

  color: #7b6d6c;
  font-weight: bolder;
  font-size: 15px;
`;

export const PostButton = styled.button`
  width: 100%;
  height: 30px;
  margin-bottom: 10px;

  border: none;
  border-radius: 2px;
  color: white;
  background-color: #7b6d6c;
`;

export const BookmarkButton = styled.button`
  width: 100%;

  height: 30px;

  border: none;
  border-radius: 2px;

  background-color: white;
  border: 1px solid #7b6d6c;
  color: #7b6d6c;
`;
