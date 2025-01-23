import React, { useState } from 'react';
import  { marked } from 'marked';

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

    // Configure marked.js to handle breaks
    marked.setOptions({
        breaks: true
    });

    const renderMarkdown = (text) => {
        return { __html: marked(text) };
    };

    return (
        <div style={styles.container}>
            <textarea
                id="editor"
                value={editorText}
                onChange={(e) => setEditorText(e.target.value)}
                style={styles.textArea}
            />
            <div
                id="preview"
                dangerouslySetInnerHTML={renderMarkdown(editorText)}
                style={styles.previewBox}
            />
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row', // Place editor and preview side by side
        gap: '10px', // Add spacing between the two
        height: '100vh', // Full viewport height
    },
    textArea: {
        flex: 1,
        resize: 'both', // Allow resizing
        minHeight: '200px', // Minimum height
        minWidth: '200px', // Minimum width
        padding: '10px',
        fontSize: '16px',
        border: '1px solid #ccc',
        borderRadius: '5px',
    },
    previewBox: {
        flex: 1,
        resize: 'both', // Allow resizing
        overflow: 'auto', // Add scroll if content overflows
        minHeight: '200px',
        minWidth: '200px',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        backgroundColor: '#f9f9f9', // Subtle background for preview
    },
};

export default MarkdownPreviewer;
