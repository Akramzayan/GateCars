import React from 'react'
import { Link } from 'react-router-dom'

function Admin({user}) {
  return (
    <div style={{overflow:'hidden'}}>
    <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{display:'flex', alignItems:'center', justifyContent:'flex-end'}}>
            <div className="d-flex">
              <div className="mx-4">
                <Link className="btn btn-outline-primary" to="/login">Logout</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="">
        <div className="row justify-content-evenly mt-4">
           <div className="col-lg-12 col-md-12 mt-4">
               <div className="d-flex gap-5 align-items-center">
                <div className='d-flex gap-2 align-items-center'>
                <i className="fa-solid fa-user fs-1 mx-2"></i> 
                <h2>Profiles list</h2>
                </div>
                <h1 style={{color:'red'}}>ADMIN</h1>
               </div>
               <div className="shadow-lg p-3 mb-5 bg-body rounded" style={{backgroundColor: "white"}}>
                <table className="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">name</th>
                        <th scope="col">email</th>
                        <th scope="col">Role</th>
                        <th scope="col">telephone</th>
                        <th scope="col">city</th>
                        <th scope="col">country</th>
                        <th scope="col">Car Booked</th>
                      
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>{}</th>
                        <td>Akram@gmail.com</td>
                        <td>ADMIN</td>
                        <td>56666666</td>
                        <td>Sousse</td>
                        <td>tunisia</td>
                        <td> Bmw</td>
                      
                       
                        <td><button className="btn btn-outline-danger">Delete</button></td>
                      </tr>
                    </tbody>
                  </table>
            </div>
           </div>
       </div>
   </div>
   </div>
  )
}

export default Admin