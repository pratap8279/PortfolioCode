import React from 'react'
import './style.scss'
import Section from '../shared/section/index'
import {AiOutlineCloudDownload} from 'react-icons/ai'
import TecgIcon from '../../images/tech-icon-new.png'
import CallToAction from '../shared/CallToAction/index'
 
const Skills=()=>{
    return(
        <Section  id="skills">

            <div className='skills-content-wrapper'>
                <div className='left-col' >
                  <img src={TecgIcon}  alt={ "js  java spring boot Recat  Node Mongodb" }/>
                </div>
                <div className='right-col'>
                    <h2> Skills</h2>
                    <p>   

                        <li> React js</li>
                        <li> Node js</li>
                        <li> Mongodb</li>
                        <li> Java</li>
                        <li> Core Java</li>
                        <li> Spring Boot</li>
                        <li> C++</li>
                        <li> Opps</li>
                         Understanding of   Recat js MongoDb Node js Java Spring Boot 
                          cove java  and intersted and Backend Services Like Making
                           Rest Api Schema 
                           
                    </p>
                    <CallToAction text="Downlod cv" icon={AiOutlineCloudDownload} />
                </div>
            </div>
        </Section>
    )
}

export default Skills;