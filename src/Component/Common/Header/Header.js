import React, { useState } from 'react';
import './header.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
const Header = () => {
  // responsive modal listnering 
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // cart menu
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClosee = () => {
    setAnchorEl(null);
  };
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
            <Badge badgeContent={1} color="primary"
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}><i className="fa-solid fa-cart-shopping"></i></Badge>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClosee}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <div className='card-details'>
                                <i className="fa-solid fa-xmark cur-po"
                                    onClick={handleClosee}
                                ></i>
                                <div className='header-menu-wrapper'>
                                    <p>Your Cart is Empty</p>
                                    <img className='gifcart' src="https://parcamkapinda.com/img/cart.gif" alt="cart gif" />
                                </div>
                            </div>
            </Menu>
            <span className='face-user'></span>
          </div>
        </div>
      </div>
    </>
  )
}


export default Header