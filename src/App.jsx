import { useEffect, useState } from 'react'
import Navbar from './component/Navber/Navbar'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Login from './component/Login/Login'
import Register from './component/Register/Register'
import Home from './component/Home/Home'
import PageNotFound from './component/PageNotFound/PageNotFound'
import Content from './component/Content/Content'
import Profile from './component/Profile/Profile'
import { jwtDecode } from 'jwt-decode'
import ProtectedRoutes from './component/ProtectedRoutes/ProtectedRoutes'

export default function App() {
  // this code :localStorage.getItem("userToken")?true:false 
  //mean : if the userToken is found in the login set the isLogin true else set false 
  const [isLogin,setIsLogin]=useState(localStorage.getItem("userToken")?true:false);
  const navigate=useNavigate();
  const [userData,setUserData]=useState({}); // this variable to store the 

  useEffect(()=>{
    const token = localStorage.getItem("userToken");
    if(token){
      setIsLogin(true);
      const decode = jwtDecode(token);
      // console.log(decode);
      setUserData(decode);
    }

  },[])

  const handelLogout=()=>{
    localStorage.removeItem("userToken");
    setIsLogin(false);
    setUserData({});
    navigate('/login');
    // console.log("aaa");
    // console.log(localStorage.getItem("userToken"),isLogin)
  }
  return (
    <>
    <Navbar isLogin={isLogin} handelLogout={handelLogout} userName={userData.userName}/>
    <Routes>
      <Route path='/'  element={<Home/>}/>
      <Route path='/login'  element={<Login setIsLogin={setIsLogin} setUserData={setUserData}/> }/>
      <Route path='/register'  element={<Register/>}/>
      <Route element={<ProtectedRoutes userData={userData}/>}>
        <Route path='/content' element={<Content/>}/>
        <Route path='/profile' element={<Profile userData={userData}/>}/>
      </Route>

      <Route path='/*'  element={<PageNotFound/>}/>
    </Routes>
    
    {/* {isLogin?<h1>Login true{userData.userName}</h1>:<h1>Login False{userData.userName}</h1>} */}
    </>
  )
}
