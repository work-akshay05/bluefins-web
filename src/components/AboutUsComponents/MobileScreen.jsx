import React from 'react'
import BlueRect1  from "../../assets/AboutUsAssets/BlueRectangle1.svg"
import BlueRect2  from "../../assets/AboutUsAssets/BlueRectangle2.svg"
import BlueRect3 from "../../assets/AboutUsAssets/BlueRectangle3.svg"
import Whatsapp from "../../assets/AboutUsAssets/WhatsappScreen.svg"



const MobileScreen = () => {


  return (
    <div>
        <div className="absolute  top-[230vh] left-[10vh]">
           <img className="" src={Whatsapp}/>
        </div>
        <div className="absolute top-[250vh] right-[20vh] flex-col space-y-14">
            <img src={BlueRect1}/>
            <img src={BlueRect2}/>
            <img src={BlueRect3}/>
        </div>
        
  
    </div>
  )
}

export default MobileScreen
