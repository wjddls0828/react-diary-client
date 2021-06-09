import React from 'react';
import Editor from '@draft-js-plugins/editor';
import EditorToolbar from 'views/components/editor/editor-toolbar';
import { useEditor, useEditorCustomBlock, useEditorOnSubmit } from './hooks';
import * as S from './styles';
import { EDITOR_KEY } from './constants';
import ThemeButton from '../theme-button';
import { ContentState } from 'draft-js';

interface DraftEditorProps {
  postState?: {
    id: number;
    contentState: ContentState;
  };
}

function DraftEditor({ postState }: DraftEditorProps) {
  /* prettier-ignore */
  const {
    editorContainer,
    editorState,
    setEditorState,
    handleKeyCommand,
  } = useEditor(postState && postState.contentState);

  const { renderCustomBlock } = useEditorCustomBlock(editorState, setEditorState);
  const { createPost, editPost } = useEditorOnSubmit(editorState);

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
          blockRendererFn={renderCustomBlock}
        />
      </S.EditorContainer>

      <S.ButtonContainer>
        <ThemeButton
          isBrownTheme={true}
          text={'저장'}
          width={'150px'}
          height={'50px'}
          onClick={postState ? () => editPost(postState.id) : createPost}
        />
      </S.ButtonContainer>
    </>
  );
}

export default React.memo(DraftEditor);
