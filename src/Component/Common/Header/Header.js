import React from 'react'; 
import './header.css';
const Header = () => {
  return (
    <>
      <div className="header">
        <img className='web_logo' src="https://www.darlinggroup.co.nz/wp-content/uploads/2019/05/Tomato_Text.png" alt="website logo" />
        <div className="header-content-wrapper">
            <div className="header-location">
              <i className="fa-solid fa-location-dot absolute-center"></i>
              <p className=''>Surat</p>
              <i className="fa-solid fa-caret-down absolute-center"></i>
            </div>
            <div className="search-box">
              <i className="fa-solid fa-magnifying-glass"></i>
              <input type="text" className='header-search-text form-control' id="header-search-text" aria-describedby="passwordHelpBlock" placeholder='Search for Restaurant'/>
            </div>
        </div>
        <div className="header-right-content">
          <i className="fa-solid fa-user"></i>
          <p className="username">Smit</p>
          <i className="fa-solid fa-chevron-down"></i>
        </div>
      </div>
    </>
  )
}

export default Header