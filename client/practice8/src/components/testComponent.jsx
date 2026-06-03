import {useState} from "react";
import { useEffect } from "react";


function TestPage(){

    const deleteEvent = async (e)=>{
            e.preventDefault();
            const formData = new FormData(e.target);
            const data = {
                id: formData.get("id")
            }
            
            await fetch("/deleteProject",{
                method: "DELETE",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(data)
            })
            alert("project deleted");
    }

    const [projects, setProjects] = useState([]);
    async function grabData(){
        
        const res = await fetch("/projects");
        const data = await res.json();
        setProjects(data);
    }    
    
    useEffect(()=>{
        grabData()
    },[]);

    return(
        <>
            <h1>DELETE A PROJECT</h1>
            <form onSubmit={deleteEvent}>
                <input type="text" name="id" placeholder="ID"/>
                <button type="submit">Sumbit!</button>
            </form>
            <h1>From Database: {projects[0]?.title}</h1>
        </>
    )
}

export {TestPage};