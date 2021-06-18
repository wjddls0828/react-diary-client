import React, { useState } from 'react';
import Editor from '@draft-js-plugins/editor';
import EditorToolbar from 'views/components/editor/editor-toolbar';
import { useEditor, useEditorCustomBlock, useEditorOnSubmit } from './hooks';
import * as S from './styles';
import { EDITOR_KEY } from './constants';
import ThemeButton from '../theme-button';
import { ContentState } from 'draft-js';
import { MOOD_ICONS } from 'common/constant';
import Image from 'next/image';

interface DraftEditorProps {
  postState?: {
    id: number;
    contentState: ContentState;
    moodId: number;
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

  const [moodId, setMoodId] = useState<number>(postState ? postState.moodId : 1);
  const { renderCustomBlock } = useEditorCustomBlock(editorState, setEditorState);
  const { createPost, editPost } = useEditorOnSubmit(editorState, moodId);

  const changeMoodId = (moodId: number) => {
    setMoodId(moodId);
  };

  return (
    <>
      <S.MoodInputContainer>
        <S.MoodInputLabel>오늘의 기분은 어땠나요?</S.MoodInputLabel>
        <S.MoodInput>
          {MOOD_ICONS.map((mood) => {
            const { id, src } = mood;

            return (
              <S.MoodIcon
                key={id}
                onClick={() => changeMoodId(id)}
                clicked={moodId ? moodId === id : id === 1}
              >
                <Image src={`/${src}`} width={'50px'} height={'50px'} />
              </S.MoodIcon>
            );
          })}
        </S.MoodInput>
      </S.MoodInputContainer>

      <EditorToolbar editorState={editorState} setEditorState={setEditorState} />

      <S.EditorContainer>
        <Editor
          ref={editorContainer}
          editorKey={EDITOR_KEY}
          editorState={editorState}
          onChange={setEditorState}
          handleKeyCommand={handleKeyCommand}
          blockRendererFn={renderCustomBlock}
          placeholder={'나만의 일상을 기록해보세요 :)'}
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
