import React,{useEffect, useState} from 'react'
import { v4 as uuidv4 } from 'uuid';

const UserForm = ({addUser, setAddUser, userData, setUserData}) => {
    const [name,setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState(Number);

    const handleCancel = (e)=>{
        e.preventDefault();
        setName('');
        setEmail('');
        setEmail('');
        setAddUser(false);
    }
    async function handleNewUserData(e){
        e.preventDefault();
        const newUser = {
            name,
            email,
            phone,
            id: uuidv4(),
        }
        if(!userData){
            setUserData([newUser])
        }else{
            setUserData(prev=>[...prev, newUser])
        }
        const res = await fetch("http://localhost:5000/api/data",{
                method:"POST",
                headers:{
                    'x-access-token':localStorage.getItem('token'),
                    'Content-type':'application/json'
                },
                body:JSON.stringify({
                    data: newUser
                })
            });
            const data =await res.json();
        handleCancel(e);
    }

  return (
    <div className='absolute h-custom w-full backdrop-blur-lg flex justify-center items-center z-index inset-0'>
                <button 
                    className=' absolute bottom-4 right-4 w-max h-max px-3 py-1 sm:px-4  sm:py-2 bg-red-500 text-base sm:text-lg rounded-sm '
                    onClick={handleCancel}
                >
                    Cancel
                </button>
        <form className=' h-max w-full sm:w-1/2 md:w-1/3 z-index flex flex-col gap-4 justify-center items-center'>
            <input 
                type="text" 
                placeholder='Name' 
                onChange={e=>setName(e.target.value)} 
                value={name}
                className='input-style h-8 bg-gray-700 text-white '
            />
            <input 
                type="email" 
                placeholder='Email' 
                onChange={e=>setEmail(e.target.value)} 
                value={email}
                className='input-style h-8 bg-gray-700 text-white '
            />
            <input 
                type="tel" 
                placeholder='Number' 
                onChange={e=>setPhone(e.target.value)} 
                value={phone}
                className='input-style h-8 bg-gray-700 text-white '
            />
            <div className='flex w-full justify-evenly'>
                <button 
                    className='w-max h-max px-2 py-1 sm:px-3  sm:py-1 bg-green-500 text-base sm:text-lg rounded-sm '
                    onClick={handleNewUserData} 
                >
                    Save
                </button>
                
            </div>
        </form>
    </div>
)
}

export default UserForm;