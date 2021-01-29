import React from 'react'

function Controlinputs() {
    const handlesubmit =(e)=>{
        e.preventDefault();
        
        if (firstName && email) {
            const person = {id: new Date().getDate().toString(), firstName:firstName,email:email}
            setPeople( (people)=>{
                return [...people,person];
            });
            setFirstName('')
            setEmail('')
        }else{
            console.log(firstName);
        }
    };

    const [firstName, setFirstName] = React.useState('')
    const [email, setEmail] = React.useState('')

    const [people, setPeople] = React.useState([])
    

    return (
        <>
            <article>
                <form className="flex bg-blue-300 justify-center px-4 py-5" 
                      onSubmit={handlesubmit}>
                          
                    <div className="bg-indigo-50 px-4 py-4 rounded-xl">
                        <div className="grid py-4 grid-cols-3 gap-4 pr-3">
                            <label className="text-lg px-4 font-bold">Enter Name :</label>
                            <input className="text-gray-700 rounded-lg col-span-2" 
                                       value={firstName}
                                       type="text"
                                       name="firstname"
                                       onChange={(e)=>setFirstName(e.target.value)}
                                       />
                            <label className="text-lg px-4 font-bold">Enter Email :</label>
                            <input className="text-gray-700 rounded-lg col-span-2"
                                       value={email}
                                       type="email"
                                       name="email"
                                       onChange={(e)=>setEmail(e.target.value)}
                                       />
                        </div>    
                        <button className="btn-cus bg-black flex place-items-center">Add Person</button>
                    </div>                
                </form>
                {
                    people.map((person,index)=>{
                        const {id,firstName,email} = person
                        return <div key={id}>
                            <h1>{firstName}</h1>
                            <p>{email}</p>
                        </div>
                    })
                }
            </article>
        </>
    )
}

export default Controlinputs;
