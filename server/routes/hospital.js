import express from "express";
import {
  getHospitalProfile,
  loginToHospital,
  registerHospital,
  updateHospitalProfile,
} from "../controllers/hospital.js";

const router = express.Router();

router.post("/", registerHospital);
router.post("/auth", loginToHospital);
router.route("/profile").get(getHospitalProfile).patch(updateHospitalProfile);

export default router;
