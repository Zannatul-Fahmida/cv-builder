import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const modules = {
  toolbar: [
    ["bold", "italic", "underline"],
    ["blockquote"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
    ["link"],
  ],
};

const ProfileEditor = () => {
  const [value, setValue] = useState("");
  return (
    <div>
      <ReactQuill
        style={{ height: "275px", padding: "0 0 40px 0" }}
        theme="snow"
        onChange={setValue}
        placeholder={
          "Introduce yourself by pitching your skill & explaining how they can be of value to a company"
        }
        modules={modules}
      />
    </div>
  );
};

export default ProfileEditor;
