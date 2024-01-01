import React, { useState, useEffect, createContext } from 'react'

const UserContext = createContext();


const UserProvider = ({children})=>{
    const [userData, setUserData] = useState([]);

    async function handleUserUpdate(newDataSet){
        setUserData(newDataSet);
        localStorage.setItem('user-data', JSON.stringify(newDataSet));
        const res = await fetch('https://mindful-gurukul-backend-toow.onrender.com/api/user/update/',{
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

// store the data in localStorage along with the token use this localStorage & use it to implement the the search functionality of the application
    useEffect(()=>{
        async function populateDashboard(){
            const req = await fetch("https://mindful-gurukul-backend-toow.onrender.com/api/data", {
                method:'GET',
                headers:{
                    'x-access-token': localStorage.getItem('token'),
                }
            })
            const data = await req.json();
            setUserData(data.data);
            localStorage.setItem(`user-data`,JSON.stringify(data.data))
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