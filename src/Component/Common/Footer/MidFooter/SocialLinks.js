import React from 'react'
import '../Footer.css'
const SocialLinks = ({ sociallink }) => {
  const Name = sociallink?.nameLink ?? '';
  const firstLink = sociallink?.firstLink ?? '';
  const secondLink = sociallink?.secondLink ?? '';
  const thirdLink = sociallink?.thirdLink ?? '';
  const forthLink = sociallink?.forthLink ?? '';
  const fifthLink = sociallink?.fifthLink ?? '';
  // const appstoreLink = sociallink?.appstoreLink ?? '';
  // const playstoreLink = sociallink?.playstoreLink ?? '';
  return (
    <div className='sociallink mid-footer-div'>
      <h3 className='mid-footer-title'>{Name}</h3>
      <div className="mid-footer-icon-link-wrapper">
        <p className='footer-content-p'><a href="/" className='mid-footer-social-link'>{firstLink}</a></p>
        <p className='footer-content-p'><a href="/" className='mid-footer-social-link'>{secondLink}</a></p>
        <p className='footer-content-p'><a href="/" className='mid-footer-social-link'>{thirdLink}</a></p>
        <p className='footer-content-p'><a href="/" className='mid-footer-social-link'>{forthLink}</a></p>
        <p className='footer-content-p'><a href="/" className='mid-footer-social-link'>{fifthLink}</a></p>
      </div>
      {/* <div className="mid-footer-store-img-link-wrapper">
        <p><a href="/"><img src={appstoreLink} alt="App store Link" /></a></p>
        <p><a href="/"><img src={playstoreLink} alt="Play store Link" /></a></p>
      </div> */}
    </div>
  )
}

export default SocialLinks