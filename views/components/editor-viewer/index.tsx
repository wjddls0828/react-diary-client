import React from 'react';
import { EditorState, convertFromRaw, ContentState } from 'draft-js';
import 'draft-js/dist/Draft.css';
import Editor from '@draft-js-plugins/editor';

interface DraftViewerProps {
  rawPostContent: string;
}

const DraftViewer: React.FC<DraftViewerProps> = ({ rawPostContent }) => {
  const postContentState: ContentState = convertFromRaw(JSON.parse(rawPostContent));
  const postEditorState: EditorState = EditorState.createWithContent(postContentState);

  return <Editor readOnly={true} editorState={postEditorState} onChange={() => {}} />;
};

export default React.memo(DraftViewer);
