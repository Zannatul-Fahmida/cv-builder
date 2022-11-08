import React from "react";
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "./EditorToolbar";
import "react-quill/dist/quill.snow.css";
import './Editor.css';

const Editor = () => {
  const [state, setState] = React.useState({ value: null });
  const handleChange = (value) => {
    setState({ value });
  };
  return (
    <div>
      <ReactQuill
        style={{ height: "375px" }}
        theme="snow"
        value={state.value}
        onChange={handleChange}
        placeholder={
          "Introduce yourself by pitching your skill & explaining how they can be of value to a company"
        }
        modules={modules}
        formats={formats}
      />
      <EditorToolbar />
    </div>
  );
};

export default Editor;
