import React,{useContext, useState} from 'react';
import ViewDetails from './ViewDetails';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';

const UserInfo = ({name,email,phone,id}) => {
    const [toggle, setToggle] = useState(false);
    const {userData, handleUserUpdate} = useContext(UserContext);

    
    const handleDelete = async ()=>{
        const user = userData?.filter(ele=>ele.id !== id);
        const res = await handleUserUpdate(user);        
        navigate(0);
    }
    const handleDeleteDialog = ()=>{
        setToggle(!toggle);
    }
  return (
    <>
        <div className='m-auto border bg-gray-900 h-max w-max min-w-60 px-4 py-4' key={id}>
            <div>
                <p>
                    Name: {name}
                </p>
                <p>
                    Email: {email}
                </p>
                <p>
                    Phone: {phone}
                </p>
            </div>
            <div className='flex justify-between mt-4'>
                <NavLink to={`/user/${id}`} className='h-max w-max px-2 py-1 bg-blue-500 text-white rounded-sm'>
                        View Details
                </NavLink>
                <button className='h-max w-max px-2 py-1 bg-red-500 text-white rounded-sm' onClick={handleDeleteDialog}>
                        Delete
                </button>
            </div>
            {toggle && <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 dialog bg-white h-max w-60 px-4 py-2 z-50 border border-gray-500 '>
                <p className='font-base text-gray-600 font-bold '>
                    Are you sure you want to delete this record?
                </p>
                <div className='w-full mt-2 flex justify-evenly'>
                    <button 
                        className='w-max h-max px-2 py-1  bg-red-500 text-sm rounded-sm '
                        onClick={handleDelete}
                    >
                        Yes
                    </button>
                    <button 
                        className='w-max h-max px-2 py-1  bg-transparent border border-green-600 text-green-500 text-sm rounded-sm '
                        onClick={handleDeleteDialog}
                    >
                        No
                    </button>
                </div>
            </div>}
        </div>    
    </>
  )
}

export default UserInfo;