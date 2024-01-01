import React, { useState, useEffect, createContext } from 'react'

const UserContext = createContext();


const UserProvider = ({children})=>{
    const [userData, setUserData] = useState([]);

    async function handleUserUpdate(newDataSet){
        setUserData(newDataSet);
        const res = await fetch('http://localhost:5000/api/user/update/',{
            method:"POST",
            headers:{
                'x-access-token': localStorage.getItem('token'),
                'Content-type':'application/json'
            },
            body: JSON.stringify({
                data:newDataSet
            })
        });
        const data = await res.json();
        return data;
    }


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
        <UserContext.Provider value={{userData, setUserData, handleUserUpdate}}>
            {children}
        </UserContext.Provider>
    )
}

export {UserProvider, UserContext};