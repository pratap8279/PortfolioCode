import React from 'react';
import './style.scss'
import  hand from '../../../images/hand.png'
import CallToAction from '../../shared/CallToAction';
import {BsAwardFill} from 'react-icons/bs'
import {FaUser} from 'react-icons/fa'
import rudra from '../../../images/rudra.png'
import {scrollToSection} from  '../../utills/helper'

const IntroContent = () => {
    return (
        <div className='intro-Content'>

            <div className='layout'>
                <div className='left-col'>
                    <h1 className='title'>
                        <span className='small-text'>
                            <span className='text'  > hello</span>
                            <span className='icon'> <img src={hand}/></span>
                            <span className='text'>, I Am  </span>
                        </span>
                        <span className='big-text' >
                               Rudra Pratap Singh
                        </span>
                    </h1>
                    <p> Hello I am Rudra Pratap A student of Informatiom Technology From Institute Of Techlonogy
                         And Management Gwalior I  Am a FullStack Web Developer I AM 
                          Interested In Backend Serviecs  </p>
                    <CallToAction  className="call-to-action"  text={"contact Me"} />
                </div>
                <div className='right-col'>

                    <img src={ rudra } alt="Rudra"/>
                    <div className='highlight horizontal'>
                        <div className='icon'>
                        <BsAwardFill/>
                        </div> 
                        <div className='text'> Fresher</div>
                    </div>
                    <div className='highlight verticle'>
                        <div className='icon'>
                        <FaUser/>
                        </div> 
                        <div className='text'>Looking For InternShip</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IntroContent;