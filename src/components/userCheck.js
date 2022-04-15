import React, {useEffect} from "react";
import {useNavigate} from 'react-router-dom';

function UserCheck(props){
    // console.log(props)
    let Comp = props.Comp
    const navigate = useNavigate();
    console.log(localStorage.getItem('user-info'))

    useEffect(() => {
        if(!localStorage.getItem('user-info'))
        {
            navigate("/login")  
        }
    }, []) 
    return(
        <div>
            <Comp/>
        </div>
    );
}
export default UserCheck;