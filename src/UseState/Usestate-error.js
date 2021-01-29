import React from 'react';
import { useState } from 'react';

const ErrorExample =() =>{

    const [state, setstate] = useState("initialState");

    let title = "Cliked";

    const handleClick =() =>{
        if (state === "initialState") {
            setstate(title);
        }else{
            setstate("initialState");
        }
    };


    return <React.Fragment>
        <h1>{state}</h1>
        <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleClick} >Button</button>
    </React.Fragment>
};





export default ErrorExample;