import React, { useState } from 'react'

const Navbar = () => {
    const [query, setQuery] = useState('');
    const handleSearch = (e)=>{
        e.preventDefault();
        console.log('ye')
    }
  return (
    <div className='h-12 w-full flex items-center justify-between px-4 bg-blue-600'>
        <h3 className='font-bold '>LOGO</h3>

        {/* Need to show the form if only user is logged in */}
        <form 
        onSubmit={handleSearch} 
        action="" 
        className='w-4/6 sm:w-1/3 flex items-end justify-end gap-2'
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
    </div>
  )
}

export default Navbar