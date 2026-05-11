import { useState,useEffect } from 'react'
import{Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Registerpage from './pages/RegistrationPage'
import LoginPage from './pages/LoginPage'
import UserHomePage from './pages/UserHomePage'
import UserContext from '../UserContext'


function App() {
  const[organizationName,setOrganizationName] = useState("")
  const[user,setUser] = useState({name:"",isAuth:false})
    useEffect(() => {
    setOrganizationName(localStorage.getItem("orgName"))
    
    setUser({
      name: localStorage.getItem("User") || "",
      isAuth: !!localStorage.getItem("userToken"),
    });
  }, []);
  return (
    <>
    <div>
      <UserContext.Provider value={{organizationName,setOrganizationName,user,setUser}}>
        <Navbar/>
        <Routes>
          <Route path='/' element={<UserHomePage/>}/>
          <Route path='/register' element={<Registerpage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
        
        </Routes>
        </UserContext.Provider>

    </div>
  
    </>
     )
}

export default App
