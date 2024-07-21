import React from "react"
import UserSideBar from "../Components/UserSideBar";
import UserHome from "./UserHome";
import Upper from "../Components/Upper";
import UserMain from "./UserMain";

const UserLayout = () => {
  return (
    <div style={{display:'flex',flexDirection:'row',height:'100vh',width:'100vw',backgroundColor:'red'}}>
      <div style={{backgroundColor:'#58b34e',height:"100vh",width:"18vw"}}>
<UserSideBar/>
      </div>
    
      <div style={{backgroundColor:'#000',height:'100vh',width:'82vw'}}>
       <Upper/>
        <UserMain/>
        {/* <UserHome/> */}
      </div>
    </div>
  )
};

export default UserLayout
