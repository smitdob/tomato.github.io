import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import './ItemDetail.css'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { ADDMULTIPLE } from '../../../Redux/actions/action'
import { ADD } from '../../../Redux/actions/action'
const ItemDetail = (props) => {

  const [data, setData] = useState([])
  const list = props.detailsetdata;

  const { id } = useParams();

  const [qty, setQty] = useState(1); //item quantity
  const max = 100;

  const compare = () => {
    let comparedata = list.filter((e) => {
      return e.Id == id;
    });
    setData(comparedata)
  }
  useEffect(() => {
    compare();
  }, [id])

  //update data plus minus
  const plus = data.map((obj) => {
    return { ...obj, qnty: qty + 1 }
  })
  const plusadd = () => {
    setData(plus);
  }

  const minus = data.map((obj) => {

    if (obj.qnty > 1) {
      return {
        ...obj, qnty: qty - 1
      }
    }
    else {
      return {
        ...obj, qnty: 1
      }
    }
  })
  const minusdlt = () => {
    setData(minus);
  }

  // quantity null
  const setqtynull = () => {
    setQty(1)
  }
  // refresh data and set qnty = 0
  const refreshnewdata = data.map((obj) => {
    return { ...obj, qnty: 0 }
  })
  const refresh = () => {
    setData(refreshnewdata);
  }
  const decreaseQty = () => {
    minusdlt();
    if (qty <= 1) {
      setQty(1);
    } else {
      setQty(qty - 1);
    }
  };
  const increaseQty = () => {
    if (qty >= max) {
      setQty(max);
      plusadd();
    } else {
      setQty(qty + 1);
      plusadd();
    }
  };
  // manual input quantity onChange={onChange}
  // const onChange = (e) => {
  //   const value = parseInt(e.target.value);
  //   if (value >= 1 && value <= max) {
  //     setQty(value);
  //   }
  // };
  const onChange = (e) => {
  };
  // condition when which add data function is run
  const dispatch = useDispatch();
  // send in multiple item
  const sendmul = (e) => {
    dispatch(ADDMULTIPLE(e))
  }
  //send single add to cart
  const send = (e) => {
    dispatch(ADD(e))
  }
  return (
    <>
      {
        data.map((ele) => {
          return (
            <div className="item-detail-wrapper container-md" key={ele.Id}>
              <div className="row align-items-center">
                <div className="item-detail-image col-4 col-md-5">
                  <img className='product-detail-image' src={ele.info.cover} alt="" />
                </div>
                <div className="item-detail-content col-7 col-md-7">
                  <div className="row">
                    <h4 className='product-detail-title col-12'>{ele.info.name} - Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt labore eveniet debitis quidem, delectus harum</h4>
                    <div className="detail-review col-12">
                      <div>
                      <span className='ratting-num'> <i className="fa-solid fa-star" style={{ color: '#f2b407' }}></i> {ele.info.ratting}  </span>
                      <span className='ratting-title'>{ele.info.ratting_sub_title}</span>
                      </div>
                      <div>
                       <span className='static-ratting'>200+ Ratting</span>
                      </div>
                    </div>
                    <div className="detail-location col-md-12 col-6">
                      <i className="fa-solid fa-location-dot" style={{ color: "red" }}></i> <span className='detail-location'>{ele.info.location}</span>
                    </div>
                    <div className="detail-price col-md-12 col-6">
                      <span className='edtail-page-price'> ₹ {ele.info.price * qty}</span>
                    </div>
                    <div className="item-detail-cart-action col-12 col-md-3 text-center">
                    <div className="quantity-buttons">
                      <span className='' style={{ fontSize: 24, cursor: "pointer" }} onClick={decreaseQty}>-</span>
                      <input type="text" className='itemdetail-input-counter' placeholder='1' onChange={onChange} value={qty} />
                      <span className='' style={{ fontSize: 24, cursor: "pointer" }} onClick={increaseQty}>+</span>
                    </div>
                    <div className="add-to-cart-btn">
                      <button className='btn btn-primary curstom-add-to-cart-btnn' onClick={() => {
                        if (ele.qnty > 0) {
                          sendmul(ele);
                        }
                        else {
                          send(ele);
                          decreaseQty()
                        }
                        setqtynull();
                        setTimeout(() => {
                          refresh();
                        }, 100);
                      }} >Add to cart</button>
                    </div>
                </div>
                  </div>
                </div>
                {/* <div className="item-detail-cart-action col-4 col-md-3 text-center">
                  <div>
                    <div className="quantity-buttons">
                      <span className='' style={{ fontSize: 24, cursor: "pointer" }} onClick={decreaseQty}>-</span>
                      <input type="text" className='itemdetail-input-counter' placeholder='1' onChange={onChange} value={qty} />
                      <span className='' style={{ fontSize: 24, cursor: "pointer" }} onClick={increaseQty}>+</span>
                    </div>
                    <div className="add-to-cart-btn">
                      <button className='btn btn-primary curstom-add-to-cart-btnn' onClick={() => {
                        if (ele.qnty > 0) {
                          sendmul(ele);
                        }
                        else {
                          send(ele);
                          decreaseQty()
                        }
                        setqtynull();
                        setTimeout(() => {
                          refresh();
                        }, 100);
                      }} >Add to cart</button>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          )
        })
      }
    </>
  )
}

export default ItemDetail