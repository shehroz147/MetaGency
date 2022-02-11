import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function SideBar() {
  const [isAdmin, setadmin] = useState(true);

  return (
    <div className="SideBar">
    <Link to = "/signup"><div className="item00">
          <i className="bi bi-house-door-fill i"></i>
          <p className="p">Sign Up</p>
        </div>
        </Link>
        <Link to  = "/signin"><div className="item0">
        <i className="bi bi-house-door-fill i"></i>
        <p className="p">Sign In</p>
      </div></Link>
  
        <Link className="link" to="/">
        <div className="item">
          <i className="bi bi-house-door-fill i"></i>
          <p className="p">Dashboard</p>
        </div>
      </Link>
      <Link className="link" to="/programs">
        <div className="item1">
          <i className="bi bi-terminal-fill i"></i>
          <p className="p">Program</p>
        </div>
      </Link>
      <div className="item2">
        <i className="bi bi-cart3 i"></i>
        <p className="p">Buy A Membership</p>
      </div>
      <Link to="/notifications">
        <div className="item3">
          <i className="bi bi-bell-fill i"></i>
          <p className="p">Notification</p>
        </div>
      </Link>
      <div className="item4">
        <i className="bi bi-envelope-fill i"></i>
        <p className="p">Contact</p>
      </div>
      {isAdmin && (
        <div className="admin">
          <h1>ADMIN DASHBOARD</h1>
          <Link to = '/listuser'><div className="item5">
            <i className="bi bi-people-fill i"></i>
            <p className="p">List User</p>
          </div>
          </Link>
          <Link to = "/showprograms"><div className="item6">
            <i class="bi bi-terminal-fill i"></i>
            <p className="p">Program</p>
          </div></Link>
          <Link to = "/sendnotification"><div className="item7">
            <i className="bi bi-bell-fill i"></i>
            <p className="p">Notification</p>
          </div></Link>
          <Link to = "/nft"><div className="item8">
            <i className="bi bi-gem i"></i>
            <p className="p">NFT</p>
          </div></Link>
        </div>
      )}
      <div className="bottom">
        <h4>Club Klein</h4>
        <p>@ 2022 All Rights Reserved</p>
        <p>Made with Love</p>
      </div>
    </div>
  );
}
