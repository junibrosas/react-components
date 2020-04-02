import React from 'react';
import PropTypes from 'prop-types';
import FormHelperText from '@material-ui/core/FormHelperText';

const DraftTextEditor = React.lazy(() =>
  import(/* webpackChunkName: 'draft-texteditor' */ './DraftTextEditor')
);

// todo: add loading spinner

function TextEditor(props) {
  const { helperText, error } = props;
  return (
    <React.Suspense fallback={<></>}>
      <DraftTextEditor {...props} />
      {helperText && (
        <FormHelperText error={error}>{helperText}</FormHelperText>
      )}
    </React.Suspense>
  );
}

const TextEditorShape = {
  value: PropTypes.string,
  helperText: PropTypes.string,
  error: PropTypes.bool,
  onChange: PropTypes.func,
  classes: PropTypes.object
};

export const TextEditorField = props => {
  const {
    input,
    meta: { error, warning, submitFailed } = {},
    ...others
  } = props;

  const errorText = error || warning;

  if (submitFailed && errorText) {
    others.error = Boolean(errorText);
    others.helperText = errorText;
  }

  return <TextEditor {...input} {...others} />;
};

TextEditor.propTypes = TextEditorShape;

export default TextEditor;
