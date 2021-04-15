import React from 'react'
import { useHistory } from 'react-router-dom';
import Card from "./Card"
import './Home.css'

export const Home = () => {

    const history = useHistory();
    if (!(localStorage.getItem("email"))) {
        history.push("/login");
    }
    const [name,setName]=useState("")
    const [title,setTitle]=useState("")
    useEffect(()=>{
        var url="http:localhost:6700/routes/profile/view"
        axios.get(url)
            .then(response =>{
                const employees=response.data
                console.log(employees)
            })
            .catch(error =>{
                console.log(error)
            })
    },[])
    return (
        <div className="home">
            {employees.map(cval =>{
                <Card name={employees.emp_name} title={employees.title}/>
            })}
            {/*<Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>*/}
        </div>
    )
}
