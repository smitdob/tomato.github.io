import React from 'react'
import './Footer.css'
import AboutZomato from './MidFooter/AboutZomato'
import Forrestro from './MidFooter/Forrestro'
import LearnMore from './MidFooter/LearnMore'
import SocialLinks from './MidFooter/SocialLinks'
import Zomeverce from './MidFooter/Zomeverce'
import TopFooter from './TopFooter/TopFooter'
const Aboutzomato = 
  {
    id:1,
    nameLink: 'ABOUT TOMATO',
    firstLink: 'Who We Are',
    secondLink: 'Blog',
    thirdLink: 'Work With Us',
    forthLink: 'Invester Relations',
    fifthLink: 'Report Fruad',
    sixthLink: 'Contact Us'
  };
const zomeverce =
  {
    nameLink: 'ZOMAVERSE',
    firstLink: 'Tomato',
    secondLink: 'Blinkit',
    thirdLink: 'Feeding India',
    forthLink: 'Hyperpure',
    fifthLink: 'Zomaland'
  };
const forrestro =
  {
    nameLink: 'FOR RESTAURENTS',
    firstLink: 'Partner With Us',
    secondLink: 'Apps For You',
    thirdLink: 'Tomato For Work'
  };
const learnmore = 
  {
    nameLink: 'LEARN MORE',
    firstLink: 'Privacy',
    secondLink: 'Security',
    thirdLink: 'Terms',
    forthLink: 'Sitemap',
  };

const sociallink =
  {
    nameLink: 'SOCIAL LINKS',
    firstLink: <i className="fa-brands fa-linkedin"></i>,
    secondLink: <i className="fa-brands fa-square-instagram"></i>,
    thirdLink: <i className="fa-brands fa-square-twitter"></i>,
    forthLink: <i className="fa-brands fa-square-youtube"></i>,
    fifthLink: <i className="fa-brands fa-square-facebook"></i>,
    // appstoreLink:'https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png',
    // playstoreLink:'https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png'
  };
const Footer = () => {
  return (
    <>
      <div className="footer">
      <div className="container-lg">
        <TopFooter />
        <div className="mid-footer-wrapper">
          <AboutZomato Aboutzomato={Aboutzomato} />
          <Zomeverce zomeverce={zomeverce} />
          <Forrestro forrestro={forrestro} />
          <LearnMore learnmore={learnmore} />
          <SocialLinks sociallink={sociallink} />
        </div>
      </div>
      </div>
    </>
  )
}

export default Footer