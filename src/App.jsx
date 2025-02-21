import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import { useEffect } from 'react'
import './App.css'
import Signup from './components/Signup'

function App() {
  const [user, setUser] = useState(null);
  console.log(user);



  return (
    <>
      <Router>
        <Navbar user={user} />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        </Routes>



      </Router>

      
    </>
  )
}

export default App
