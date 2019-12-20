import express from "express";
import User from "../models/User";
import { check, validationResult } from "express-validator";
import bcrypt from "bcryptjs";
import gravatar from "gravatar";
import jwt from "jsonwebtoken";
import auth from "../middlewares/auth";
import Profile from "../models/Profile";

const userRoute = express.Router();

userRoute.get("/auth", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user).select("-password");

    res.status(200).json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).json("Server Error--AUTH");
  }
});
userRoute.post(
  "/register",
  [
    check("name", "이름을 입력해주세요")
      .not()
      .isEmpty(),
    check("email", "이메일을 제대로 입력해주세요").isEmail(),
    check("password", "비밀번호 최소 5자 이상을 입력해주세요").isLength({
      min: 5
    })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    //유효값 검사
    if (errors.errors.length > 0) {
      return res.status(400).json({ msg: errors.array() });
    }
    try {
      const { name, email, password } = req.body;
      //이메일 중복 체크
      let user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({
          msg: "이미 등록된 계정입니다."
        });
      }
      //아바타 생성
      const avatar = gravatar.url(email, { s: "200", r: "pg", d: "mm" });

      //비밀번호 암호화
      user = await User({ name, email, password, avatar });

      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(password, salt);
      user.password = hash;

      const payload = {
        signId: user._id
      };
      await jwt.sign(payload, "secret", { expiresIn: 36000 }, (err, token) => {
        if (err) res.status(500).json({ msg: "Token 등록실패" });
        res.status(200).json({ user, token, msg: "Token 등록 성공" });
      });
      await user.save();
    } catch (error) {
      console.error(error.message);
      res.status(500).json("Server Error--REGISTER");
    }
  }
);

userRoute.post(
  "/login",
  [
    check("email", "이메일을 제대로 입력해주세요").isEmail(),
    check("password", "비밀번호를 입력해주세요")
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    //유효값 검사
    if (errors.errors.length > 0) {
      return res.status(400).json({ msg: errors.array() });
    }
    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      //이메일 확인
      if (!user) {
        res.status(400).json({ msg: "등록된 계정이 없습니다." });
      }
      //비밀번호 비교
      const isMatch = bcrypt.compare(user.password, password);
      if (!isMatch) {
        res.status(400).json({ msg: "비밀번호가 틀렸습니다." });
      }
      const payload = {
        signId: user._id
      };
      await jwt.sign(payload, "secret", { expiresIn: 36000 }, (err, token) => {
        if (err) res.status(500).json({ msg: "Token 등록실패" });

        res.status(200).json({ user, token, msg: "Token 등록 성공" });
      });
    } catch (error) {
      console.error(error.message);
      res.status(500).json("Server Error--LOGIN");
    }
  }
);
userRoute.delete("/delete", auth, async (req, res) => {
  try {
    await User.findOneAndRemove({ _id: req.user });
    await Profile.findOneAndRemove({ user: req.user });
    res.status(200).json({ msg: "회원을 탈퇴하였습니다." });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error--DELETE");
  }
});
export default userRoute;
