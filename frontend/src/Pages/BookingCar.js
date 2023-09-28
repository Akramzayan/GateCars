import React, { useEffect, useState } from 'react'
import DefaultLayout from '../Components/DefaultLayout'
import { useDispatch, useSelector } from 'react-redux'
import { getCar } from '../features/cars/carsSlice'
import Spinner from '../Components/Spinner'
import { Col, Row,Divider,DatePicker, Checkbox } from 'antd'
import { useParams } from 'react-router-dom'
import moment from 'moment'


const {RangePicker} = DatePicker


function BookingCar(params) {
  const {singleCar, isLoading} = useSelector((state) => state.cars) 
  const dispatch=useDispatch()
  const  {carid}  = useParams()
  useEffect(() => {
    dispatch(getCar(carid))
  },[])


  const [from,setFrom] =useState()
  const[to,setTo] = useState()
  const[totalHours,setTotalHours] = useState(0)
  const [driver,setDriver] =useState(false)
  const[totalAmount,setTotalAmount] = useState(0)
  

  function selectTimesSlots(values) {
   setFrom(moment(values[0]).format(' DD MM YYYY HH:mm'))
    setTo(moment(values[1]).format(' DD MM YYYY HH:mm'))
    setTotalHours((values[1]).diff(values[0],'hours'))
  }

  useEffect(() => {
    setTotalAmount(singleCar && ((totalHours * singleCar.RentPerHour ) + (driver && (totalHours*30))))    
}, [driver,totalHours]);


  return (
    <DefaultLayout>
      {isLoading &&(<Spinner/>)}
      <Row justify={'center'} className='d-flex align-items-center' style={{minHeight:'90vh'}}>
            {singleCar && <img src={singleCar.image} className='car-img2 bs1'  />}
        <Col lg={10} sm={24} xs={24}>
            <Divider type='horizontal'  dashed  style={{color:'aqua', fontSize:'70px'}}> Car info</Divider>
            <div style={{textAlign:'right'}}>
            {/* <h1>Car name={params.carId} </h1>  */}
              {singleCar && (
                <>
                  <p className='car-info'> car name : {singleCar.name} </p>
                  <p className='car-info'> Car Price: {singleCar.price}  </p>
                  <p className='car-info'>Fuel Type: {singleCar.fuelType}</p>
                  <p className='car-info'>Rent Per Hour: {singleCar.RentPerHour}</p>
                  {/* {singleCar. <img src={singleCar.image} className='car-img' />} */}
                  
                </>
                )         
              }
            </div>
            <Divider type='horizontal'  dashed style={{fontWeight:'bold',color:'green'}}> Select Time Slots </Divider>
            <RangePicker showTime={{format:'HH:mm'}} format={'DD MM YYYY HH:mm'} onChange={selectTimesSlots}/>
           {singleCar &&<div>
           <p className='time-slots'>Total Hours : {totalHours}</p>
           <p className='time-slots'>Rent Per Hour : <b> {singleCar.RentPerHour}</b></p>
           <Checkbox onChange={(e) => {
            if(e.target.checked){
              setDriver(true)
            }
            else {
              setDriver(false)
            }

           }}> Driver Required</Checkbox>
           <h2 className='time-slots'>Total Amount : {totalAmount}</h2>
           <button className='btn1'>Book Now</button>
           </div>}
        </Col>
      </Row>
      
     

    </DefaultLayout>
  )
}

export default BookingCar
