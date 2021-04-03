import React from 'react'
import { useHistory } from 'react-router-dom';


export const Home = () => {

    const history = useHistory();
    if (!(localStorage.getItem("email"))) {
        history.push("/login");
    }

    return (
        <div>
            <h3>This is Home Page</h3>
        </div>
    )
}
