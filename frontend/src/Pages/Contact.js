import React from 'react'
import DefaultLayout from '../Components/DefaultLayout'


function Contact() {
  return (
    <DefaultLayout>
      <div className="contact-container">
      <h2 className='contact-title'>Contact Us</h2>
      <div className="contact-info">
        <div className="contact-details">
          <h3 className='contact-headers' >Address</h3>
          <p  style={{fontSize:'20px',fontFamily:'cursive'}}>123 Car Street</p>
          <p style={{fontSize:'20px',fontFamily:'cursive'}}> City, State, ZIP</p>
        </div>
        <div className="contact-details">
          <h3 className='contact-headers' >Email</h3>
          <p style={{fontSize:'20px',fontFamily:'cursive'}}>info@GateCars.com</p>
        </div>
        <div className="contact-details">
          <h3 className='contact-headers'>Phone</h3>
          <p style={{fontSize:'20px',fontFamily:'cursive'}}>123-456-7890</p>
        </div>
      </div>
      <div className="contact-form">
        <h3 className='contact-headers'>Contact Form</h3>
        <form>
          <div className="form-group">
            <label htmlFor="name" className='Contact-Inputs'>Name</label>
            <input style={{ color: "#428ED6"}} type="text" id="name" name="name" required />
          </div>
          <div className="form-group" style={{fontSize:'20px',fontFamily:'cursive'}}>
            <label htmlFor="email" className='Contact-Inputs'>Email</label>
            <input style={{color:'#428ED6'}} type="email" id="email" name="email" required />
          </div>
          <div className="form-group"   style={{fontSize:'20px',fontFamily:'cursive'}}>
            <label htmlFor="message" className='Contact-Inputs'>Phone</label>
            <textarea style={{color:'#428ED6'}} id="message" name="message" rows="4" required />
          </div>
          <div className="form-group"  style={{fontSize:'20px',fontFamily:'cursive'}}>
            <label htmlFor="message" className='Contact-Inputs'>City</label>
            <textarea style={{color:'#428ED6'}} id="message" name="message" rows="4" required />
          </div>
          <div className="form-group"  style={{fontSize:'20px',fontFamily:'cursive'}}>
            <label htmlFor="message" className='Contact-Inputs'>Country</label>
            <textarea style={{color:'#428ED6'}} id="message" name="message" rows="4" required />
          </div>
          <div className="form-group"  style={{fontSize:'20px',fontFamily:'cursive'}}>
            <label htmlFor="message" className='Contact-Inputs' >Message</label>
            <textarea style={{color:'#428ED6'}} id="message" name="message" rows="4" required />
          </div>
          <button type="submit">Submit</button>
        </form>
        
      </div>
    </div>
    </DefaultLayout>
        
  )
}

export default Contact
