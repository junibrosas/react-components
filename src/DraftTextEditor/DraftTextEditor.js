import React from 'react';
import PropTypes from 'prop-types';
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import { markdownToDraft } from 'markdown-draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { IsJsonString } from '../utils/stringUtil';

/**
 * The `DraftTextEditor` is a convenience wrapper of Draft JS + React Draft WYSIWYG.
 * This component assumes initial value be (1) a string of ContentState object or (2) a markdown.
 *
 * - [DraftJS](https://draftjs.org/)
 * - [React Draft WYSIWYG](https://jpuri.github.io/react-draft-wysiwyg/#/)
 */

function DraftTextEditor(props) {
  const { value = '', placeholder, onChange } = props;
  const [editorState, setEditorState] = React.useState(
    EditorState.createEmpty()
  );

  React.useEffect(() => {
    const stringifiedContent = JSON.stringify(
      convertToRaw(editorState.getCurrentContent())
    );
    if (value !== stringifiedContent) {
      if (IsJsonString(value)) {
        const state = convertFromRaw(JSON.parse(value));
        setEditorState(EditorState.createWithContent(state));
      } else {
        const state = convertFromRaw(markdownToDraft(value));
        setEditorState(EditorState.createWithContent(state));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const onEditorStateChange = state => {
    const stringifiedContent = JSON.stringify(
      convertToRaw(state.getCurrentContent())
    );
    if (onChange) onChange(stringifiedContent);
    setEditorState(state);
  };

  return (
    <Editor
      editorState={editorState}
      placeholder={placeholder}
      toolbar={{
        options: [
          'blockType',
          'fontSize',
          'inline',
          'emoji',
          'image',
          'link',
          'list',
          'history'
        ],
        inline: { inDropdown: false },
        list: { inDropdown: false },
        link: { inDropdown: true },
        history: { inDropdown: false },
        image: {
          alt: { present: true, mandatory: true }
        }
      }}
      onEditorStateChange={onEditorStateChange}
    />
  );
}

DraftTextEditor.propTypes = {
  error: PropTypes.bool,
  value: PropTypes.string,
  placeholder: PropTypes.any,
  onChange: PropTypes.func
};

export default DraftTextEditor;
