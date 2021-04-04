import React from 'react'
import { useHistory } from 'react-router-dom';

export const FeedBack = () => {
    const history = useHistory();
    if (!(localStorage.getItem("email"))) {
        history.push("/login");
    }
    return (
        <div>
            <h3>This is FeedBack Component </h3>
        </div>
    )
}
