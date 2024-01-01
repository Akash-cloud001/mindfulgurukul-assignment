import React, { useState, useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';

const ViewDetails = () => {
    const navigate = useNavigate();
    const {userId} = useParams();
    const {userData, setUserData} = useContext(UserContext);
    const user = userData?.filter(ele=>ele.id == userId);
    console.log(user)

    const [name,setName] = useState(user[0]['name']);
    const [email, setEmail] = useState(user[0]['email']);
    const [phone, setPhone] = useState(user[0]['phone']);
    const [toggle, setToggle] = useState(true)

    const handleSave = async (e)=>{
        e.preventDefault();
        const res = await fetch('http://localhost:5000/api/user/update/',{
            method:"POST",
            headers:{
                'x-access-token': localStorage.getItem('token')
            },
            body: JSON.stringify({
                name,
                email,
                phone,
                userId
            })
        });
        const data = await res.json();
        console.log(data);
    }

  return (
    <div className='h-custom w-full flex justify-start items-center flex-col py-6 gap-6'>
        <h2 className='text-xl font-bold '>User Details</h2>
      
        <div className='input-container'>
            <label htmlFor="name">Name:</label>
            <input type="text" value={name} disabled={toggle} onChange={e=>setName(e.target.value)} className='input-style disabled:bg-gray-400'/>
        </div>
        <div className='input-container'>
            <label htmlFor="email">Email:</label>
            <input type="email" value={email} disabled={toggle} onChange={e=>setEmail(e.target.value)} className='input-style disabled:bg-gray-400'/>
        </div>
        <div className='input-container'>
            <label htmlFor="phone">Phone:</label>
            <input type="tel" value={phone} disabled={toggle} onChange={e=>setPhone(e.target.value)} className='input-style disabled:bg-gray-400'/>
        </div>

        <div className='input-container justify-evenly'>
            <button className='h-max w-max px-2 py-1 bg-blue-500 text-white rounded-sm ' onClick={()=>setToggle(!toggle)}>
                Edit
            </button>
            <button className='h-max w-max px-2 py-1 bg-green-500 text-white rounded-sm' onClick={(e)=>handleSave(e)}>
                Save
            </button>
            <button className='h-max w-max px-2 py-1 bg-red-500 text-white rounded-sm' onClick={()=>{navigate(-1)}}>
                Cancel
            </button>
        </div>
    </div>
  )
}

export default ViewDetails;