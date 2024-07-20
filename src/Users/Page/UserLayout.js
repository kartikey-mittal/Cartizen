import React from "react"
import UserSideBar from "../Components/UserSideBar";
import Upper from "../Components/Upper";

const UserLayout = () => {
  return (
    <div style={{display:'flex',flexDirection:'row',height:'100vh',width:'100vw',backgroundColor:'red'}}>
      <div style={{backgroundColor:'green',height:"100vh",width:"20vw"}}>
<UserSideBar/>
      </div>
      <div style={{backgroundColor:'yellow',height:'100vh',width:'80vw'}}>
        <Upper/>
      </div>
    </div>
  )
};

export default UserLayout
