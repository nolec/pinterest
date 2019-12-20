import express from "express";
import { check, validationResult } from "express-validator";
import auth from "../middlewares/auth";
import Profile from "../models/Profile";

const profileRoute = express.Router();

profileRoute.get("/", async (req, res) => {
  try {
    const profiles = await Profile.find().populate("user");
    res.status(200).json(profiles);
  } catch (error) {
    console.error(error.message);
    res.status(500).json("Server Error--PROFILES");
  }
});
profileRoute.get("/me", auth, async (req, res) => {
  try {
    const myProfile = await Profile.findOne({ user: req.user }).populate(
      "user",
      ["name", "avatar"]
    );
    if (!myProfile) {
      return res.status(400).json({ msg: "프로필이 없습니다." });
    }
    res.status(200).json(myProfile);
  } catch (error) {
    console.error(error.message);
    res.status(500).json("Server Error--MYPROFILE");
  }
});
profileRoute.get("/:user_id", async (req, res) => {
  try {
    const userProfile = await Profile.findOne({
      user: req.params.user_id
    }).populate("user", ["name", "avatar"]);
    if (!userProfile) {
      return res.status(400).json({ msg: "프로필이 없습니다." });
    }
    res.status(200).json(userProfile);
  } catch (error) {
    console.error(error.message);
    res.status(500).json("Server Error--USER'S PROFILE");
  }
});
profileRoute.post(
  "/cu",
  [
    auth,
    [
      check("status", "상태가 필요합니다.")
        .not()
        .isEmpty(),
      check("skills", "스킬이 필요합니다.")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    console.log(errors.array());
    if (!errors.isEmpty()) {
      res.status(400).json({ Errors: errors.array() });
    }
    const {
      company,
      website,
      location,
      bio,
      status,
      skills,
      githubusername,
      youtube
    } = req.body;

    const profileFields = {};
    profileFields.user = req.user;
    if (company) profileFields.company = company;
    if (website) profileFields.website = website;
    if (location) profileFields.location = location;
    if (bio) profileFields.bio = bio;
    if (status) profileFields.status = status;
    if (githubusername) profileFields.githubusername = githubusername;
    if (skills) {
      profileFields.skills = skills.split(",").map(skill => skill.trim());
    }

    profileFields.social = {};
    if (youtube) profileFields.social.youtube = youtube;

    try {
      let profile = await Profile.findById(req.user);
      if (profile) {
        profile = await Profile.findByIdAndUpdate(
          { user: req.user },
          { $set: profileFields },
          { new: true }
        );
        return res.status(200).json(profile);
      }
      profile = await new Profile(profileFields);
      await profile.save();
      res.status(200).json(profile);
    } catch (error) {
      console.error(error.message);
      res.status(500).json("Server Error--PROFILE_CU");
    }
  }
);
profileRoute.delete("/delete", auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user });
    if (!profile) {
      return res.status(200).json({ msg: "제거할 프로필이 없습니다." });
    }
    profile.remove();
    return res.status(200).json({ msg: "프로필이 제거되었습니다." });
  } catch (error) {
    console.error(error.message);
    res.status(500).json("Server Error--PROFILE_DELETE");
  }
});

export default profileRoute;
