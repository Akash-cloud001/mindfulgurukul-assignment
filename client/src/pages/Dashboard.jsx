import React, { Suspense, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import UserInfo from './UserInfo';
import UserForm from './userForm';
import Error from './Error';
import { UserContext } from '../contexts/UserContext';
const Dashboard = () => {
    const navigate = useNavigate();
    const [addUser, setAddUser] = useState(false);
    const {userData, setUserData} = useContext(UserContext);
    console.log(userData)
    const handleAddUser = ()=>{
        setAddUser(true);
    }
    
  return (
      <div className='relative h-custom w-full'>
            <header className='py-4 text-center text-2xl font-bold underline underline-offset-8'>User Cards</header>
            
            {!userData && <Error/>}

            {userData && <div className='h-max w-full px-4 py-4 grid grid-cols-1 gap-y-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-col-4'>
                {
                    userData?.map((user)=>{
                        return <UserInfo name = {user.name} email={user.email} phone={user.phone} key={user.id} id={user.id}/>
                    })
                }
            </div>}
            {
                addUser &&
                <UserForm 
                    addUser={addUser} 
                    setAddUser={setAddUser} 
                    userData={userData}
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