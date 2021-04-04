import React,{useState,useEffect} from 'react'
import CommentInput from './CommentInput';
import './comments.css'

function SingleComment({text,username}) {
    
    const [like,setLike] = useState(false);

    const [reply,setReply] = useState(false);
    
    return (
        <>
          <div className="mt-3 comment-card d-flex ">
                <div className="w-20">
                    <img src="https://picsum.photos/200/300?random=5" className="img img-responsive comment-img"></img>
                </div>
                <div className="ml-4 w-80  d-flex flex-column">
                    <h4>{username}</h4>
                    <p className="">{text}</p>
                        
                        <div className=" mt-3 d-flex comment-action">
                        <i className={(like?"fas ":"far ") +"fa-heart px-2"} onClick={()=>setLike(!like)}> {!like?" Like":" Liked"}</i>
                        <i className="fas fa-reply px-2 " onClick={()=>setReply(!reply)}> Reply</i>
                        </div>
             

            {
            reply?<div className="ml-4">
                    <CommentInput rows="2" cid="3" type="Reply to Comment"/>
                </div>:""
            }

               </div>

            </div>
  
        </>
    )
}

export default SingleComment
