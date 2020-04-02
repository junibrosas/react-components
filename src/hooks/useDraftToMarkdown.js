import React from 'react';
import { draftToMarkdown } from 'markdown-draft-js';
import { IsJsonString } from './editor-helper';

/**
 * This is a component which checks if the `source` value
 * is a valid JSON string then parse the string to JSON object and convert from raw
 * object to draftjs ContentState and return a markdown content.
 */

function useDraftToMarkdown(source) {
  const [content, setContent] = React.useState(source);

  React.useEffect(() => {
    if (IsJsonString(source)) {
      const markdown = draftToMarkdown(JSON.parse(source));
      setContent(markdown);
    } else {
      setContent(source);
    }
  }, [source]);

  return content;
}

export default useDraftToMarkdown;
