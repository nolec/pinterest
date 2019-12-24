import React, { useState, useEffect } from "react";
import BuilderPresenter from "./BuilderPresenter";
import { useSelector, useDispatch } from "react-redux";
import { uploadFiles, createPost } from "../../actions/post";

const BuilderContainer = ({ history }) => {
  console.log(history);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    filePath: "",
    duration: "",
    thumbnail: ""
  });
  const dispatch = useDispatch();
  const files = useSelector(state => state.post.files);
  const thumb = useSelector(state => state.post.thumbnails);
  const user = useSelector(state => state.auth);

  const handleSubmit = event => {
    event.preventDefault();

    console.log(formData, user);
    dispatch(createPost(formData, history));
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
  useEffect(() => {
    if (files !== null && thumb !== null) {
      setFormData({
        ...formData,
        filePath: files.filePath,
        duration: thumb.fileDuration,
        thumbnail: thumb.thumbsFilePath
      });
    }
  }, [user, files, thumb]);
  return (
    <BuilderPresenter
      user={user}
      thumb={thumb}
      onDrop={onDrop}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
    ></BuilderPresenter>
  );
};

export default BuilderContainer;
