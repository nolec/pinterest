import express from "express";
import Video from "../models/Video";
import auth from "../middlewares/auth";
import { check, validationResult } from "express-validator";
import upload from "../middlewares/upload";

const videoRoute = express.Router();
videoRoute.get("/", async (req, res) => {
  try {
    const videos = await Video.find().populate("user");
    if (!videos) {
      return res.status(200).json({ msg: "비디오를 찾을 수 없습니다." });
    }
    res.status(200).json(videos);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error--GET_VIDEOS");
  }
});
videoRoute.post(
  "/upload",
  [
    auth,
    [
      check("title", "제목이 필요합니다.")
        .not()
        .isEmpty()
    ],
    upload
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ Errors: errors.array() });
    }
    const { fileUrl, title, description } = req.body;
    try {
      const newVideo = await new Video({
        title,
        writer: user.name,
        fileUrl,
        description,
        user: req.user
      });

      const video = await newVideo.save();
      res.status(200).json(video);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error - VIDEO_UPLOAD");
    }
  }
);
videoRoute.delete("/delete", auth, async (req, res) => {
  try {
    const video = await Video.findOne({ user: req.user });
    if (!video) {
      return res.status(400).json({ msg: "제거할 비디오가 없습니다." });
    }
    video.remove();
    return res.status(200).json({ msg: "비디오가 제거되었습니다." });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error--VIDEO_DELETE");
  }
});

export default videoRoute;
