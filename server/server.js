import express from "express";
import projectRouter from "./routes/api/projects.js"

const app = express();

app.get("/", (req,res)=>{
    res.send("app is live");
})

app.use(projectRouter);

app.listen(999, ()=>{
    console.log("listening on port 999");
})