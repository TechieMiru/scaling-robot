import React from 'react'

function Usestatecounter() {

    const [value, setvalue] = React.useState(0);
    const complexIncrease =() =>{
        setTimeout(()=>{
            setvalue((prevstate)=>{
                return prevstate + 1;
            });
        },2000);
    };
    // const { timerTime } = this.time;
    // let centiseconds = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2);
    // let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
    // let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
    // let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);

   
    return <>
         <section>
            <h2 className ="text-center text-6xl py-4 font-bold">Counter Game</h2>
            <h1 className ="text-center text-5xl py-4 font-bold">{value}</h1>
            <div className="flex justify-center">
                <button className=" text-2xl text-gray-200 font-bold px-6 bg-blue-600 rounded-lg mx-auto" 
                        onClick ={()=> setvalue(value +1)}>Increase</button>
                <button className=" text-2xl text-gray-200 font-bold px-6 bg-blue-600 rounded-lg mx-auto"
                        onClick ={()=> setvalue(0)}>Reset</button>
                <button className=" text-2xl text-gray-200 font-bold px-6 bg-blue-600 rounded-lg mx-auto"
                        onClick ={()=> setvalue(value -1)}>Decrease</button>
            </div>
            <br></br>
            <br></br>
            <h2 className ="text-center text-6xl py-4 font-bold">Complex Counter Game</h2>
            <h1 className ="text-center text-5xl py-4 font-bold">{value}</h1>
            <div className="flex justify-center">
                <button className=" text-2xl text-gray-200 font-bold px-6 bg-blue-600 rounded-lg mx-auto" 
                        onClick ={complexIncrease}>Increase</button>
                <button className=" text-2xl text-gray-200 font-bold px-6 bg-blue-600 rounded-lg mx-auto"
                        onClick ={()=> setvalue(0)}>Reset</button>
                <button className=" text-2xl text-gray-200 font-bold px-6 bg-blue-600 rounded-lg mx-auto"
                        onClick ={()=> setvalue(value -1)}>Decrease</button>
            </div>
        </section>
    </>
}

export default Usestatecounter
