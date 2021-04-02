import React from 'react'
import './profile.css'
import '../../App.css'

const ImageSection = () => {
    return (
        <div className="shadow-lg mt-4 d-flex flex-lg-row flex-md-column align-items-center flex-sm-column flex-wrap comp1-layout">
            <div className="profile-image">
                <img src="https://picsum.photos/200/300?random=2" className="image-styling"/>
            </div>
            <div className="profile-name mx-auto my-2 ">
                <h3>A Vamsi Mudaliar</h3>
                <h6 className="pt-3">Software Engineer-1 @ Sureify</h6>
                
            </div>
            <div className="more-info p-4 ">
                <h3>More Info :</h3><br></br>
                <h5>Location : Hyderabad,India</h5><br/>
                <h5>Start Date : June,2021</h5><br/>
                <h5>Years Of Experience : 5yrs</h5><br />
                <div className="d-flex sss">
                    <a href="#" className="fa fa-2x fa-envelope px-2" ></a>
                    <a href="#" className="fab fa-2x fa-slack px-2" ></a>
                    <a href="#" className="fab fa-2x fa-twitter px-2" ></a>
                    <a href="#" className="fab fa-2x fa-linkedin px-2" ></a>
                </div>
            </div> 

        </div>
    )
}

export default ImageSection