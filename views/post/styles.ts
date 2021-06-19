import styled from 'styled-components';

export const PostContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const PostContent = styled.div`
  width: 100%;
  padding: 15px;
  margin-top: 15px;
  background-color: white;
  color: black;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
`;

interface EmojiDateContainerProps {
  backgroundColor?: string;
}

export const EmojiDateContainer = styled.div<EmojiDateContainerProps>`
  background-color: ${(props) => props.backgroundColor ?? '#c1b7b7'};
  padding: 5px;
  width: 150px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 15px;
  flex-direction: row;
  justify-content: space-between;
`;

export const EditDeleteButtonContainer = styled.div`
  width: 300px;
  display: flex;
  flex-direction: row;
`;

export const PageContentContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const OtherPosts = styled.div`
  width: 100%;
  margin-bottom: 10px;

  color: #7b6d6c;
  font-weight: bolder;
  font-size: 15px;
`;

export const ListContainer = styled.div`
  width: 100%;
  margin-top: 10px;
  padding: 15px;
  background-color: white;
  color: black;
`;
