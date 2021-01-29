import React, { useState , useEffect } from 'react';

function Useeffectcleanup() {
    const [size, setsize] = useState(window.innerWidth);


    const chekSize = ()=>{
        setsize(window.innerWidth);
    }

   

    useEffect(() => {
        window.addEventListener('resize',chekSize)
        //clean up fuction is vey imported in condtional rendering
        return () => {
            window.removeEventListener('resize',chekSize);
        }
    }, [])



    return (
        <>
            <h1>Width</h1>
          <label htmlFor="">{size} px</label>
        </>
    )
}

export default Useeffectcleanup;

