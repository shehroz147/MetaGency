import React from "react";

export default function StatusBox() {
  return (
    <div className="status">
      <h1>
        <span>*</span>User Status
      </h1>
      <select name="Status" id="Status">
        <option value="active">Active</option>
        <option value="nonactive">Non Active</option>
      </select>
      <h1>
        <span>*</span>User Role
      </h1>
      <select name="role" id="role">
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>
      <h1>
        <span>*</span>New Password
      </h1>
      <input
        type="password"
        placeholder="Leave Blank If You Dont Want to Change"
      />
      <h1>
        <span>*</span>Confirm Password
      </h1>
      <input type="password" placeholder="retype new password" />
      <button className="btn savechangebtn">Save Change</button>
    </div>
  );
}
