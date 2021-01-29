import React from 'react'


const URL = 'https://api.github.com/users/QuincyLarson';
function Conditional_rendering() {
    const [isloading, IssetLoading] = React.useState(false);
    const [isError, setIsError] = React.useState(false);

    const [user, setUser] = React.useState('initialState');

    React.useEffect(() => {
        IssetLoading(true);
        fetch(URL)
            .then((res)=> {
                if (res.status === 200) {
                    return res.json()
                }else{
                   IssetLoading(false);
                   setIsError(true);
                   throw new Error(res.statusText);

                }
            })
            .then((user)=>{
                const {id} = user;
                setUser(id  );
                IssetLoading(false);
            })
            .catch((err)=>console.log(err))
        return () => {
            
        }
    }, [])

    if (isloading) {
        return (
            <div>
                loading . . .
            </div>
        );
    }
    if (isError) {
        return (
            <div>
                Error . . .
            </div>
        );
    }
    if (user) {
        return (
            <div>
                <h1>{user}</h1>
            </div>
        );
    }

    return 'Multiple returns';

       
}

export default Conditional_rendering
