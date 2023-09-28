import React from 'react';
import './App.css';
import {Route,BrowserRouter,Routes} from 'react-router-dom'
import Home from './Pages/Home';
import BookingCar from './Pages/BookingCar';
import Signup2 from './Pages/Signup2';
import Login2 from './Pages/Login2';
import Admin from './Pages/Admin';
import NoAccess from './Pages/NoAccess';
import Notfound from './Pages/Notfound';
import PrivateRouter from './Components/PrivateRouter';
import AdminRouter from './Components/AdminRouter';
import ForceRedirect from './Components/ForceRedirect';
import { useSelector } from 'react-redux';
import About from './Pages/About';

import Contact from './Pages/Contact';

//import Redirect from 'react'

function App() {

  const {user: session} = useSelector((state) => state.auth)
  const user = {
    isConnected : session && true,
    role: session && session.role
  }
  return (
    <div className="App">
  <BrowserRouter>
    <Routes>
    <Route exact path='/' element={
     <PrivateRouter user={user} >
      <Home/>
     </PrivateRouter>
    }/>
    {/* <Route path='/signup'element={Signup}/> */}
    {/* <Route path='/login' element={Login}/> */}
    <Route exact path='/booking/:carid' element={<BookingCar/>}/>
   
    <Route exact path='/login' element={
    <ForceRedirect user={user} >
      <Login2/>
    </ForceRedirect>
    }/>
    <Route exact path='/signup' element={
      <ForceRedirect user={user} >
        <Signup2/>
      </ForceRedirect>
    }/>
    <Route exact path='/admin' element={
      <AdminRouter user={user} >
        <Admin />
      </AdminRouter>
    }/>

    <Route path='*' element={<Notfound/>}/>
    <Route path='/noaccess' element={<NoAccess/>}/>
    <Route  exact path='/About' element={<About/>}/>
    <Route  exact path='/contact' element={<Contact/>}/>



    </Routes>
  </BrowserRouter>

    </div>
  );
}

export default App;
{/*export function protectedRoute(props){
  if(localStorage.getItem('user')){
    return <Route {...props}/>
  }
  else {
   return <Redirect to='/login'/>
  }
}*/}