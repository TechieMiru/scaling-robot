import React from 'react'

const URL = "https://api.github.com/users"

function UseeffectFetch() {
    const [users, setUsers] = React.useState([])

    const GetUers = async() => {
        const res = await fetch(URL);
        const users = await res.json();
        setUsers(users) 
        console.log(users);
    }

    React.useEffect(() => {
        GetUers();
    }, [])

    return (
        <div>
            <h2>Github Users</h2>
            <ul className="px-6 py-4">
                {users.map((user)=>{
                    const {id,login,avatar_url,html_url} = user
                return <li key={id}>
                    <img className="max-w-sm rounded overflow-hidden shadow-lg" src={avatar_url} alt={"Not uploaded"} srcset=""/>
                    <div>
                        <h4>{login}</h4>
                        <a href={html_url}>Profile</a>
                    </div>
                </li>
            })}
            </ul>
        </div>
    )
}

export default UseeffectFetch
