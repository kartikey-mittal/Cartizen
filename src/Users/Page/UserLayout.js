import React from "react"
import UserSideBar from "../Components/UserSideBar";

const UserLayout = () => {
  return (
    <div style={{display:'flex',flexDirection:'row',height:'100vh',width:'100vw',backgroundColor:'red'}}>
      <div style={{backgroundColor:'green',height:"100vh",width:"20vw"}}>
<UserSideBar/>
      </div>
      <div style={{backgroundColor:'yellow',height:'100vh',width:'80vw'}}>

      </div>
    </div>
  )
};

export default UserLayout
