import React from "react";
import { useState } from "react";
import coinbase from './pictures/CoinBase.png';
import metamask from './pictures/metamask.png';

export default function EditProfile(props) {
  const [toggle, toggleswtich] = useState(true);
  const [wallet, togglewallet] = useState(false);
  const toggletrue = () => {
    toggleswtich(true);
  };
  const togglefalse = () => {
    toggleswtich(false);
  };
  const toggleContainer = () => {
    togglewallet(!wallet);
    const element = document.getElementById("editprofile");
    element.classList.toggle("opacity");
  };

  return (
    <div id="editprofile" className="editprofile">
      <div className="edit">
        <h1>Edit Profile</h1>
        <p>Update Your Information</p>
        <div className="imggrey"></div>
        <button className="selectphoto">Select Photo</button>
      </div>
      <div className="editform">
        <h2 onClick={() => toggletrue()}>Profile</h2>
        <h3 onClick={() => togglefalse()}>Wallet</h3>
        {toggle && (
          <div className="form">
            <h4>First Name*</h4>
            <input type="text" placeholder="First Name" className="input" />
            <input type="text" placeholder="Last Name" className="input" />
            <h4>Email*</h4>
            <input type="text" placeholder="Email" className="input2" />
            <h4>MOBILE PHONE*</h4>
            <input type="text" placeholder="Country" className="input" />
            <input type="text" placeholder="XXXX-XXXXXX" className="input" />
          </div>
        )}
        {!toggle && (
          <button className="updatewallet" onClick={() => toggleContainer()}>
            Update Wallet
          </button>
        )}
        {wallet && (
          <div className="walletcontainer">
            <div className="upperwallet">
              <div className="walleticon">
                <i className="bi bi-wallet-fill"></i>
              </div>
                <h1>Select A Wallet</h1>
                <i className="bi bi-x close" onClick={()=>toggleContainer()}></i>
            </div>
            <p>Please select a wallet to continue</p>
            <div className="icons row">
                <div className="col-md-4 ii">
                <img src={metamask} alt="matamask" />    
                <h1>MetaMask</h1>
                </div>
                <div className="col-md-4 ii">
                <img src={coinbase} alt="coinbase" />    
                <h1>CoinBase Wallet</h1>
            </div>
            </div>
            <b>what is a wallet?</b>
          </div>
        )}
      </div>
    </div>
  );
}
