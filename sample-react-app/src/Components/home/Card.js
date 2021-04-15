import React, { useEffect, useState } from 'react'
import './Card.css'
function Card(props) {
    
    return (
        <div className="Card">
            <div className="upper_container">
                <img src="https://www.sureify.com/wp-content/uploads/2019/07/Asset-1-3.png" alt="" height="180px" width="300px"/>
                <div className="image_container">
                    <img src="http://www.gstatic.com/tv/thumb/persons/487130/487130_v9_bb.jpg" alt="" height="100px" width="100px"/>
                </div>
            </div>
            <div className="lower_container">
                <h3>{props.name}</h3>
                <h4>{props.title}</h4>
                <button>Visit Profile</button>
            </div>
        </div>
    )
}

export default Card
