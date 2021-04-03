import React from 'react'
import { useHistory } from 'react-router-dom';

export const Articles = () => {
    const history = useHistory();
    if (!(localStorage.getItem("email"))) {
        history.push("/login");
    }
    return (
        <div>
            <h3>This is Article Page</h3>
        </div>
    )
}
