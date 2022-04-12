import React, { Component, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login(){
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [error, setError] = useState('');

    let navigate = useNavigate();

    // const navigate = useHistory();
    const submitHandler = (e) => {
        e.preventDefault();
        const postData = {data : {name, surname}}

        axios.post('https://pure-caverns-82881.herokuapp.com/api/v54/users', postData,  
        {headers:{
                        "X-Access-Token": 'baa5c43c80801b026c9113061d49a2616ada5c5254c3b380fee6523d7c23c37f',
                    }
                })
        .then((res) => {
            console.log(res.data.id)
            postData.data.id = res.data.id
            localStorage.setItem("user-info", JSON.stringify(postData["data"]))
            // alert("User added") 
            navigate('/main')
        })
        .catch((err)=>{
            console.log(err)
            // setError('User already exists!');
            alert("already exists")
            
        })
        
    }

    return (
        <div className="main">
            <div className="login-div">
                <form className="login-form" onSubmit={submitHandler}>
                    <h1>Log in</h1>
                    <input type="text" name="name" className="name" placeholder="name" 
                        value={name} onChange={(e)=>setName(e.target.value)}/>
                    <input type="text" name="surname" className="surname" placeholder="surname" 
                        value={surname} onChange={(e)=>setSurname(e.target.value)}/>
                    <input type="password" name="password" className="password" placeholder="password" />
                    <input type="submit" className="login-button" value="Log in" />

                </form>
            </div>
        </div>
        )
}

export default Login;