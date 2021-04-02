import React,{useState} from 'react'

import ImageSection from './ImageSection'
import TotalCount from './TotalCount'
import AboutSection from './AboutSection'
import Employee_Intro from './Employee_Intro'

import './profile.css'

const Card = () => {

    const [a,seta]  = useState(false);
    const [b,setb] = useState(true);
    
    const solve_intro = ()=>{
        setb(b?b:!b);
        seta(false);
    }

    const solve_port = ()=>{
        seta(a?a:!a);
        setb(false);
    }

    return (
        <div className="container ">
        <ImageSection />

        <div className="contact-section ">
              <div className="nav nav-tabs d-flex mt-3 sec">
                <li className={b?"active":""}><a href="#" onClick={solve_intro}>Introduction</a></li>
                <li className={a?"active":""} > <a href="#"  onClick={solve_port}>PortFolio</a></li>
              </div>
     
        </div><br></br>
        
        <div className="d-flex justify-content-center flex-wrap">
            {
            (!b)?
                <>
                <TotalCount />
                <AboutSection />
                </> : <Employee_Intro />
            }
        </div>

        </div>
    )
}

export default Card;