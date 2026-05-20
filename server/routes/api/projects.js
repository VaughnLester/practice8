import express from "express";
import db from "../../database.js";
import { getProjects, getProjectsByID } from "../../controllers/projectscontroller.js";

const router = express.Router();

//READ
router.get("/projects", getProjects);

//READ BY ID

//CREATE 

//UPDATE BY ID

//DELETE BY ID

export default router;
