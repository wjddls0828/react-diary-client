import { useCallback, useRef, useState } from 'react';
import {
  EditorState,
  convertFromRaw,
  RichUtils,
  DraftEditorCommand,
  DraftHandleValue,
} from 'draft-js';
import 'draft-js/dist/Draft.css';
import { useRouter } from 'next/router';
import { ContentState, convertToRaw } from 'draft-js';
import postAPI from 'common/api/postAPI';
import { Post } from 'share/interfaces/post';
import { EDITOR_KEY } from './constants';

const emptyContentState = convertFromRaw({
  entityMap: {},
  blocks: [
    {
      text: '',
      key: EDITOR_KEY,
      type: '',
      entityRanges: [],
      depth: null,
      inlineStyleRanges: [],
    },
  ],
});

export const useEditor = () => {
  const router = useRouter();
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

  const submitPost = async () => {
    const contentState: ContentState = editorState.getCurrentContent();
    const hasText: boolean = contentState.hasText();

    if (!hasText) {
      alert('내용을 입력해주새요');
      return;
    }

    const content: string = JSON.stringify(convertToRaw(contentState));
    const post: Post = await postAPI.createPost({ content: content, moodId: 1 });
    router.replace(`post/${post.id}`);
  };

  return {
    editorContainer,
    editorState,
    setEditorState,
    handleKeyCommand,
    submitPost,
  };
};
