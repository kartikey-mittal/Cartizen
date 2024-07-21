import React from "react"
import UserMainR from "../Components/UserMainR";
import RideRight from "../Components/RideRight";
import RideLeft from "../Components/RideLeft";

const UserMain = () => {
  return (
    <div style={{height:'85.5vh',width:"82vw",backgroundColor:'pink',display:'flex',flexDirection:'row'}}>
      <div style={{width:'50%',height:'100%',backgroundColor:'white'}}>
<RideLeft/>
    </div>
    <div style={{width:'50%',height:'100%',backgroundColor:'white'}}>
        {/* <UserMainR/> */}
        
        <RideRight/>
    </div>
    </div>
  )
};

export default UserMain
