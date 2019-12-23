import React, { useState } from "react";
import BuilderPresenter from "./BuilderPresenter";
import axios from "axios";
import { useSelector } from "react-redux";

const BuilderContainer = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [FilePath, setFilePath] = useState("");
  const [Duration, setDuration] = useState("");
  const [Thumbnail, setThumbnail] = useState("");

  const user = useSelector(state => state.auth.user);

  const handleSubmit = async event => {
    event.preventDefault();
    const variables = {
      user: user._id,
      name: user.name,
      title: title,
      description: description,
      filePath: FilePath,
      duration: Duration,
      thumbnail: Thumbnail
    };
    try {
      const res = await axios.post("/api/post", variables);
    } catch (error) {
      console.error(error.message);
    }
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

    try {
      const res = await axios.post("/api/post/uploadfiles", formData, config);
      if (res.data.success) {
        let variable = {
          filePath: res.data.filePath,
          fileName: res.data.fileName
        };
        setFilePath(res.data.filePath);

        const res2 = await axios.post("/api/post/thumbnail", variable);
        if (res2.data.success) {
          if (res2.data.fileDuration) {
            setDuration(res2.data.fileDuration);
          } else {
            setDuration(1);
          }
          setThumbnail(res2.data.thumbsFilePath);
        } else {
          alert("Failed to make the thumbnails");
        }
      } else {
        alert("Failed to save the video in server");
      }
    } catch (error) {
      console.log(error, "여기냐");
    }
  };
  return (
    <BuilderPresenter
      Thumbnail={Thumbnail}
      onDrop={onDrop}
      handleSubmit={handleSubmit}
      handleChangeTitle={handleChangeTitle}
      handleChangeDecsription={handleChangeDecsription}
    ></BuilderPresenter>
  );
};

export default BuilderContainer;
