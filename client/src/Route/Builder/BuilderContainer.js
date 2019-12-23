import React, { useState } from "react";
import BuilderPresenter from "./BuilderPresenter";
import { useSelector, useDispatch } from "react-redux";
import { uploadFiles, createPost } from "../../actions/post";

const BuilderContainer = history => {
  console.log(history);
  const [formData, setFormData] = useState({
    user: "",
    name: "",
    title: "",
    description: "",
    filePath: "",
    duration: "",
    thumbnail: ""
  });

  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);
  const files = useSelector(state => state.post.files);
  const thumb = useSelector(state => state.post.thumbnails);

  const handleSubmit = event => {
    event.preventDefault();
    console.log(formData);
    if (files !== null || thumb !== null) {
      setFormData({
        user: user._id,
        name: user.name,
        filePath: files.filePath,
        duration: thumb.fileDuration,
        thumbnail: thumb.thumbsFilePath
      });
      dispatch(createPost(formData, history));
    }
  };
  const handleChange = event => {
    setFormData({
      ...formData,
      [event.currentTarget.name]: event.currentTarget.value
    });
  };

  const onDrop = files => {
    dispatch(uploadFiles(files));
  };
  return (
    <BuilderPresenter
      thumb={thumb}
      onDrop={onDrop}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
    ></BuilderPresenter>
  );
};

export default BuilderContainer;
