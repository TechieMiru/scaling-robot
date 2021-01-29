import React from 'react';
import { data_set } from "../dataset";


const ArrayExample =() =>{

    const [state, setstate] = React.useState(data_set);

    const removeItem =(id) =>{
        let newdata = state.filter((state) => state.id !== id)
        setstate(newdata);
        //setstate();
    }
   

    return <>
        {       
            state.map((person)=>{
                const {id,title} = person
                return <div key={id} className="items-center">
                    <h2>{title}</h2>
                    <button className="bg-blue-600 hover:bg-blue-400 text-2xl text-white font-bold rounded-lg py-2 px-2" onClick={()=> removeItem(id)}>remove</button>
                </div>
            })
        }   
        <button className=" bg-blue-600 hover:bg-blue-400 text-2xl text-white font-bold rounded-lg py-2 px-2" 
                onClick={() => setstate([])}>
                    Clear
        </button> 
       
    </>
}


export default ArrayExample;