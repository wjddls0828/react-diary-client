import React from 'react';
import { EditorState, convertFromRaw, ContentState } from 'draft-js';
import 'draft-js/dist/Draft.css';
import Editor from '@draft-js-plugins/editor';
import { EDITOR_KEY } from '../editor/constants';
import { useEditorCustomBlock } from '../editor/hooks';

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
  const { renderCustomBlock } = useEditorCustomBlock();

  return (
    <div style={{ ...style }}>
      <Editor
        readOnly={true}
        editorKey={EDITOR_KEY}
        editorState={postEditorState}
        onChange={() => {}}
        blockRendererFn={renderCustomBlock}
      />
    </div>
  );
};

export default React.memo(DraftViewer);
