import jwt from "jsonwebtoken";

const generateToken = (res, hospitalID) => {
  const token = jwt.sign({ hospitalID }, process.env.jwt_key, {
    expiresIn: "30d",
  });

  res.cookie("hospital", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict",
    maxAge: 30 * 24 * 60 * 60 * 1000,
  });
};

export default generateToken;
