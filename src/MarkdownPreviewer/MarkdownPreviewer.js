import React, { useState } from 'react';
import { marked } from 'marked';
import "./MarkdownPreviewer.css";

const MarkdownPreviewer = () => {
    const [editorText, setEditorText] = useState(`# This is an H1 header
## This is an H2 Subheader
You can also make text **bold**... **VERY NICE**!
Or _italic_.
Or... wait for it... **_both!_**
You can strike something out ~~STRIKEOUT~~.
Here is some \`inline code\`.
\`\`\`
function sayHello() {
    console.log("Hello, world!");
}
\`\`\`
Here is a [link](https://www.freecodecamp.org) 
> This is a blockquote!
- This is a list
    - open circle
        - filled in square
1. Order list
2. ~~Strike TWO~~


![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)


`);

marked.setOptions({
    breaks: true
});     

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
      <div id="preview" dangerouslySetInnerHTML={{ __html: marked(editorText) }}>
        

      </div> 

    </div>
    
  );
};

export default MarkdownPreviewer;
