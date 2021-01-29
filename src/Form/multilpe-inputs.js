import React  from 'react'



function Multiple() {

    //const [firstName, setFirstName] = React.useState('')
    //const [email, setEmail] = React.useState('')

    const [person, setPerson] = React.useState({
        firstName:'',email:''
    });

    const [people, setPeople] = React.useState([]);
    const handleChange =(e)=>{
        const name = e.target.name
        const value = e.target.value
        setPerson({ ...person, [name]:value});
    };
    const handleSubmit =(e)=>{
        e.preventDefault();
        if (person.firstName && person.email) {
             const newPerson = { ...person, id: new Date().getTime().toString() };
                setPeople([...people, newPerson]);
                setPerson({ firstName: '', email: ''});
        }
    };


    return (
        <div>
             <article>
                <form className="flex bg-blue-300 justify-center px-4 py-5" 
                      onSubmit={handleSubmit}>
                          
                    <div className="bg-indigo-50 px-4 py-4 rounded-xl">
                        <div className="grid py-4 grid-cols-3 gap-4 pr-3">
                            <label className="text-lg px-4 font-bold">Enter Name :</label>
                            <input className="text-gray-700 rounded-lg col-span-2" 
                                        type='text'
                                        id='firstName'
                                        name='firstName'
                                        value={person.firstName}
                                        onChange={handleChange}
                                       />
                            <label className="text-lg px-4 font-bold">Enter Email :</label>
                            <input className="text-gray-700 rounded-lg col-span-2"
                                        type='email'
                                        id='email'
                                        name='email'
                                        value={person.email}
                                        onChange={handleChange}
                                       />
                        </div>    
                        <button 
                            className="btn-cus bg-black flex place-items-center"
                            type="submit"
                            onClick={handleSubmit}
                        >Add Person</button>
                    </div>                
                </form>
                {
                    people.map((person)=>{
                        const {id,firstName,email} = person
                        return <div key={id}>
                            <h1>{firstName}</h1>
                            <p>{email}</p>
                        </div>
                    })
                }
            </article>
        </div>
    )
}

export default Multiple