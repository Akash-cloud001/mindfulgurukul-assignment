import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const [query, setQuery] = useState('');
    const handleSearch = (e)=>{
        e.preventDefault();
        console.log('ye')
    }
    const handleLogOut = (e)=>{
        e.preventDefault();
        localStorage.clear();
        navigate('/');
    }
  return (
    <div className='h-12 w-full flex items-center justify-between px-2 overflow-hidden bg-blue-600'>
        <h3 className='font-bold '>LOGO</h3>

        {/* Need to show the form if only user is logged in */}
        {localStorage.getItem('token') !== null &&
        <>
            <form 
            onSubmit={handleSearch} 
            action="" 
            className='w-4/6 sm:w-1/3 flex items-center justify-center gap-2'
            >
                <input 
                type="text" 
                placeholder='Search'
                onChange={(e)=>setQuery(e.target.value)}
                className='bg-white h-1/2 w-1/2 text-base px-4 py-1 text-gray-700 rounded-sm' 
                />
                <button type='submit'>
                <span className="material-symbols-outlined">
                    search
                </span>
                </button>
            </form>
            <button className='h-max w-max px-2 py-1 bg-red-500 text-white rounded-sm' onClick={handleLogOut}>
                Logout
            </button>
        </>
        
        }
    </div>
  )
}

export default Navbar