import React, { useState } from 'react'
import { NavLink, useNavigate,  } from 'react-router-dom';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    async function handleUserLogin(event){
        event.preventDefault();
        const res = await fetch("http://localhost:5000/api/signin", {
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body: JSON.stringify({
                email,
                password,
              })
        })
        const data = await res.json();
        if(data.user){
            localStorage.setItem('token', data.user);
            alert('Login Successful');
            navigate(`/dashboard/${data.user}`);
        }else{
            alert('Please check your credentials')
        }
    }


  return (
    <>
    <form 
        onSubmit={handleUserLogin} 
        className='w-full sm:w-full height-dvh flex flex-col items-center justify-center gap-4 px-4'
        >   
        <header className='text-xl mb-4'>Sign In</header>
        <div className='input-container'>
            <label htmlFor="name">Username</label>
            <input 
            type="email" 
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className='input-style' 
            />
        </div>
        <div className='input-container'>
            <label htmlFor="name">Password</label>
            <input 
            type="password" 
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className='input-style' 
            />
        </div>
        <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/3 gap-2 flex items-center justify-around mt-4'>
            <button className='btn bg-blue-600 '>
                Log in
            </button>
            <NavLink to={'/signup'} type='submit' className='btn bg-white text-blue-600'>
                Create account
            </NavLink>
            
        </div>
    </form>
    </>
    
  )
}

export default Login;