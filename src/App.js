import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavBar from "./Components/NavBar";
import DashBoard from "./Components/DashBoard";
import SideBar from "./Components/SideBar";
import Programs from "./Components/Programs";
import SeeProgram from "./Components/SeeProgram";
import Notifications from "./Components/Notifications";
import EditProfile from "./Components/EditProfile";
import UserList from "./Components/UserList";
import UserInformation from "./Components/UserInformation";
import SendNotification from "./Components/SendNotification";
import ShowPrograms from "./Components/ShowPrograms";
import CreateProgram from "./Components/CreateProgram";
import EditProgram from "./Components/EditProgram";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import NFT from "./Components/NFT";
import { useState } from "react";

function App() {
  const [academy, setacademy] = useState({});
  const [user, setuser] = useState({});
  const [progrm, setprogram] = useState({});
  const Notification = [
    {
      sender: "Metagenci admin",
      msg: "hey,how are you, don't forget to server cache",
      date: "25 min ago",
    },
    {
      sender: "Naveed admin",
      msg: "hey,how are you, don't forget to server cache ",
      date: "25 min ago",
    },
    {
      sender: "Metagenci admin",
      msg: "hey,how are you, don't forget to server cache",
      date: "25 min ago",
    },
    {
      sender: "Metagenci admin",
      msg: "hey,how are you, don't forget to server cache",
      date: "25 min ago",
    },
    {
      sender: "Metagenci admin",
      msg: "hey,how are you, don't forget to server cache",
      date: "25 min ago",
    },
    {
      sender: "Metagenci admin",
      msg: "hey,how are you, don't forget to server cache",
      date: "25 min ago",
    },
  ];
  const seeprogram = (programs, index) => {
    console.log("Calling Function");
    setacademy(programs[index]);
  };
  const selectuser = (u) => {
    console.log("User is : ", u);
    setuser(u);
  }
  const selectprogram = (program)=> {
    setprogram(program);
  }
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <NavBar />
            <SideBar />
            <DashBoard seeprogram={seeprogram} />
          </Route>
          <Route exact path="/programs">
            <NavBar />
            <SideBar />
            <Programs seeprogram={seeprogram} />
          </Route>
          <Route exact path="/seeprogram">
            <NavBar />
            <SideBar />
            <SeeProgram programs={academy} />
          </Route>
          <Route exact path="/notifications">
            <NavBar />
            <SideBar />
            <Notifications notifications={Notification} />
          </Route>
          <Route exact path="/editprofile">
            <NavBar />
            <SideBar />
            <EditProfile />
          </Route>
          <Route exact path = "/listuser">
            <NavBar />
            <SideBar />
            <UserList selectuser = {selectuser}/>
          </Route>
          <Route exact path = "/userinformation">
            <NavBar />
            <SideBar />
            <UserInformation user = {user}/>
          </Route>
          <Route exact path = "/sendnotification">
            <NavBar />
            <SideBar />
            <SendNotification program = {progrm}/>            
          </Route>
          <Route exact path = "/showprograms">
            <NavBar/>
            <SideBar/>
            <ShowPrograms selectprogram = {selectprogram}/>
          </Route>
          <Route exact path = "/createprogram">
            <NavBar/>
            <SideBar/>
            <CreateProgram/>
          </Route>
          <Route exact path = "/editprogram">
            <NavBar/>
            <SideBar/>
            <EditProgram program = {progrm}/>
          </Route>
          <Route exact path = "/nft">
            <NavBar/>
            <SideBar/>
            <NFT/>
          </Route>
          <Route exact path = "/signin">
              <SignIn/>
          </Route>
          <Route exact path = "/signup">
              <SignUp/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
