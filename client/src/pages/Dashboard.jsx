import React, { useEffect } from 'react'
// import jwt from 'jsonwebtoken';
import { useNavigate } from 'react-router-dom';
const Dashboard = () => {
    const navigate = useNavigate();

    async function populateDashboard(){
        const req = await fetch("http://localhost:5000/api/data", {
            headers:{
                'x-access-token': localStorage.getItem('token'),
            }
        })
        const data = req.json();
        console.log(data);
    }
    useEffect(()=>{
        const token = localStorage.getItem('token');
        if(token){           
            populateDashboard();
        }
    },[])


  return (
    <div>Dashboard</div>
  )
}

export default Dashboard