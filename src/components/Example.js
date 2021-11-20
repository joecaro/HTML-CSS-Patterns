import React, { useState } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import { Controlled as CodeMirror } from "react-codemirror2";

const htmlStyle = `
html {
  overflow: hidden;
  font-family: sans-serif;
}
`;

export default function Example({ example, colors }) {
  const [selectedTab, setSelectedTab] = useState("css");
  const [css, setCss] = useState(example.cssDynamic);
  const [html, setHtml] = useState(example.html);

  const srcDoc = `
	<html>
		<body>${html}</body>
		<style>${htmlStyle + example.cssStatic + css + colors}</style>
	</html>
  `;

  const handleCssChange = (editor, data, value) => {
    setCss(value);
  };
  const handleHtmlChange = (editor, data, value) => {
    setHtml(value);
  };
  return (
    <section>
      <div class='section-container'>
        <div className='title-container'>
          <h2 className='title'>{example.title}</h2>
          <div className='support'>details</div>
        </div>
        <div className='ex-container'>
          <div className='example'>
            <iframe
              srcDoc={srcDoc}
              title='example'
              width='100%'
              height='100%'
              frameBorder='0'></iframe>
          </div>
          <div className='code-container'>
            <div className='tab-container'>
              <button
                style={{
                  backgroundColor: `${
                    selectedTab === "html" ? "#263238" : "#aaa"
                  }`,
                  cursor: `${selectedTab !== "html" ? "pointer" : ""}`,
                }}
                onClick={() => setSelectedTab("html")}>
                html
              </button>
              <button
                style={{
                  backgroundColor: `${
                    selectedTab === "css" ? "#263238" : "#aaa"
                  }`,
                  cursor: `${selectedTab !== "css" ? "pointer" : ""}`,
                }}
                onClick={() => setSelectedTab("css")}>
                css
              </button>
            </div>
            {selectedTab === "html" && (
              <CodeMirror
                value={html}
                onBeforeChange={handleHtmlChange}
                className='code'
                options={{
                  lineWrapping: true,
                  lint: true,
                  mode: "css",
                  lineNumbers: true,
                  theme: "material",
                }}
              />
            )}
            {selectedTab === "css" && (
              <CodeMirror
                value={css}
                onBeforeChange={handleCssChange}
                className='code'
                options={{
                  lineWrapping: true,
                  lint: true,
                  mode: "css",
                  lineNumbers: true,
                  theme: "material",
                }}
              />
            )}
            <div className='code-bottom'>Edit CSS to see changes</div>
          </div>
        </div>
      </div>
    </section>
  );
}
