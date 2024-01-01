import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import ViewDetails from './pages/ViewDetails'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/dashboard/:user' element={<Dashboard />}/>
        <Route path='/user/:userId' element={<ViewDetails />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
