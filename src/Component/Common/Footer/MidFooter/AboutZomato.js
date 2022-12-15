import React from 'react'
import '../Footer.css'
const AboutZomato = ({Aboutzomato}) => {
  const Name = Aboutzomato?.nameLink ?? '';
  const firstLink = Aboutzomato?.firstLink ?? '';
  const secondLink = Aboutzomato?.secondLink ?? ''; 
  const thirdLink = Aboutzomato?.thirdLink ?? '';
  const forthLink = Aboutzomato?.forthLink ?? '';
  const fifthLink = Aboutzomato?.fifthLink ?? '';
  const sixthLink = Aboutzomato?.sixthLink ?? '';
  return (
   <>
   <div className='about-zomato mid-footer-div'>
      <h3 className='mid-footer-title'>{Name}</h3>
      <div className="mid-footer-link-wrapper">
        <p className='footer-content-p'><a href="/" className='mid-footer-link'>{firstLink}</a></p>
        <p className='footer-content-p'><a href="/" className='mid-footer-link'>{secondLink}</a></p>
        <p className='footer-content-p'><a href="/" className='mid-footer-link'>{thirdLink}</a></p>
        <p className='footer-content-p'><a href="/" className='mid-footer-link'>{forthLink}</a></p>
        <p className='footer-content-p'><a href="/" className='mid-footer-link'>{fifthLink}</a></p>
        <p className='footer-content-p'><a href="/" className='mid-footer-link'>{sixthLink}</a></p>
      </div>
   </div>
   </>
  )
}

export default AboutZomato