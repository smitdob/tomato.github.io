import React, { useState } from 'react';
import './header.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const Header = (props) => {
  // responsive modal listnering 
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <>
      <div className="header-wrapper container-md">
        <div className="header">
          <img className='web_logo' src="https://www.darlinggroup.co.nz/wp-content/uploads/2019/05/Tomato_Text.png" alt="website logo" />
          <div className="header-content-wrapper">
            <div className="header-location">
              <i className="fa-solid fa-location-dot absolute-center"></i>
              <select className="form-select" aria-label="Default select example">
                <option value='0'>Surat</option>
                <option value="1">Vesu</option>
                <option value="2">pal</option>
                <option value="3">Adajan</option>
              </select>
              {/* <i className="fa-solid fa-caret-down absolute-center"></i> */}

              {/* 
              <p className=''>Surat</p>
              <i className="fa-solid fa-caret-down absolute-center"></i> */}
            </div>
            <div className="search-box">
              <i className="fa-solid fa-magnifying-glass"></i>
              <input type="text" className='header-search-text form-control' id="header-search-text" aria-describedby="passwordHelpBlock" placeholder='Search here' />
            </div>
            <div className="header-mic">
              <i className="fa-solid fa-microphone" onClick={handleShow}></i>
              {/* modal code */}
              <Modal show={show} onHide={handleClose}>
                <Modal.Header className='header-modal-header'>
                  <Modal.Title>Listening</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                </Modal.Body>
                <Modal.Footer>
                  <Button className='close-btn' onClick={handleClose}>
                    <i className="fa-solid fa-xmark"></i>
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
          <div className="header-right-content">
            <i className="fa-solid fa-user"></i>
            <p className="username">Smit</p>
            <i className="fa-solid fa-cart-shopping"></i>
            <span className='face-user'></span>
          </div>
        </div>
      </div>
    </>
  )
}


export default Header