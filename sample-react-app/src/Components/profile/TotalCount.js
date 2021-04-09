import React from 'react'
import './profile.css'
import '../../App.css'
const TotalCount= () => {
    return (
        <div className="comp1-layout p-4 shadow-sm  profile-details">
            <h5>Total Likes <span><i class="fas fa-2x fa-thumbs-up px-3 "></i></span> 7</h5><br/>

            <h5>Total Recognitions<span><i class="fas fa-2x fa-award px-3 "></i></span> 7</h5><br/>
            <h5>Total Awards <span><i class="fas fa-2x fa-trophy px-3 "></i></span>  3</h5><br />
        </div>
    )
}

export default TotalCount