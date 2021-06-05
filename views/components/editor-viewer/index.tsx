import React from 'react';
import { EditorState, convertFromRaw, ContentState } from 'draft-js';
import 'draft-js/dist/Draft.css';
import Editor from '@draft-js-plugins/editor';

interface DraftViewerProps {
  rawPostContent: string;
  style?: DraftViewerStyleProps;
}

interface DraftViewerStyleProps {
  height?: string;
  width?: string;
  overflow?: string;
  /* you can add */
}

const DraftViewer: React.FC<DraftViewerProps> = ({ rawPostContent, style }) => {
  const postContentState: ContentState = convertFromRaw(JSON.parse(rawPostContent));
  const postEditorState: EditorState = EditorState.createWithContent(postContentState);

  return (
    <div style={{ ...style }}>
      <Editor readOnly={true} editorState={postEditorState} onChange={() => {}} />
    </div>
  );
};

export default React.memo(DraftViewer);
