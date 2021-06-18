import { DraftBlockType, RichUtils } from 'draft-js';
import React, { useState } from 'react';
import ToolButton from './button';
import { BLOCK_STYLES, INLINE_STYLES } from '../constants';
import * as S from './styles';
import { GiArchiveResearch } from 'react-icons/gi';
import BookSearchBar from 'views/components/editor/book-search-bar';
import { useEditorCustomBlock } from '../hooks';

function EditorToolbar({ editorState, setEditorState }) {
  const { insertCustomBlock } = useEditorCustomBlock(editorState, setEditorState);

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

  const [isBookSearchBarOpen, setIsBookSearchBarOpen] = useState(false);
  const toggleBookSearch = () => {
    setIsBookSearchBarOpen(!isBookSearchBarOpen);
  };
  //TODO : hook 분리

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

      <S.Separator />

      <S.BookSearchButton active={isBookSearchBarOpen} onClick={toggleBookSearch}>
        <label>글감 검색</label>
        <GiArchiveResearch />
      </S.BookSearchButton>

      <BookSearchBar show={isBookSearchBarOpen} insertOnEditor={insertCustomBlock} />
    </S.Toolbar>
  );
}

export default EditorToolbar;
