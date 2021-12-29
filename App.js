import React, { useState } from 'react';
import './App.css';
const App =()=>{
    let time = new Date().toLocaleTimeString();
    const [Ctime,setCtime]=useState(time);
    const UpdateTime =()=>{
        let time = new Date().toLocaleTimeString();
        setCtime(time);
    };
    setInterval(UpdateTime,1000);


    return(
        <div>
            <p>DIGITAL CLOCK</p>
            <h1>{Ctime}</h1>
        </div>
    );
};




export default App;
