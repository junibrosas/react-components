import React from 'react';
import PropTypes from 'prop-types';
import FormHelperText from '@material-ui/core/FormHelperText';

// TODO: Add loading spinner

const DraftTextEditor = React.lazy(() =>
  import(
    /* webpackChunkName: 'draft-texteditor' */ '../DraftTextEditor/DraftTextEditor'
  )
);

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

  return (
    <React.Suspense fallback={<></>}>
      <DraftTextEditor {...input} {...others} />
      {others.helperText && (
        <FormHelperText error={others.error}>
          {others.helperText}
        </FormHelperText>
      )}
    </React.Suspense>
  );
};

TextEditorField.propTypes = TextEditorShape;

export default TextEditorField;
