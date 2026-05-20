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

async function getProjectsByID(){

}

export {getProjects, getProjectsByID};
