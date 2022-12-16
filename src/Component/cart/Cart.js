import React, { useState } from 'react';
import './Cart.css'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { DLT } from '../../Redux/actions/action';
import { ADD } from '../../Redux/actions/action';
import { REMOVE } from '../../Redux/actions/action';
import { useEffect } from 'react';
const Cart = (props) => {
    // price usestate hook
    const [price, setPrice] = useState(0)
    // get data from store    
    const getdata = useSelector((state) => state.cartreducer.carts);
    const dispatch = useDispatch();
    // delete from carts reducer
    const dlt = (id) => {
        dispatch(DLT(id))
    }
    // remove one
    const remove = (item) => {
        dispatch(REMOVE(item))
    }
    //send data to store
    const send = (e) => {
        dispatch(ADD(e))
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
            <div className='cart container-md'>
                <p className="collection-title">Shopping Cart</p>   
                    {
                        getdata.length ? <div className='cart-detail-wrapper'>
                            {
                                getdata.map((ele) => {
                                    return (
                                        <div className="item-detail-wrapper" key={ele.Id}>
                                            <div className="row align-items-center">
                                                <div className="item-detail-image col-4">
                                                    <img className='product-detail-image' src={ele.info.cover} alt="" />
                                                </div>
                                                <div className="item-detail-content col-6">
                                                    <div className="">
                                                        <h4 className='product-detail-title'>{ele.info.name} - Lorem ipsum dolor, sit amet consectetur adipisicing elit. </h4>
                                                        <div className="detail-price">
                                                            <span className='edtail-page-price'> ₹ {ele.info.price * ele.qnty}</span>
                                                        </div>
                                                    </div>
                                                    <div className="item-detail-cart-action text-center">
                                                    <div>
                                                        <div className="quantity-buttons">
                                                            <span className='' style={{ fontSize: 24, cursor: "pointer" }} onClick={ele.qnty <= 1 ? () => dlt(ele.Id) : () => remove(ele)}>-</span>
                                                            <span className='' style={{ fontSize: 24, cursor: "pointer" }} >{ele.qnty}</span>
                                                            <span className='' style={{ fontSize: 24, cursor: "pointer" }} onClick={() => send(ele)}>+</span>
                                                        </div>
                                                        <div className="add-to-cart-btn">
                                                            <button className='btn btn-primary curstom-add-to-cart-btnn' onClick={() => dlt(ele.Id)}>Remove from cart</button>
                                                        </div>
                                                    </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            <div className="grand-total">
                                <div className="g-total-wrapper">
                                    <p className='grand-total-p'>Total : ₹{price}</p>
                                    <Link className='checkout btn btn-primary'> Check Out</Link>
                                </div>
                            </div>
                        </div> :
                            <div className='card-details'>
                                <div className='header-menu-wrapper'>
                                    <img className='gifcart' src="https://www.seekpng.com/png/full/117-1170538_404-your-cart-is-empty.png" alt="cart gif" />
                                </div>
                                <div className='text-center cart-close-btn-wrapper'>
                                    <Link to={`/${props.activeTab}`} className='btn btn-primary cart-close-btn' onClick={props.setActiveTab(props.activeTab)}>Continue Shopping</Link>
                                </div>
                            </div>
                    }
            </div>
        </>
    )
}

export default Cart