import express from "express";
import { getProjects, getProjectsByID, getProjectsByQuery, createProject, changeProject, updateProject, deleteProject } from "../../controllers/projectscontroller.js";

const router = express.Router();

//GET (url - data in url)
router.get("/projects", getProjects);

//GET BY PARAMS (url - data in url)
router.get("/projectsID/:id", getProjectsByID);

//GET BY QUERY SEARCH (GET form - makes query data)
router.get("/getProjectsByQuery", getProjectsByQuery);

//POST CREATE NEW BY REQ.BODY (POST manual JSON form - makes req.body data)
router.post("/createProject", createProject)

//PUT RESOURCE CHANGE BY REQ.BODY (POST manual JSON form - makes req.body data)
router.put("/changeProject", changeProject);

//PATCH PARTIAL CHANGE BY REQ.BODY (POST manual JSON form - make req.body data)
router.patch("/updateProject", updateProject);

//DELETE BY REQ.BODY (POST manual JSON form - makes req.body data)
router.delete("/deleteProject", deleteProject);

export default router;
