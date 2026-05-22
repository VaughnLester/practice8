import express, { json } from "express";
import projectRouter from "./routes/api/projects.js"

const app = express();
//middleware for parsing JSON and FORM requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req,res)=>{
    res.send("app is live");
})

app.use(projectRouter);

app.listen(999, ()=>{
    console.log("listening on port 999");
})