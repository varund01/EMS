import React from 'react'
import '../../App.css'
import './Articles.css'
export const Articles = () => {
    return (
        <div className="">

            <div className="article-layout d-flex flex-lg-row 
            flex-sm-column align-items-sm-center flex-wrap justify-content-space-between">
                
                
               <div class="card d-flex flex-column mx-5 ">

                        <img className="img img-reponsive card-image mx-auto my-3" src="https://picsum.photos/200/300?random=1"/>

                        <div className="card-content pb-3">
                            <h3 className="text-center">First Blog Post</h3>
                            <p className="card-text mt-4 pl-3">lkdlkfmlfmldmvlsdkmvsv</p>
                        </div>            
                        <button className="btn btn-style btn-lg">Read More</button>
                </div>
              </div>
        </div>
    )
}
