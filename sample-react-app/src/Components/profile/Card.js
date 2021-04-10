import React,{useState,useContext} from 'react'
import { useHistory } from 'react-router-dom'

import ImageSection from './ImageSection'
import TotalCount from './TotalCount'
import AboutSection from './AboutSection'
import Employee_Intro from './Employee_Intro'

import ProfileDataProvider from '../../Context/ProfileContext'

import './profile.css'
import CreateProfile from './CreateProfile'

const Card = () => {

    const history = useHistory();
    if (!(localStorage.getItem("email"))) {
        history.push("/login");
    }

    const [a,seta]  = useState(false);
    const [b,setb] = useState(true);
    const [cp,setcp] = useState(true);

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
            <ProfileDataProvider>        
            <ImageSection />

        <div className="contact-section ">
              <div className="nav nav-tabs d-flex mt-3 sec">
                <li className={b?"active":""}><a className="profile__link" onClick={solve_intro}>Introduction</a></li>
                <li className={a?"active":""} > <a  className="profile__link" onClick={solve_port}>PortFolio</a></li>
              </div>

        </div><br></br>

        <div className="d-flex justify-content-center flex-wrap">
            {
            (!b)?
                (cp?
                <>
                <TotalCount />
                <AboutSection />
                </>:<CreateProfile/>) : <Employee_Intro />
            }
        </div>
            </ProfileDataProvider>
        </div>
    )
}

export default Card;