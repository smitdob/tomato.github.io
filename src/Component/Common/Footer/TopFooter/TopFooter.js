import React from 'react'
import './TopFooter.css'
const imgLink = 'https://www.darlinggroup.co.nz/wp-content/uploads/2019/05/Tomato_Text.png';
const TopFooter = () => {
    return (
        <>
            <div className="top-footer">
                <img src={imgLink} alt="Zomato Logo" className='footer-logo'/>
                {/* <div className="footer-top-right-wrapper">
                    <div className="region">
                        india 
                        <i className="fa-solid fa-caret-down"></i>
                    </div>
                    <div className="language">
                        <i className="fa-solid fa-globe"></i>
                        English
                        <i className="fa-solid fa-caret-down"></i>
                    </div>
                </div> */}
            </div>
        </>
    )
}

export default TopFooter