import React from "react";
import Programs from "./Programs";
import { Link } from "react-router-dom";

export default function Dashboard(props) {
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
  const Notification = [
    // {
    //   sender: "Metagenci admin",
    //   msg: "hey,how are you, don't forget to server cache",
    //   date: "25 min ago",
    // },
    // {
    //   sender: "Naveed admin",
    //   msg: "hey,how are you, don't forget to server cache ",
    //   date: "25 min ago",
    // },
    // {
    //   sender: "Metagenci admin",
    //   msg: "hey,how are you, don't forget to server cache",
    //   date: "25 min ago",
    // },
    // {
    //   sender: "Metagenci admin",
    //   msg: "hey,how are you, don't forget to server cache",
    //   date: "25 min ago",
    // },
    // {
    //   sender: "Metagenci admin",
    //   msg: "hey,how are you, don't forget to server cache",
    //   date: "25 min ago",
    // },
    // {
    //   sender: "Metagenci admin",
    //   msg: "hey,how are you, don't forget to server cache",
    //   date: "25 min ago",
    // },
  ];
  return (
    <div className="container dashboard">
      <div className="row">
        <div className="col-md-4">
          <div className="hello">
            <h2>Hello Robin</h2>
            <p>We are happy to have you on the Club Klein</p>
          </div>
          <div className="cont">
            <h1>Robin Zaccaria</h1>
            <div className="greycontainer"></div>
            <Link to ="/editprofile"><button className="editbtn"> Edit Profile</button>
            </Link>
            <p>Logout</p>
          </div>
        </div>
        <div className="col-md-8 notification">
          <div className="notifytext">
            <h1>Notification Of the Club Klein Group</h1>
            {Notification.length !== 0 && <p>see all notification</p>}
          </div>
          <div className="msgs">
            {Notification.length !== 0 &&
              Notification.map((noti) => (
                <div className="print">
                  <div className="greySpace"></div>
                  <h2>{noti.sender}</h2>
                  <h3>{noti.msg}</h3>
                  <p>{noti.date}</p>
                  
                <hr />
                </div>
              ))}
            {Notification.length === 0 && (
              <div className="noMsgs">
                <i className="bi bi-lock-fill lockicon"></i>
                <p>
                  You can not see the Notification because you do not have a
                  membership .To buy a membership you can click on 'Buy a
                  Membership'
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="container">
        <div className="programhead">
          <h2>Program Club Klein</h2>
          <p>see all programs</p>
        </div>
        <div className="programcontainers container">
          <div className="row">
            <div className="col-md-3 box">
              <div className="blackbox">
                <h2>MONEY ACADEMY</h2>
              </div>
              <h3>Money Academy</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                veniam, repellendus voluptas vel quisquam ut iure illo
                dignissimos mollitia rem, eum aspernatur.
              </p>
              <Link to ="/seeprogram"><button className="seebtn" onClick={()=>props.seeprogram(programs,0)}><i className="bi bi-lock-fill"></i>See the program</button>
              </Link>
              </div>
            <div className="col-md-3 box2">
              <div className="blackbox">
                <h2>LIFESTYLE ACADEMY</h2>
              </div>
              <h3>Lifestyle academy</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                veniam, repellendus voluptas vel quisquam ut iure illo
                dignissimos mollitia rem, eum aspernatur.
              </p>
              <Link to = "/seeprogram">
              <button className="seebtn" onClick={()=>props.seeprogram(programs,1)}><i className="bi bi-lock-fill"></i>See the program</button>
              </Link>
              </div>
            <div className="col-md-3 box3">
              <div className="blackbox">
                <h2>BUSINESS ACADEMY</h2>
              </div>
              <h3>Business academy</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                veniam, repellendus voluptas vel quisquam ut iure illo
                dignissimos mollitia rem, eum aspernatur.
              </p>
              <Link to ="/seeprogram">
              <button className="seebtn" onClick={()=>props.seeprogram(programs,2)}><i className="bi bi-lock-fill"></i>See the program</button>
              </Link>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
