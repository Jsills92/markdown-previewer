import React, { useState } from 'react';
import { marked } from 'marked';
import "./MarkdownPreviewer.css";

const MarkdownPreviewer = () => {
  const [editorText, setEditorText] = useState('');

  const handleChange = (e) => {
    setEditorText(e.target.value);
  };

  return (
    <div>
      <textarea 
        id="editor" 
        value={editorText} 
        onChange={handleChange} 
        placeholder="Enter markdown here..." 
      />
      <div id="preview" dangerouslySetInnerHTML={{ __html: marked(editorText) }} />

    </div>
  );
};

export default MarkdownPreviewer;
