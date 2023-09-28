import React, { useEffect } from 'react'
import DefaultLayout from '../Components/DefaultLayout'
import {useSelector,useDispatch} from 'react-redux'
import { getCars } from '../features/cars/carsSlice'
import { Row, Col } from 'antd'
import Spinner from '../Components/Spinner.js'
import { Link } from 'react-router-dom'


function Home() {
const {cars, isLoading} = useSelector((state) => state.cars)
const dispatch=useDispatch()
const getAllCars = () => {
  dispatch(getCars()) 
}
useEffect(()=> {
  getAllCars();
},[] )


  return (    
<DefaultLayout>
<Row justify={'center'} gutter={16} className='mt-5'>
{isLoading && (<div style={{ marginTop: "200px"}}><Spinner /></div>)}
{cars.map((car,index) =>{
  return(
    <Col key={index} lg={5}sm={24} xs={24}>
    <Link style={{textDecoration:'none'}} to={`/booking/${car._id}`}>
    <div className='car p-2 bs1 '>
   {car.image && <img src={car.image} className='car-img' alt='' />}
   <div className='car-content flex align-items-center gap-3'>
  <div>
    <p style={{fontSize:'30px',alignItems:'center',fontFamily:'fantasy',boxShadow:'revert-layer' ,color:'#6AB1FF'}}>{car.name}</p>
  </div>
   </div>
   
    </div>
    </Link>
  </Col>
  )
})}
</Row>

  {/*<div>
    {cars?.map((car)=> (
      <h1> {car.name}</h1>
    ))}
  </div>*/}

</DefaultLayout>
    
  )
}

export default Home
