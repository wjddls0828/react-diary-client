import { THEME_COLOR } from 'common/constant';
import styled from 'styled-components';

export const EditorHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const ButtonContainer = styled.div`
  display: flex;
  border: 1px solid black;
`;

export const MoodInputContainer = styled.div`
  margin-top: 10px;
  /* width: 200px; */

  display: flex;
  justify-content: center;

  flex-direction: column;

  font-size: 20px;
  color: ${THEME_COLOR.BROWN};
  font-weight: 800;
`;

export const MoodInputLabel = styled.div`
  width: 200px;
  margin-bottom: 5px;
`;

export const MoodInput = styled.div`
  width: 200px;
  margin-bottom: 5px;
  display: flex;
`;

export const MoodIcon = styled.div<{ clicked: boolean }>`
  width: 200px;
  margin-bottom: 5px;
  opacity: ${({ clicked }) => (clicked ? 1 : 0.5)};

  cursor: pointer;

  :focus,
  :hover {
    opacity: 1;
  }
`;

export const EditorContainer = styled.div`
  height: 100%;
  border: 1px solid gray;
  border-top: 0px;

  background-color: white;

  min-height: 400px;
  padding: 10px 10px;

  cursor: 'text';
`;
