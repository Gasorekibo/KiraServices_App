import Hospital from "../models/Hospital.js";
import cloudinary from "../utils/cloudinary.js";
import generateToken from "../utils/generateToken.js";
import jwt from "jsonwebtoken";

const registerHospital = async (req, res) => {
  const { email } = req.body;

  try {
    const hospitalExist = await Hospital.findOne({ email });

    if (hospitalExist) {
      res.status(400).json({ message: "Email already in use" });
    } else {
      const result = await cloudinary.uploader.upload(req.file.path);
      const hospital = await Hospital.create({
        image: result.secure_url,
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        status: req.body.status,
        location: req.body.location,
        password: req.body.password,
      });
      if (hospital) {
        generateToken(res, hospital._id);
        res.status(201).json({ message: "Hospital registered successfully!!" });
        console.log(hospital.image);
      } else {
        res.status(400).json({ message: "registration failed, Try again" });
      }
    }
  } catch (err) {
    res
      .status(400)
      .json({ message: "registration failed😥 Try again", Error: err.message });
    console.log(err);
  }
};

const loginToHospital = async (req, res) => {
  const { email, password } = req.body;
  const hospital = await Hospital.findOne({ email });
  if (hospital && (await hospital.passwordsMatches(password))) {
    const token = generateToken(res, hospital._id);
    res.status(200).json({
      _id: hospital._id,
      name: hospital.name,
      email: hospital.email,
      jwtToken: token,
    });
  } else {
    res.status(401).json({ message: "Invalid email or password" });
  }
};

const getHospitalProfile = async (req, res) => {
  console.log("FROM THE GET PROFILE");
  const { token } = req.params;
  const id = await jwt.verify(token, process.env.JWT_SECRET);

  try {
    const hospital = await Hospital.findById(id.hospitalID).populate(
      "services"
    );
    console.log(hospital);
    res.status(200).json({
      _id: hospital._id,
      name: hospital.name,
      status: hospital.status,
      email: hospital.email,
      services: hospital.services,
      location: hospital.location,
      image: hospital.image,
      phone: hospital.phone,
    });
  } catch (error) {
    console.error(error);
  }
};

const updateHospitalProfile = async (req, res) => {
  res.status(200).json({ message: "profile updated" });
};

const findHospital = async (req, res) => {
  console.log(req.body);

  try {
    const hospitals = await Hospital.find({});
    console.log(hospitals);

    res.status(200).json(hospitals);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export {
  registerHospital,
  updateHospitalProfile,
  getHospitalProfile,
  loginToHospital,
};
