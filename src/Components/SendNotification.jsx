import React from 'react';
import { useState } from 'react';

export default function SendNotification() {
    const [subject, setsubject] = useState('');
    const [message, setmessage] = useState('');
    const SendNotification = ()=>{
        console.log("Subject is : ",subject);
        console.log("Message is : ", message);
        //Call Api Here.....
    }
  return <div className='sendnotificationbox'>
            <h1>Send Notification(send to all users)</h1>
            <h2><span>*</span>Subject</h2>
            <input type="text" onChange={(e)=>setsubject(e.target.value)}/>
            <h2><span>*</span>Body</h2>
            <textarea name="msg" id="msg" cols="170" rows="10" onChange={(e)=>setmessage(e.target.value)}>
            </textarea>
            <button className='btn sendbtn' onClick={()=>SendNotification()}>Send</button>
        </div>;
}
