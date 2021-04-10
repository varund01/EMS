import React, { useState } from "react"
import "./feedback.css"
import RangeSlider from "./RangeSlider";
import { useHistory } from 'react-router-dom';

import '../../App.css'

const Feedback=()=>{
    const [state, setstate] = useState({belief:0,opportunities:0,happiness:0,balance:0,processes:0,administration:0,communication:0,trust:0,engagement_culture:0,work_from_home:0,lead_guidance:0,your_effort:0,referal:0,circumstances:'',suggestions:''})
    const submitHandler=(e)=>{
        e.preventDefault()
        console.log(state)
    }
    const history = useHistory();
    if (!(localStorage.getItem("email"))) {
        history.push("/login");
    }
    return(
        <div className="container shadow p-3">
            <form onSubmit={submitHandler}>
                <div className="heading">
                    <h1 className="center mt-5">Employee Feedback Survey</h1>
                    <h6 >Please give your feedback below</h6>
                </div>    
                <div className="survey">
                    <h4 >I believe Sureify has a great future.</h4>
                    <RangeSlider id="belief" value={state.belief} minLabel="Poor" maxLabel="Excellent" onChange={(e,newVal)=>setstate({...state,belief:newVal})} required/>
                    <h4>Does Sureify provide you with opportunities to learn and grow as an individual?</h4>
                    <RangeSlider id="opportunities" minLabel="Not at all" maxLabel="Of course" onChange={(e,newVal)=>setstate({...state,opportunities:newVal})} required/>
                    <h4>Happiness at work.</h4>
                    <RangeSlider id="happiness" minLabel="Poor" maxLabel="Awesome" onChange={(e,newVal)=>setstate({...state,happiness:newVal})} required/>
                    <h4>Work-life Balance.</h4>
                    <RangeSlider id="balance" minLabel="Poor" maxLabel="Awesome" onChange={(e,newVal)=>setstate({...state,balance:newVal})} required/>
                    <h4>Are the Processes at Sureify efficient ( PM, QA, Engg )?</h4>
                    <RangeSlider id="processes" minLabel="Poor" maxLabel="Excellent" onChange={(e,newVal)=>setstate({...state,processes:newVal})} required/>
                    <h4>Is the Administration at Sureify efficient?</h4>
                    <RangeSlider id="administration" minLabel="Poor" maxLabel="Excellent" onChange={(e,newVal)=>setstate({...state,administration:newVal})} required/>
                    <h4>How do you find the Communication and Coordination across the organization?</h4>
                    <RangeSlider id="communication" minLabel="Poor" maxLabel="Excellent" onChange={(e,newVal)=>setstate({...state,communication:newVal})} required/>
                    <h4>How trusted do you feel with the Sureify India leadership?</h4>
                    <RangeSlider id="trust" minLabel="Poor" maxLabel="Excellent" onChange={(e,newVal)=>setstate({...state,trust:newVal})} required/>
                    <h4>How would you rate Sureify's employee engagement culture?</h4>
                    <RangeSlider id="engagement_culture" minLabel="Poor" maxLabel="Excellent" onChange={(e,newVal)=>setstate({...state,engagement_culture:newVal})} required/>
                    <h4>How effective is it working from home? ( Coordination, Connectivity etc )</h4>
                    <RangeSlider id="work_from_home" minLabel="Poor" maxLabel="Excellent" onChange={(e,newVal)=>setstate({...state,work_from_home:newVal})} required/>
                    <h4>How well is your immediate lead/manager capable of guiding and empowering you in right direction?</h4>
                    <RangeSlider id="lead_guidance" minLabel="Poor" maxLabel="Excellent" onChange={(e,newVal)=>setstate({...state,lead_guidance:newVal})} required/>
                    <h4>How is your effort valued in the team and by the lead/manager?</h4>
                    <RangeSlider id="your_effort" minLabel="Poor" maxLabel="Excellent" onChange={(e,newVal)=>setstate({...state,your_effort:newVal})} required/>
                    <h4>How inclined are you to refer your friends/others to work here?</h4>
                    <RangeSlider id="referal" minLabel="Poor" maxLabel="Excellent" onChange={(e,newVal)=>setstate({...state,referal:newVal})} required/>
                    <h4>If due to some unfavourable circumstances, you decide to leave us, what could those circumstances, according to you, be?</h4>
                    <input id="circumstances" type="text" placeholder="Your answer" onChange={e=>setstate({...state,circumstances:e.target.value})} required />
                    <h4>Overall Suggestions/Improvements</h4>
                    <input id="suggestions" type="text" placeholder="Your answer" onChange={e=>setstate({...state,suggestions:e.target.value})} required/>
                    <button type="submit" className="btn btn-success p-2">Submit</button>
                </div>
            </form>
        </div>
    )
}
export default Feedback