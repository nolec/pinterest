import React, { useState } from "react";
import BuilderPresenter from "./BuilderPresenter";
import axios from "axios";

const BuilderContainer = () => {
  const [title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [FilePath, setFilePath] = useState("");
  const [Duration, setDuration] = useState("");
  const [Thumbnail, setThumbnail] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
  };
  const handleChangeTitle = event => {
    setTitle(event.currentTarget.value);
  };

  const handleChangeDecsription = event => {
    console.log(event.currentTarget.value);

    setDescription(event.currentTarget.value);
  };
  const onDrop = async files => {
    let formData = new FormData();
    const config = {
      header: { "content-type": "multipart/form-data" }
    };
    console.log(files);
    formData.append("file", files[0]);
    const res = await axios.post("/api/post/uploadfiles", formData, config);
    console.log(res);
    if (res.data.success) {
    } else {
      alert("Failed to save the video in server");
    }
  };
  return (
    <BuilderPresenter
      onDrop={onDrop}
      handleSubmit={handleSubmit}
      handleChangeTitle={handleChangeTitle}
      handleChangeDecsription={handleChangeDecsription}
    ></BuilderPresenter>
  );
};

export default BuilderContainer;
