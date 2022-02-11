import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function EditProgram(props) {
  const [additional, setadditional] = useState(true);
  return (
    <div>
      <div className="createprogrambox">
        <h1>Name of the Course</h1>
        <input type="text" value={props.program.name}/>
        <h1>Description of the course</h1>
        <textarea name="" id="" cols="" rows="5" value={props.program.desc}></textarea>
        <button className="btn createprogrambtn2">Edit Course</button>
      </div>
      <button className="btn newmodulebtn">Create a new module +</button>
      <div className="modulecontainer">
          <h1>Name A Module </h1>
          <input type="text" />
          <div className="line3"></div>
          <div className="videolink">
            <h1>Video Link</h1>
            <input type="text" />
            <h1>Description</h1>
            <textarea name="" id="" cols="" rows="5"></textarea>
            <div className="line3"></div>
            {
              additional&&
              <p onClick={()=>setadditional(false)}>+ add a additional video</p>
            }
            {
              !additional&&
              <div className="videolink">
              <h1>Video Link</h1>
              <input type="text" />
              <h1>Description</h1>
              <textarea name="" id="" cols="" rows="5"></textarea>
              <div className="line3"></div>
              </div>      
            }
          </div>
          <button className="btn savebtn">Save</button>
      </div>
    </div>
  );
}
