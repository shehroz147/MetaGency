import React from "react";

export default function Notifications(props) {
  return <div className="notificationbox">
            <h1>Notifications of the Metagenci group</h1>
            <div className="msg2">
            {
                props.notifications.map((noti)=>(
                    <div className="print2">
                  <div className="greySpace2"></div>
                  <h2>{noti.sender}</h2>
                  <h3>{noti.msg}</h3>
                  <p>{noti.date}</p>
                  <hr />
                </div>
                ))
                
            }  
            </div>
  </div>;
}
