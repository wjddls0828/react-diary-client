import { useCallback, useRef, useState } from 'react';
import {
  EditorState,
  convertFromRaw,
  RichUtils,
  DraftEditorCommand,
  DraftHandleValue,
} from 'draft-js';
import 'draft-js/dist/Draft.css';

const emptyContentState = convertFromRaw({
  entityMap: {},
  blocks: [
    {
      text: '',
      key: 'myeditor',
      type: '',
      entityRanges: [],
      depth: null,
      inlineStyleRanges: [],
    },
  ],
});

export const useEditor = () => {
  const editorContainer = useRef(null);
  const initialState = EditorState.createWithContent(emptyContentState);
  const [editorState, setEditorState] = useState(initialState);

  const handleKeyCommand = useCallback((command: DraftEditorCommand): DraftHandleValue => {
    const newState: EditorState = RichUtils.handleKeyCommand(editorState, command);

    if (newState) {
      setEditorState(newState);
      return 'handled';
    }

    return 'not-handled';
  }, []);

  return {
    editorContainer,
    editorState,
    setEditorState,
    handleKeyCommand,
  };
};
