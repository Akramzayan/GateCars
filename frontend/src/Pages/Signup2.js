import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Inputs from '../Components/Inputs'
import { useDispatch, useSelector } from 'react-redux'
import { signUpUser } from '../features/auth/authSlice'

function Signup2() {
  const [user,setUser]= useState({})
  const  dispatch  = useDispatch()
  const {isSuccess, errorData} = useSelector((state) => state.auth)
  const navigate = useNavigate()
  console.log(errorData)

  const onChangeHandler =(e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })

  }
  const onSubmit =(e)=> {
    e.preventDefault();
    dispatch(signUpUser(user))
  }
  useEffect(() => {
    if(isSuccess){
      navigate('/login')
    }
  }, [isSuccess])
  return (
    <div style={{overflow:"hidden"}}>
    <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{display:'flex', alignItems:'center', justifyContent:'flex-end'}}>
            <div className="d-flex" >
              <div className="mx-4" style={{display:'flex',gap:'10px'}}>
                <Link className="btn btn-outline-primary" to="/login">Login</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    <div className="">
         <div className="row justify-content-evenly mt-4">
            <div className="col-lg-6 col-md-12 mt-4">
                <div className="d-flex">
                    <i className="fa-solid fa-right-to-bracket fs-1 mx-2"></i> <h2>Signup</h2>
                </div>
                <div className="p-6 shadow-lg p-3 mb-5 bg-body rounded" style={{backgroundColor: "white"}}>
                    <form onSubmit={onSubmit}>
                      <Inputs name="username" label="Username" type="text" icon="fa-solid fa-user" onChangeHandler={onChangeHandler}/>
                      <Inputs name="email" label="Email" type="text" icon="fa-solid fa-at" onChangeHandler={onChangeHandler}/>
                      <Inputs name="password" label="Password" type="password" icon="fa-solid fa-key" onChangeHandler={onChangeHandler}/>
                      <Inputs name="confirm" label="Confirm password" type="password" icon="fa-solid fa-key" onChangeHandler={onChangeHandler}/>
                          <div className="d-flex justify-content-between">
                            <button type="submit" className="btn btn-outline-primary">Signup <i className="fa-solid fa-floppy-disk"></i></button>
                        </div>                      
                            {errorData && Object.values(errorData).map((err) => (
                              <div style={{color:"red", fontSize:"12px"}}>
                                {err}
                              </div>
                            ))}
                    </form>
             </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Signup2
