import React,{useState,useEffect} from 'react'

function CommentInput({rows,type}) {

    const [text,setText] = useState("")

    return (
        <>
          <div className="mt-2 p-2 add-comment">
                <form>
                    <textarea type="text" rows={rows} onChange={(e)=>setText(e.target.value)} value={text} className="form-control comment-area" placeholder="Start Typing"></textarea>
                    <a href="#" className="btn btn-lg btn-success mt-2">{type}</a>
                </form>
            </div>  
        </>
    )
}

export default CommentInput
