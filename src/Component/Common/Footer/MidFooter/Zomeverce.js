import React from 'react'
import '../Footer.css'
const Zomeverce = ({zomeverce}) => {
  const Name = zomeverce?.nameLink ?? '';
  const firstLink = zomeverce?.firstLink ?? '';
  const secondLink = zomeverce?.secondLink ?? '';
  const thirdLink = zomeverce?.thirdLink ?? '';
  const forthLink = zomeverce?.forthLink ?? '';
  const fifthLink = zomeverce?.fifthLink ?? '';
  return (
    <div className='zomeverce mid-footer-div'>
    <h3 className='mid-footer-title'>{Name}</h3>
    <div className="mid-footer-link-wrapper">
      <p className='footer-content-p'><a href="/" className='mid-footer-link'>{firstLink}</a></p>
      <p className='footer-content-p'><a href="/" className='mid-footer-link'>{secondLink}</a></p>
      <p className='footer-content-p'><a href="/" className='mid-footer-link'>{thirdLink}</a></p>
      <p className='footer-content-p'><a href="/" className='mid-footer-link'>{forthLink}</a></p>
      <p className='footer-content-p'><a href="/" className='mid-footer-link'>{fifthLink}</a></p>
    </div>
    </div>
  )
}

export default Zomeverce