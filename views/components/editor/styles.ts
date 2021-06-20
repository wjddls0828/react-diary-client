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

export const ButtonText = styled.p`
  font-size: 14px;
  color: white;
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
  width: 100%;
  margin-bottom: 8px;
  font-size: 17px;
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
  border: 1px solid #d3d3d3;
  border-top: 0px;

  background-color: white;

  min-height: 500px;
  padding: 20px 30px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 8px 10px;

  cursor: 'text';
  line-height: '200%';
`;
