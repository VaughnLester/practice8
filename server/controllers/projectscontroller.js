import db from "../database.js";

async function getProjects(req, res){
    try{
        const [data] = await db.query("SELECT * FROM projects")
        res.json(data);
    }
    catch(err){
        console.log(err);
    }
}

async function getProjectsByID(req,res){
    try{
        const [data] = await db.query(`SELECT * FROM projects where ID = "${req.params.id}"`);
        res.json(data);
    }
    catch(err){console.log(err)}
}

async function getProjectsByQuery(req,res){
    try{
        const [data] = await db.query(`SELECT * FROM projects where ID = "${req.query.id}"`);
        res.json(data);
    }
    catch(err){console.log(err)}
}

 function createProject(req,res){
    try{
        db.query(`INSERT INTO projects (title, link) VALUES ("${req.body.title}", "${req.body.link}")`);
        res.send("project created");
    }
    catch(err){console.log(err)}
}

async function changeProject(req,res){
    try{
        const [data] = await db.query(`UPDATE projects SET title = "${req.body.title}", link = "${req.body.link}" WHERE ID = "${req.body.id}"`);
        res.send("project susccessfully changed");
    }
    catch(err){console.log(err)}
}

async function updateProject(req,res){
    try{
        const [data] = await db.query(`UPDATE projects SET title = "${req.body.title}" WHERE ID = "${req.body.id}"`);
        res.send("project successfully updated");
    }
    catch(err){console.log(err)}
}

async function deleteProject(req,res){
    try{
        const [data] = await db.query(`DELETE FROM projects WHERE ID = "${req.body.id}"`);
        res.send("project successfully deleted");
    }
    catch(err){console.log(err)}
}

export {getProjects, getProjectsByID, getProjectsByQuery, createProject, changeProject, updateProject, deleteProject};
