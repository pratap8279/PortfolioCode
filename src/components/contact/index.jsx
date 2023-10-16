import React from "react";
import './style.scss'
import ContactInfo from "./contact-info";
import Section from '../shared/section/index'
import Form from "./form";
const Contact=()=>{
    return(
         <Section id='contact' title="Any Suggection For  Further Improvement  " >

            <div className="contact-content-wrapper"> 
            <ContactInfo/>
            <Form/>
             </div>
         </Section>
    )
}

export default Contact;