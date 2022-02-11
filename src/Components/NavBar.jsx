import React from 'react';
import img from './pictures/logo.jpg'

export default function NavBar() {
  return <nav className=" Nav">
  <div className="container-fluid">
      <img src={img} alt="" width="50" height="54" className=""/>
      <h1>metagenci</h1>
      <div className="profile">
        <div className="greySpace">   
        </div>
        <div className="texts">
            <h2>Itadori yuuji</h2>
            <p>yuujikun@mail.com</p>
            </div>
      </div>
  </div>
</nav>
;
}
