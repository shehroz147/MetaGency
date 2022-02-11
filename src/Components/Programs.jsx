import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Programs(props) {
  const programs = [
    {
        
      name: "Money academy",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiore veniam, repellendus voluptas vel quisquam ut iure illo dignissimos mollitia rem, eum aspernatur.",
    },
    {
      name: "LifeStyle Acedemy",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiore veniam, repellendus voluptas vel quisquam ut iure illo dignissimos mollitia rem, eum aspernatur.",
    },
    {
      name: "Business academy",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiore veniam, repellendus voluptas vel quisquam ut iure illo dignissimos mollitia rem, eum aspernatur.",
    },
    {
      name: "Coach academy",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiore veniam, repellendus voluptas vel quisquam ut iure illo dignissimos mollitia rem, eum aspernatur.",
    },
    {
      name: "Investment",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiore veniam, repellendus voluptas vel quisquam ut iure illo dignissimos mollitia rem, eum aspernatur.",
    },
    {
      name: "Real Estate",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiore veniam, repellendus voluptas vel quisquam ut iure illo dignissimos mollitia rem, eum aspernatur.",
    },
  ];
  // Api Calling 
  useEffect(async ()=>{
      //   console.log("UseEffect run!!!");
      //   const data = axios.get("http://localhost:5000/api/users/getprograms", {
      //   }).then(res =>{  
      //       console.log("Data is : ", res);
      // }) 
    },[])
  return (
    <div className="container">
    <h2 className="pclub">Program Club</h2>
      <div className="row">
        <div className="col-md-3 programbox">
          <div className="blackbox">
            <h2>{programs[0].name}</h2>
          </div>
          <h3>{programs[0].name}</h3>
          <p>{programs[0].desc}</p>
          <Link to = "/seeprogram">
          <button className="seebtn" onClick={()=>props.seeprogram(programs,0)}>
            <i className="bi bi-lock-fill"></i>See the program
          </button></Link>
        </div>
        <div className="col-md-3 programbox2">
          <div className="blackbox">
            <h2>{programs[1].name}</h2>
          </div>
          <h3>{programs[1].name}</h3>
          <p>{programs[1].desc}</p>
          <Link to  ="/seeprogram"><button className="seebtn" onClick={()=>props.seeprogram(programs,1)}>
            <i className="bi bi-lock-fill"></i>See the program
          </button>
          </Link>
        </div>
        <div className="col-md-3 programbox3">
          <div className="blackbox">
            <h2>{programs[2].name}</h2>
          </div>
          <h3>{programs[2].name}</h3>
          <p>{programs[2].desc}</p>
          <Link to = "/seeprogram"><button className="seebtn" onClick={()=>props.seeprogram(programs,2)}>
            <i className="bi bi-lock-fill"></i>See the program
          </button></Link>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3 programbox4">
          <div className="blackbox">
            <h2>{programs[3].name}</h2>
          </div>
          <h3>{programs[3].name}</h3>
          <p>{programs[3].desc}</p>
         <Link to = "/seeprogram"> <button className="seebtn" onClick={()=>props.seeprogram(programs,3)}>
            <i className="bi bi-lock-fill"></i>See the program
          </button></Link>
        </div>
        <div className="col-md-3 programbox5">
          <div className="blackbox">
            <h2>{programs[4].name}</h2>
          </div>
          <h3>{programs[4].name}</h3>
          <p>{programs[4].desc}</p>
         <Link to = "/seeprogram"> <button className="seebtn" onClick={()=>props.seeprogram(programs,4)}>
            <i className="bi bi-lock-fill"></i>See the program
          </button></Link>
        </div>
        <div className="col-md-3 programbox6">
          <div className="blackbox">
            <h2>{programs[5].name}</h2>
          </div>
          <h3>{programs[5].name}</h3>
          <p>{programs[5].desc}</p>
          <Link to = "/seeprogram"><button className="seebtn" onClick={()=>props.seeprogram(programs,5)}>
            <i className="bi bi-lock-fill"></i>See the program
          </button></Link>
        </div>
      </div>
    </div>
  );
}
