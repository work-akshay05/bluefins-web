import React from 'react'
import WhiteBoard from "../../assets/AboutUsAssets/Board.svg"
import Man2svg from "../../assets/AboutUsAssets/ManRaisedArm1.svg"
import GRect1 from "../../assets/AboutUsAssets/SmallGreenRectangle1.svg"
import GRect2 from "../../assets/AboutUsAssets/SmallGreenRectangle2.svg"
import GRect3 from "../../assets/AboutUsAssets/SmallDarkGreenRectangle3.svg"

const ManNearWhiteBoard = () => {
  return (
    <div>
        <div className="absolute flex top-[115vh] right-[25vh]">
                    <img src={WhiteBoard} alt="" />
                </div>
                <div>
                    <img src={Man2svg} alt="" className="absolute flex right-[10vh] top-[155vh]"/>
                </div>
                <div>
                    <img src={GRect1} alt="" className="absolute flex top-[130vh] left-[20vh]"/>
                    <img src={GRect2} alt="" className="absolute flex top-[130vh] right-[10vh]"/>
                    <img src={GRect3} alt="" className="absolute flex top-[160vh] left-[40vh]"/>
                </div>
      
    </div>
  )
}

export default ManNearWhiteBoard
