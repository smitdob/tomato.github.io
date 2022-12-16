import React, { useState, useEffect } from 'react';
import './header.css';
import { Link } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { ADD } from '../../../Redux/actions/action';
import { DLT } from '../../../Redux/actions/action';
import { REMOVE } from '../../../Redux/actions/action';
import Menuuser from './menu/Menuuser';
import { Tooltip } from '@mui/material';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
const Header = (props) => {
  const getdata = useSelector((state) => state.cartreducer.carts);
  // price usestate hook
  const [price, setPrice] = useState(0)
  // add to cart button
  const dispatch = useDispatch();
  const send = (e) => {
    dispatch(ADD(e))
  }
  //trash to cart button code
  const dlt = (id) => {
    dispatch(DLT(id))
  }
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
  // remove one
  const remove = (item) => {
    dispatch(REMOVE(item))
  }
  // total prie show
  const total = () => {
    let price = 0;
    getdata.map((ele, k) => {
      price = ele.info.price * ele.qnty + price
    })
    setPrice(price)
  }
  useEffect(() => {
    total()
  }, [total])
  return (
    <>
      <div className="header-wrapper stickey-header" id='stickey-header'>
        <div className="header container-md">

          <Link to='/dilevery'>
            <img className='web_logo' src="https://www.darlinggroup.co.nz/wp-content/uploads/2019/05/Tomato_Text.png" alt="website logo" onClick={() => { props.setActiveTab('dilevery') }} />
          </Link>

          <div className="header-content-wrapper">
            <div className="header-location">
              <i className="fa-solid fa-location-dot"></i>
              <select className="form-select" aria-label="Default select example">
                <option className='location-option' value='0'>Surat</option>
                <option className='location-option' value="1">Vesu</option>
                <option className='location-option' value="2">pal</option>
                <option className='location-option' value="3">Adajan</option>
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
            {/* <div className="header-mic">
             <i className="fa-solid fa-microphone" onClick={handleShow}></i>
             
              <Modal show={show} onHide={handleClose} className='mobile-modal'>
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
            </div> */}
            {/* <span className='face-user cur-po'></span> */}
            <Menu />
            {/* <p className="username">Smit</p> */}

            <div className="headermobilecart">
              <div className="d-flex align-items-center">
                <Tooltip title="Cart">
                  <Badge badgeContent={getdata.length} color="primary"
                    className='cur-po mobile-header-menu'
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}>
                    {/* <i className="fa-solid fa-cart-shopping cur-po"></i> */}
                    <LocalMallOutlinedIcon className='cur-po' />
                  </Badge>
                </Tooltip>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClosee}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                >
                  {/* show this div when cart is empty */}
                  {
                    getdata.length ?
                      <div className='card-details'>
                        <table className='added-cart-sec-table'>
                          <thead>
                            <tr className='added-cart-sec-thead-tr'>
                              <th>Photo</th>
                              <th>Name</th>
                            </tr>
                          </thead>
                          <tbody>
                          </tbody>
                        </table>
                        {
                          getdata.map((e) => {
                            return (
                              <div key={e.Id}>
                                <div className='cart-content-wrapper'>
                                  <div className="header-cart-image ">
                                    <img src={e.info.cover} alt="cart" />
                                    <i className="fa-regular fa-trash-can trash-bin" onClick={() => dlt(e.Id)}></i>
                                  </div>
                                  <div className="header-cart-content">
                                    <p className='header-cart-content-name'> <span className='text different'>{(e.info.name.length) > 17 ? e.info.name.slice(0, 20) + "..." : e.info.name}</span> </p>
                                    <p className='header-cart-content-price'>Price : <span className='text different'> ₹ {e.info.price}</span> </p>
                                    <p className='header-cart-content-qnty'>Quantity : <span className='text different qnty-btn-wrapper'>
                                      <span className='qnty-btn cur-po' onClick={e.qnty <= 1 ? () => dlt(e.Id) : () => remove(e)}>-</span>
                                      <span className='qnty-btn cur-po'>{e.qnty}</span>
                                      <span className='qnty-btn cur-po' onClick={() => send(e)}>+</span>
                                    </span>
                                    </p>
                                    <p className='header-cart-total'>Total : ₹ {e.info.price * e.qnty}</p>
                                  </div>
                                </div>
                              </div>
                            )
                          })
                        }
                        <hr className='add-cart-hr' />
                        <div className="add-to-cart">
                          <Link to='/cart' onClick={handleClosee}><button className='hero-btn'>Go to Cart</button></Link>
                          <p className='header-grand-total'>Total : ₹ {price}</p>
                        </div>
                      </div> :
                      <div className='card-details'>
                        <i className="fa-solid fa-xmark cur-po"
                          onClick={handleClosee}></i>
                        <div className='header-menu-wrapper'>
                          <p>Your Cart is Empty</p>
                          <img className='gifcart' src="https://parcamkapinda.com/img/cart.gif" alt="cart gif" />
                        </div>
                      </div>
                  }
                </Menu>

                <Menuuser />
              </div>
            </div>

          </div>
          {/* header-menu for pc */}
          <div className="header-right-content">
            {/* <span className='face-user cur-po'></span> */}
            <Menu />
            {/* <p className="username">Smit</p> */}

            <Tooltip title="Cart">
              <Badge badgeContent={getdata.length} color="primary"
                className='cur-po'
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}>
                {/* <i className="fa-solid fa-cart-shopping cur-po"></i> */}
                <LocalMallOutlinedIcon className='cur-po' />
              </Badge>
            </Tooltip>

            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClosee}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              {/* show this div when cart is empty */}
              {
                getdata.length ?
                  <div className='card-details'>
                    <div class="cart-data-collection">
                    <table className='added-cart-sec-table'>
                      <thead>
                        <tr className='added-cart-sec-thead-tr'>
                          <th>Photo</th>
                          <th>Name</th>
                        </tr>
                      </thead>
                      <tbody>
                      </tbody>
                    </table>
                    {
                      getdata.map((e) => {
                        return (
                          <div key={e.Id}>
                            <div className='cart-content-wrapper'>
                              <div className="header-cart-image ">
                                <img src={e.info.cover} alt="cart" />
                                <i className="fa-regular fa-trash-can trash-bin" onClick={() => dlt(e.Id)}></i>
                              </div>
                              <div className="header-cart-content">
                                <p className='header-cart-content-name'> <span className='text different'>{(e.info.name.length) > 17 ? e.info.name.slice(0, 20) + "..." : e.info.name}</span> </p>
                                <p className='header-cart-content-price'>Price : <span className='text different'> ₹ {e.info.price}</span> </p>
                                <p className='header-cart-content-qnty'>Quantity : <span className='text different qnty-btn-wrapper'>
                                  <span className='qnty-btn cur-po' onClick={e.qnty <= 1 ? () => dlt(e.Id) : () => remove(e)}>-</span>
                                  <span className='qnty-btn cur-po'>{e.qnty}</span>
                                  <span className='qnty-btn cur-po' onClick={() => send(e)}>+</span>
                                </span>
                                </p>
                                <p className='header-cart-total'>Total : ₹ {e.info.price * e.qnty}</p>
                              </div>
                            </div>
                          </div>
                        )
                      })
                    }
                    <hr className='add-cart-hr' />
                    </div>
                    <div className="add-to-cart">
                      <Link to='/cart' onClick={handleClosee}><button className='hero-btn'>Go to Cart</button></Link>
                      <p className='header-grand-total'>Total : ₹ {price}</p>
                    </div>
                  </div> :
                  <div className='card-details'>
                    <i className="fa-solid fa-xmark cur-po"
                      onClick={handleClosee}></i>
                    <div className='header-menu-wrapper'>
                      <p>Your Cart is Empty</p>
                      <img className='gifcart' src="https://parcamkapinda.com/img/cart.gif" alt="cart gif" />
                    </div>
                  </div>
              }
            </Menu>

            <Menuuser />
          </div>
        </div>
      </div>
    </>
  )
}


export default Header