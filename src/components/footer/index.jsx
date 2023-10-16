import React from "react";
import Section from "../shared/section";
import SocialIcon from "./social-icon/index.jsx";
import Ark from '../../images/ark2.png'
import { scrollToSection } from '../utills/helper'
import { FaYoutube, FaGithub, FaLinkedin, FaStackOverflow, FaInstagram } from 'react-icons/fa'
import './style.scss'
const Footer = () => {
    return (
        <Section className="footer">
            <div className="footer-content-wrapper" >
                <div className="footer-logo">
                    <img src={Ark} alt="Itm Goi" />
                </div>
                <ul className="footer-menu-items">
                    <li className="footer-menu-item" onClick={()=>scrollToSection("skills")} >
                        Skills

                    </li>
                  

                    <li className="footer-menu-item" onClick={()=>scrollToSection("blogs")}>
                        Projects

                    </li>
                    <li className="footer-menu-item" onClick={()=>scrollToSection("contact")} >
                        Contact

                    </li>
                    
                </ul>
                <div className="social-icons">

                    
                <SocialIcon />
            
                    <SocialIcon color="#FF0000"  icon={<FaYoutube/>} 
                    link={'www.google.com'}
                    
                    /> 
                         <SocialIcon color="#0D2636"  icon={<FaGithub/>} 
                         link='https://github.com/settings/profile'
                     
                    />
                      <SocialIcon color="#f2740d"  icon={<FaInstagram/>} 
                    link={'https://www.instagram.com/rudra_pratap.jr/?igshid=OGQ5ZDc2ODk2ZA%3D%3D'}
                    
                    />
                      <SocialIcon color="#E84C88"  icon={<FaLinkedin/>} 
                     link={'https://www.linkedin.com/in/rudra-pratap-singh-53a058233?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'}
                    
                    />
                        <SocialIcon color="#FF0000"  icon={<FaStackOverflow/>}  
                          // link={} 
                           />  
                  
                    

                    
                </div>
                <div className="bottom-bar">
                    <div className="CopyRight-text" >
                        Copyright 2023 Rudra Pratap | All Right Reserved
                    </div>
                    
                     </div>
            </div>
        </Section>
    )
}



export default Footer;