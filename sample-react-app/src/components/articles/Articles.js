import React,{useState,useEffect} from 'react'
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom'
import {Link} from 'react-router-dom'
import '../../App.css'
import './Articles.css'
import { SingleArticle } from './SingleArticle'
export const Articles = () => {
    const [ok,setok] = useState(3)
    return (
        <div>
            
            <div className="article-layout d-flex flex-lg-row 
            flex-sm-column align-items-sm-center flex-wrap justify-content-space-between">
                
                
               <div class="card d-flex flex-column mx-5 ">

                        <img className="img img-reponsive card-image mx-auto my-3" src="https://picsum.photos/200/300?random=1"/>

                        <div className="card-content pb-3">
                            <div className="card-title d-flex flex-column">
                                <h3 className="p-2 mr-auto">First Blog Post</h3>
                                <h4 className="p-2">Posted on :<span> <small>25 Feb,2004</small></span></h4>
                            </div>
                        </div>   

                        <Link to={`/single/${ok}`}>
                            <a href="#" className="btn btn-block btn-style btn-lg">Read More</a>
                        </Link>
                </div>
              </div>
        </div>
    )
}
