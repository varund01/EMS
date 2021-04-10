import React,{useState,useEffect} from 'react'
import {useContext} from 'react'
import Picker from 'emoji-picker-react'

import {profileContext} from '../../Context/ProfileContext'


const Employee_Intro = () => {
    const [emoji,setemoji] = useState(null);

    const data = useContext(profileContext) 
    console.log(data)
    
    return (
        <div>
            {
            emoji?
            <h3>You Chose : {emoji.emoji}</h3>:
            <h3>No Emoji Choosen</h3>
            
        }
    <Picker onEmojiClick={(event,emojiObject)=>setemoji(emojiObject)}></Picker>
        </div>
    )
}

export default Employee_Intro