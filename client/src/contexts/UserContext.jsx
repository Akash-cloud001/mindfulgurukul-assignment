import React, { useState, useEffect, createContext } from 'react'

const UserContext = createContext();


const UserProvider = ({children})=>{
    const [userData, setUserData] = useState([]);
    useEffect(()=>{
        async function populateDashboard(){
            const req = await fetch("http://localhost:5000/api/data", {
                method:'GET',
                headers:{
                    'x-access-token': localStorage.getItem('token'),
                }
            })
            const data = await req.json();
            console.log(data.data); //promise
            setUserData(data.data);
        }
        populateDashboard();
    },[])
    
    
    return(
        <UserContext.Provider value={{userData, setUserData}}>
            {children}
        </UserContext.Provider>
    )
}

export {UserProvider, UserContext};