import React from 'react'
import '../../App.css'
import './Articles.css'

export const ArticleComments = () => {
    return (
        <div className="d-flex flex-column">
            
            <div className="w-50 ml-3 article-title">
                <h3 className="p-2 ">Comments</h3> 
            </div>
            <div className="mt-2 p-2 add-comment">
                <form>
                    <textarea type="text" rows="4" className="form-control comment-area" placeholder="Start Typing"></textarea>
                    <a href="#" className="btn btn-lg btn-style mt-2">Post Comment</a>
                </form>
            </div>


        </div>
    )
}
