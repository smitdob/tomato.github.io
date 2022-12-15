import React from 'react'
import '../Footer.css'
const LearnMore = ({ learnmore }) => {
  const Name = learnmore?.nameLink ?? '';
  const firstLink = learnmore?.firstLink ?? '';
  const secondLink = learnmore?.secondLink ?? '';
  const thirdLink = learnmore?.thirdLink ?? '';
  const forthLink = learnmore?.forthLink ?? '';
  return (
    <div className='learnmore mid-footer-div'>
      <h3 className='mid-footer-title'>{Name}</h3>
      <div className="mid-footer-link-wrapper">
        <p className='footer-content-p'><a href="/" className='mid-footer-link'>{firstLink}</a></p>
        <p className='footer-content-p'><a href="/" className='mid-footer-link'>{secondLink}</a></p>
        <p className='footer-content-p'><a href="/" className='mid-footer-link'>{thirdLink}</a></p>
        <p className='footer-content-p'><a href="/" className='mid-footer-link'>{forthLink}</a></p>
      </div>
    </div>
  )
}

export default LearnMore