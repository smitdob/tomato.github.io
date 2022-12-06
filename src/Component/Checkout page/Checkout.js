import React from 'react'
import './Checkout.css'
import { useSelector } from 'react-redux'
const Checkout = (props) => {
    console.log(props.activeTab)
    props.setActiveTab(props.activeTab);
    const getdata = useSelector((state) => state.checkoutitem.checkout);
    console.log(getdata);

    return (
        <>
            <div className="container-md checkout">
                <div className="checkout-wrapper">
                    
                </div>
            </div>
        </>
    )
}

export default Checkout