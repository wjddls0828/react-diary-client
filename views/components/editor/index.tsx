import React from 'react';
import Editor from '@draft-js-plugins/editor';
import { useEditor } from './hooks';
import * as S from './styles';
import { EDITOR_KEY } from './constants';

function DraftEditor() {
  /* prettier-ignore */
  const {
    editorContainer,
    editorState,
    setEditorState,
    handleKeyCommand,
  } = useEditor();

  return (
    <>
      <S.EditorContainer>
        <Editor
          ref={editorContainer}
          editorKey={EDITOR_KEY}
          editorState={editorState}
          onChange={setEditorState}
          handleKeyCommand={handleKeyCommand}
        />
      </S.EditorContainer>
    </>
  );
}

export default DraftEditor;
