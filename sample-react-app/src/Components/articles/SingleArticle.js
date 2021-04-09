import React from 'react'
import {NavLink} from 'react-router-dom'
import '../../App.css'
import './Articles.css'
import {ArticleComments} from './ArticleComments'

export const SingleArticle = () => {
    console.log("Hello")
    return (
        <div className="d-flex shadow article-layout container flex-column  single-article">
              <img className="img img-reponsive article-img mx-auto my-3" src="https://picsum.photos/200/300?random=1"/>
                <div className="w-50 mx-auto article-title">
                <h3 className="p-2 text-center">Blog Title</h3> 
                </div>
                <div className="article-text">
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. 
                It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 
                1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. 
                This book is a treatise on the theory of ethics, 
                very popular during the Renaissance. The first line of Lorem Ipsum, "
                Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.0
                The standard chunk of Lorem Ipsum 
                used since the 1500s is reproduced below for those interested. 
                Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                </div>
                <ArticleComments />
        </div>
    )
}
