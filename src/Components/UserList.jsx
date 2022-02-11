import React from "react";
import { Link } from "react-router-dom";

export default function UserList(props) {
  const usersData = [
    {
      status: "Active",
      createdate: "2022-01-15 18:38:45",
      username: "Naveed",
      email: "naveedsagheer101@gmail.com",
      fullname: "Naveed Ahmed",
      connectedwallet:"No",
    },
    {
      status: "Active",
      createdate: "2022-02-25 22:38:45",
      username: "Ahmed",
      email: "Ahemd101@gmail.com",
      fullname: "Ahmed Ali",
      connectedwallet:"Yes",
    },
    {
      status: "Active",
      createdate: "2022-01-15 18:38:45",
      username: "",
      email: "naveedsagheer101@gmail.com",
      fullname: "Naveed Ahmed",
      connectedwallet:"No",
    },
    {
      status: "Active",
      createdate: "2022-01-15 18:38:45",
      username: "",
      email: "naveedsagheer101@gmail.com",
      fullname: "Naveed Ahmed",
      connectedwallet:"Yes",
    },
    {
      status: "Active",
      createdate: "2022-01-15 18:38:45",
      username: "",
      email: "naveedsagheer101@gmail.com",
      fullname: "Naveed Ahmed",
      connectedwallet:"Yes",
    },
    {
      status: "Active",
      createdate: "2022-01-15 18:38:45",
      username: "Kumail",
      email: "naveedsagheer101@gmail.com",
      fullname: "Naveed Ahmed",
      connectedwallet:"No",
    },
    {
      status: "Active",
      createdate: "2022-01-15 18:38:45",
      username: "Moiz",
      email: "naveedsagheer101@gmail.com",
      fullname: "Naveed Ahmed",
      connectedwallet:"Yes",
    },
  ];
  return (
    <div className="userlist">
      <div className="inputs">
        <h3>Show</h3>
        <input type="number" className="numberinput" />
        <h3>entries</h3>
        <div className="search">
            Search:<input type="text" name="search"/>
        </div>
      </div>
      <div className="users">
        <table class="products-table">
          <thead>
            <tr>
              <th>Status</th>
              <th>Created Date</th>
              <th>Username</th>
              <th>Email Address</th>
              <th>Fullname</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {usersData.map((user) => (
              <tr>
                <td>
                  {" "}
                  <p className="active">{user.status}</p>{" "}
                </td>
                <td>{user.createdate}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.fullname}</td>
                <td>
                <Link to = "/userinformation"> <i className="bi bi-three-dots" onClick={()=>props.selectuser(user)}></i>
                </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
      <div className="bottom2">
                <p>Showing 1 to 10 of 10 entries</p>
                <div className="buttons">
                    <button className="btn">
                    Previous</button><b className="b">{1}</b>
                    <button className="btn">Next</button>
                </div>
      </div>
      </div>
    </div>
  );
}
