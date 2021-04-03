import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'; 
import {Button} from "@material-ui/core" ;
import App from "../../App"
import "./login.css"
import { FeedBack } from '../FeedBack';

function Login() {

    const initialState = {
        email: "",
        password: "",
    };

    const history = useHistory();

    const [user,setUser] = useState(initialState);

    const onChange = async (e) => {
        const name = e.target.name;
        const value = e.target.value;
        
        setUser({ ...user, [name]: value });
        console.log(value);
    };

    const onFormSubmit = () => {
        //API-CALL
        localStorage.setItem("email",user.email);
        history.push("/profile");
    }

    return (
        <div className="login">
            <div className="login__header">
                <img className="login__header__img" src="sureify_logo.ico"/>
                <h3 className="login__header__text">Sureify</h3>
            </div>
            <div className="login__body">
                <form className="login__form" onSubmit={onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">
                            Email
                        </label>
                        <input type="email" className="form-control"
                            name="email" value={user.email} onChange={onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">
                            Password
                        </label>
                        <input type="password" className="form-control"
                            name="password" value={user.password} onChange={onChange}
                        />
                    </div>
                    <div>
                        <Button variant="contained" color="primary" type="submit" name="signin">Sign In</Button>
                    </div>
                    <hr />
                </form>
            </div>
        </div>
    )
}

export default Login
