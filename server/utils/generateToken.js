import jwt from "jsonwebtoken";

const generateToken = (res, hospitalID) => {
  const token = jwt.sign({ hospitalID }, process.env.jwt_key, {
    expiresIn: "30d",
  });

  return token;
};

export default generateToken;
