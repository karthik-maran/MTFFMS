import { useState } from 'react'
import{Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Registerpage from './pages/RegistrationPage'
import LoginPage from './pages/LoginPage'
import UserHomePage from './pages/UserHomePage'


function App() {
  

  return (
    <>
    <div>
        <Navbar/>
        <Routes>
          <Route path='/' element={<UserHomePage/>}/>
          <Route path='/register' element={<Registerpage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
        
        </Routes>

    </div>
  
    </>
     )
}

export default App
