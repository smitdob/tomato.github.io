import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import './ItemDetail.css'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { ADD } from '../../../Redux/actions/action'

const ItemDetail = () => {
  const [data, setData] = useState([])
  console.log(data)

  // item quantity 
  const [qty, setQty] = useState(1);
  console.log(qty)
  const max = 100;

  const newdata = data.map((obj) => {
    return { ...obj, qnty: qty }
  })
  const refreshnewdata = data.map((obj) => {
    return { ...obj, qnty: 0 }
  })
  

  const update = () => {
    setData(newdata);
  }
  const setqtynull=()=>{
    setQty(1)
  }

  const decreaseQty = () => {
    if (qty <= 1) {
      setQty(1);
    } else {
      setQty(qty - 1);
    }
  };
  const increaseQty = () => {
    if (qty >= max) {
      setQty(max);
    } else {
      setQty(qty + 1);
    }
  };
  const onChange = (e) => {
    const value = parseInt(e.target.value);
    if (value >= 1 && value <= max) {
      setQty(value);
    }
  };
  const list = useSelector((state) => state.itemdetail.itemdetail);
  const { id } = useParams();
  const compare = () => {
    let comparedata = list.filter((e) => {
      return e.Id == id;
    });
    setData(comparedata)
  }
  useEffect(() => {
    compare();
  }, [id])
  // add to cart button code
  const dispatch = useDispatch();
  const send = (e) => {
    dispatch(ADD(e))
  }
  return (
    <>
      {
        data.map((ele) => {
          return (
            <div className="item-detail-wrapper container-md my-5" key={ele.Id}>
              <div className="row align-items-start">
                <div className="item-detail-image col-5">
                  <img className='product-detail-image' src={ele.info.cover} alt="" />
                </div>
                <div className="item-detail-content col-4">
                  <div className="row">
                    <h4 className='product-detail-title mb-3 col-12'>{ele.info.name} - Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt labore eveniet debitis quidem, delectus harum</h4>
                    <div className="detail-review mb-2 col-12">
                      <i className="fa-solid fa-star" style={{ color: '#f2b407' }}></i> <span className='ratting-num'>{ele.info.ratting}  </span>
                      <span className='ratting-title'>{ele.info.ratting_sub_title}</span> &nbsp; <span className='static-ratting'>200+ Ratting</span>
                    </div>
                    <div className="detail-location mb-2 col-12">
                      <i className="fa-solid fa-location-dot" style={{ color: "red" }}></i> <span className='detail-location'>{ele.info.location}</span>
                    </div>
                    <div className="detail-price mb-2 col-12">
                      <span className='edtail-page-price'> ₹ {ele.info.price * qty}</span>
                    </div>
                  </div>
                </div>
                <div className="item-detail-cart-action col-3 text-center">
                  <div>
                    <div className="quantity-buttons">
                      <span className='' style={{ fontSize: 24, cursor: "pointer" }} onClick={decreaseQty}>-</span>
                      <input type="text" className='itemdetail-input-counter' placeholder='1' onChange={onChange} value={qty} />
                      <span className='' style={{ fontSize: 24, cursor: "pointer" }} onClick={increaseQty}>+</span>
                    </div>
                    <div className="add-to-cart-btn">
                      <button className='btn btn-primary curstom-add-to-cart-btnn'>Buy Now</button>
                      <button className='btn btn-primary curstom-add-to-cart-btnn' onClick={() => {update(); setqtynull(); send(ele)}}>Add to cart</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })
      }
    </>
  )
}

export default ItemDetail