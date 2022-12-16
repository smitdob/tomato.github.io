import React from 'react'
import './Error.css'
import { Link } from 'react-router-dom'
const Error = ({setActiveTab}) => {
  const setstate = ()=>{
    setActiveTab('dilevery')
  }
  return (
    <>
         <div className='empty-cart m-5'>
            <div className="container-md">
              <img className='error-img' src="https://img.freepik.com/free-vector/error-404-concept-illustration_114360-1811.jpg?w=2000" alt=""/>
              <div className='mt-4'>
                <Link to='/dilevery' className='empty-cart-back-to-home text-decoration-none text-dark' onClick={()=>setstate()}>Back to Home</Link>
              </div>
            </div>
          </div>
    </>
    )
}

export default Error