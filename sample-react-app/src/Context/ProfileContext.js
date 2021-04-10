import React,{createContext} from 'react'

export const profileContext = createContext()

const ProfileDataProvider = (props)=>{
    return (
        <profileContext.Provider value={{text:"Hello World"}}>
            {props.children}
        </profileContext.Provider>
    );
}

export default ProfileDataProvider


