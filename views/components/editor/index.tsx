import React from 'react';
import Editor from '@draft-js-plugins/editor';
import EditorToolbar from 'views/components/editor/editor-toolbar';
import { useEditor } from './hooks';
import * as S from './styles';
import { EDITOR_KEY } from './constants';
import ThemeButton from '../theme-button';

function DraftEditor() {
  /* prettier-ignore */
  const {
    editorContainer,
    editorState,
    setEditorState,
    handleKeyCommand,
    submitPost
  } = useEditor();

  return (
    <>
      <EditorToolbar editorState={editorState} setEditorState={setEditorState} />

      <S.EditorContainer>
        <Editor
          ref={editorContainer}
          editorKey={EDITOR_KEY}
          editorState={editorState}
          onChange={setEditorState}
          handleKeyCommand={handleKeyCommand}
        />
      </S.EditorContainer>

      <S.ButtonContainer>
        <ThemeButton
          isBrownTheme={true}
          text={'저장'}
          width={'150px'}
          height={'50px'}
          onClick={submitPost}
        />
      </S.ButtonContainer>
    </>
  );
}

export default React.memo(DraftEditor);
