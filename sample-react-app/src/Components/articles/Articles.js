import React,{useState,useEffect} from 'react'
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom'
import { useHistory } from 'react-router-dom';
import {Link} from 'react-router-dom'

import '../../App.css'
import './Articles.css'


export const Articles = () => {
    const history = useHistory();
    if (!(localStorage.getItem("email"))) {
        history.push("/login");
    }    



  return (
        <div>
            <div className="article-layout d-flex flex-lg-row 
            flex-sm-column align-items-sm-center flex-wrap justify-content-space-between">
                
                
               <div class="card d-flex flex-column mx-5 ">

                        <img className="img img-reponsive card-image mx-auto my-3" src="https://picsum.photos/200/300?random=1"/>

                        <div className="card-content ">
                            <div className="card-title d-flex flex-column">
                                <h3 className="pl-2  mr-auto">First Blog Post</h3>
                                <p className="pl-2">Posted on :<span> <small>25 Feb,2004</small></span></p>
                                <p className="pl-2">Posted by :<span> <small>Admin</small></span></p>
                            </div>
                        </div>   
                        <div className="p-3">
                        <Link to={`/single/3`}>
                            <button className="btn btn-block btn-success btn-lg">Read More</button>
                        </Link>
                        </div>
                </div>

                


              </div>
        </div>
    )
}
