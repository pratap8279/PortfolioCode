import React from "react";
import './style.scss'
import Arrow from "./arrow";
const CallToAction=({text,action,icon})=>{
    return(
        <div className="CallToAction" onClick={action}>
          <span className="text">{text}</span>
          {icon ? <div className="icon">{icon}</div> :<Arrow/> }
          <span className="arrow-icon">
            <Arrow/>
          </span>
        </div>
    )
}

export default CallToAction;