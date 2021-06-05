import { DraftBlockType, RichUtils } from 'draft-js';
import React from 'react';
import ToolButton from './button';
import { BLOCK_STYLES, INLINE_STYLES } from '../constants';
import * as S from './styles';

function EditorToolbar({ editorState, setEditorState }) {
  const currentStyle = editorState.getCurrentInlineStyle();
  const selection = editorState.getSelection();
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();

  const toggleInlineStyle = (inlineStyle: string) => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, inlineStyle));
  };

  const toggleBlockType = (blockType: DraftBlockType) => {
    setEditorState(RichUtils.toggleBlockType(editorState, blockType));
  };

  return (
    <S.Toolbar>
      {INLINE_STYLES.map((type) => {
        const { iconType, style } = type;
        return (
          <ToolButton
            key={style}
            active={currentStyle.has(style)}
            Icon={iconType}
            onToggle={toggleInlineStyle}
            style={style}
          />
        );
      })}

      <S.Separator />

      {BLOCK_STYLES.map((type) => {
        const { iconType, style } = type;
        return (
          <ToolButton
            key={style}
            active={style === blockType}
            Icon={iconType}
            onToggle={toggleBlockType}
            style={style}
          />
        );
      })}
    </S.Toolbar>
  );
}

export default EditorToolbar;
