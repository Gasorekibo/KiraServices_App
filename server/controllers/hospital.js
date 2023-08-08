import Hospital from "../models/Hospital.js";
import generateToken from "../utils/generateToken.js";

const registerHospital = async (req, res) => {
  const { email, phone, name, status, location, password } = req.body;
  console.log(req.body);
  try {
    const hospital = await Hospital.create({
      name,
      email,
      phone,
      status,
      location,
      password,
    });

    if (hospital) {
      generateToken(res, hospital._id);
      res.status(201).json({
        _id: hospital._id,
        name: hospital.name,
        email: hospital.email,
      });
    } else {
      res.status(400).json({ message: "registration failed, Try again" });
    }
  } catch (err) {
    res
      .status(400)
      .json({ message: "registration failed😥 Try again", Error: err.message });
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
  const { name } = req.name;
  const hospital = await Hospital.findOne({ name });
  if (!hospital) return res.status(404).json({ Error: "no result found" });

  res.status(200).json(hospital);
};

const updateHospitalProfile = async (req, res) => {
  res.status(200).json({ message: "profile updated" });
};

export {
  registerHospital,
  updateHospitalProfile,
  getHospitalProfile,
  loginToHospital,
};
