import React from "react";
import './style.scss'

import { FaPhoneAlt } from "react-icons/fa";
import {MdEmail} from 'react-icons/md'
const ContactInfo=()=>{
    return(
         <div className="contact-info-box">
            <h4>
                I whould be To Happy any Suggections
                Or You May Have Question About 
                 Coading
            </h4>
            <div className="contact-option">
                <FaPhoneAlt/>
               <span className="text">8279359254</span>
            </div>
            <div className="contact-option">
                <MdEmail/>
               <span className="text">rps123.2018@gmail.com</span>
            </div>
         </div>
    )
}

export default ContactInfo;