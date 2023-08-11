import Hospital from "../models/Hospital.js";
import generateToken from "../utils/generateToken.js";

const registerHospital = async (req, res) => {
  const { email, phone, name, status, location, password, services } = req.body;

  try {
    const hospitalExist = await Hospital.findOne({ email });

    if (hospitalExist) {
      res.status(400).json({ message: "Email already in use" });
    } else {
      const hospital = await Hospital.create({
        name,
        email,
        phone,
        status,
        location,
        password,
        services,
      });
      if (hospital) {
        generateToken(res, hospital._id);
        res.status(201).json({
          _id: hospital._id,
          name: hospital.name,
          email: hospital.email,
          phone: hospital.phone,
          status: hospital.status,
          location: hospital.location,
          services: hospital.services,
        });
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
    generateToken(res, hospital._id);
    res.status(200).json({
      _id: hospital._id,
      name: hospital.name,
      email: hospital.email,
    });
  } else {
    res.status(401).json({ message: "Invalid email or password" });
  }
};

const logoutHospital = (req, res) => {
  res.cookie("hospital", "", {
    expires: new Date(0),
  });
  res.status(200).json({ message: "loggedout" });
};

const getHospitalProfile = async (req, res) => {
  res.status(200).json({ message: "Profile" });
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
  logoutHospital,
  findHospital,
};
