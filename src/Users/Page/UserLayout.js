import React from "react"
import UserSideBar from "../Components/UserSideBar";
import UserHome from "./UserHome";

const UserLayout = () => {
  return (
    <div style={{display:'flex',flexDirection:'row',height:'100vh',width:'100vw',backgroundColor:'red'}}>
      <div style={{backgroundColor:'green',height:"100vh",width:"18vw"}}>
<UserSideBar/>
      </div>
      <div style={{backgroundColor:'#ffffff',height:'100vh',width:'82vw'}}>
<UserHome/>
      </div>
    </div>
  )
};

export default UserLayout
