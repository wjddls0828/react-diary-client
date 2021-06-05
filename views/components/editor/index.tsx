import React from 'react';
import Editor from '@draft-js-plugins/editor';
import { useEditor } from './hooks';
import * as S from './styles';

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
          editorKey={'myeditor'}
          editorState={editorState}
          onChange={setEditorState}
          handleKeyCommand={handleKeyCommand}
        />
      </S.EditorContainer>
    </>
  );
}

export default DraftEditor;
