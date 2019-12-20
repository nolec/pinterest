import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  const token = req.header("x-auth-token");
  if (!token) {
    return res.status(401).json({
      msg: "토큰이 없으므로 인증이 거부되었습니다."
    });
  }
  try {
    const decode = jwt.verify(token, "secret");
    req.user = decode.signId;
    console.log(decode, req.user);
    next();
  } catch (error) {
    res.status(401).json({ message: "유효한 토큰이 아닙니다." });
  }
};

export default authMiddleware;
