import React from 'react'

import SingleComment from '../comments/SingleComment'
import CommentInput from '../comments/CommentInput'

import '../../App.css'
import './Articles.css'

export const ArticleComments = () => {
    

    return (
        <div className="d-flex flex-column">
            
            <div className="w-50 ml-3 article-title">
                <h3 className="p-2 ">Comments</h3> 
            </div>
            
            <CommentInput rows="3" type="Post Comment"/>

            <SingleComment username="Rohit" text="This is my first comment"/>
        </div>
    )
}
