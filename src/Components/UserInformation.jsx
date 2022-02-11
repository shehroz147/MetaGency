import React from "react";
import AcademyBox from "./AcademyBox";
import StatusBox from "./StatusBox";

export default function UserInformation(props) {
  return (
    <div>
      <div className="row">
        <div className="col userinfocontainer">
          <h3>User Information</h3>
          <p>Created Time: {props.user.createdate}</p>
          <p>Connected Wallet : {props.user.connectedwallet}</p>
          <h3>Program</h3>
          <AcademyBox />
        </div>
        <div className="col password">
          <StatusBox />
        </div>
      </div>
      <div className="formcontainer">
        <div className="editform">
          <div className="form">
            <h4>First Name*</h4>
            <input type="text" placeholder="First Name" className="input" />
            <input type="text" placeholder="Last Name" className="input" />
            <h4>Email*</h4>
            <input type="text" placeholder="Email" className="input2" />
            <h4>MOBILE PHONE*</h4>
            <input type="text" placeholder="Country" className="input" />
            <input type="text" placeholder="XXXX-XXXXXX" className="input" />
            <button className="btn savechangebtn2">Save Change</button>
          </div>
        </div>
      </div>
    </div>
  );
}
