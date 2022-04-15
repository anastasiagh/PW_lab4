import React, { Component, useState, useEffect } from 'react';
import ViewQuizes from './viewQuizes';
import axios from 'axios';

function Quizes() {
    const [quizes, setQuizes] = useState(null);

    useEffect(() => {
        axios.get('https://pure-caverns-82881.herokuapp.com/api/v54/quizzes',
        {headers:{
                    "X-Access-Token": 'baa5c43c80801b026c9113061d49a2616ada5c5254c3b380fee6523d7c23c37f',
                }
        })
        .then((resp) => {
                const allQuizes = resp.data;
                setQuizes(allQuizes);         
                console.log(resp.data)
        })
    }, []);
    
        return (
            <div className="main">
                 <ViewQuizes {...quizes} />
            </div>
        )
    
}

export default Quizes;
