import React, { useEffect, useState } from 'react'
// import jwt from 'jsonwebtoken';
import { useNavigate } from 'react-router-dom';
import dataNotFound from '../assets/dataNotFound.jpg';
import UserInfo from './UserInfo';
import UserForm from './userForm';
const Dashboard = () => {
    const navigate = useNavigate();
    const [addUser, setAddUser] = useState(false);
    const [userData, setUserData] = useState([]);

    const handleAddUser = ()=>{
        setAddUser(true);
    }


    async function populateDashboard(){
        const req = await fetch("http://localhost:5000/api/data", {
            headers:{
                'x-access-token': localStorage.getItem('token'),
            }
        })
        const data = req.json();
        setUserData(data.data);
        console.log(userData);
    }

    async function populateDatabase(){
        // TODO
    }

    useEffect(()=>{
        const token = localStorage.getItem('token');
        if(token){           
            populateDashboard();
        }
    },[])


  return (
    <div className='relative h-custom w-full'>
        <header className='py-4 text-center text-2xl font-bold underline underline-offset-8'>User Cards</header>
        {!userData && 
            <img src={dataNotFound} alt='data not found' className='absolute w-4/6 sm:w-1/2 md:w-1/3 aspect-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
        }
        {
         userData && 
         <div className='h-max w-full px-4 py-4'>
           <UserInfo userData={userData}/>
        </div>
        }
        {
            addUser &&
            <UserForm 
                addUser={addUser} 
                setAddUser={setAddUser} 
                userData = {userData}
                setUserData={setUserData}
            />
        }
        {!addUser && <button
            onClick={handleAddUser} 
            className='fixed bottom-4 right-4 w-max h-max px-3 py-1 sm:px-4  sm:py-2 bg-green-500 text-base sm:text-lg rounded-sm z-index'
        >
            Add User
        </button>}
    </div>
  )
}

export default Dashboard