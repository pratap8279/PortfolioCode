import React, { useState } from "react";
import './style.scss'
import CallToAction from "../../shared/CallToAction";
import { CgMenuRight } from 'react-icons/cg'
import { IoMdClose } from 'react-icons/io'
import Logo from "../../../images/ark2.png"
import { scrollToSection } from '../../utills/helper'
const Navigation = () => {
    const [mobileMenu, setMenu] = useState(false)
  const MenuIteamClickHandler = (section) => {
        setMenu(!mobileMenu)
        scrollToSection(section)
    }
    return (
       
        
        <div className="top-navigation-bar">

            <div className="app-logo">
                <img src={Logo} alt="rudra" onClick={()=>(MenuIteamClickHandler("skills"))} />
            </div>
         
           <div   className="mobile-menu" onClick={()=>   setMenu(!mobileMenu)}>
           {mobileMenu ? (<IoMdClose size={24} color="#fff" />) : (<CgMenuRight size={24} color="#ffd" />)} 
           </div>
           
         
            <div className={`navigation ${mobileMenu ? "active" : ""}`}>
          
                <span className="navigation-iteam" onClick={() => MenuIteamClickHandler("skills")}> skill</span>
                <span className="navigation-iteam" onClick={() => MenuIteamClickHandler("contact")} > Contact</span>
                <span className="navigation-iteam" onClick={() => MenuIteamClickHandler("blogs")}>Project</span>
                <CallToAction text={"contact me"} action={() => MenuIteamClickHandler("contact")} />
            </div>

            
        </div>
        // </div>
    )
}

export default Navigation;