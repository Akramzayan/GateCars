import {Link} from 'react-router-dom'
import React, {  useState } from 'react'
import { useSelector } from 'react-redux'
function DefaultLayout(props) {
  const {user} = useSelector((state) => state.auth)
  const logout = () => {
    localStorage.clear()
    window.location.reload()
  }
  return ( 
    <div >
      
      <div className="header bs1" >
          <div style={{paddingRight:'10px'}} className="d-flex justify-content-between">
           <Link to={'/'}><h1 className='Gate'> GateCars</h1></Link> 
            <div className="container">
              <Link to={'/'} className='menuItem'>Home</Link>
              <Link to={'/about'} className='menuItem'> About</Link>
              <Link to={'/contact'} className='menuItem' > Contact</Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      {user && <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">  <span class="navbar-toggler-icon" className='Gate' >{user.username}</span></a>}
    <ul style={{backgroundColor:'skyblue'}} class="dropdown-menu">
 
      <span onClick={logout} class="dropdown-item">Logout</span>
    </ul>   
    </button>  
      </div>
      
          </div>
      </div>
      <div className="content">
      {props.children}
      </div>
    </div>
  )
}
export default DefaultLayout
