import React from 'react';
import ViewDetails from './ViewDetails';
import { NavLink } from 'react-router-dom';

const UserInfo = ({name,email,phone,id}) => {
    
  return (
    <div className='m-auto border bg-gray-900 h-max w-max min-w-60 px-4 py-4 backdrop-blur-sm' key={id}>
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
            <button className='h-max w-max px-2 py-1 bg-red-500 text-white rounded-sm'>
                    Delete
            </button>
        </div>
    </div>    
  )
}

export default UserInfo;