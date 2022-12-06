import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import './ExploreCard.css'
import { ADD } from '../../../../Redux/actions/action';
import { NavLink } from 'react-router-dom';
import { SETDATA } from '../../../../Redux/actions/action';
const ExploreCard = ({ restaurent,props }) => {
  const Name = restaurent?.info?.name ?? '';
  const CoverImg = restaurent?.info?.cover ?? '';
  const Ratting = restaurent?.info?.ratting ?? 'New';
  const RattingSubtitle = restaurent?.info?.ratting_sub_title ?? 'New';
  const Description = restaurent?.info?.description ?? '';
  const Location = restaurent?.info?.location ?? '';
  const Price = restaurent?.info?.price ?? '';

  // redux add to store
  const dispatch = useDispatch();
  const send =(e)=>{
    dispatch(ADD(e))
  }

  // send data to item detail in redux
  const senditem =(e)=>{
    dispatch(SETDATA(e))
  }
  return (
    <>
      <div className="explore-card cur-po">
      <NavLink to={`/${props.props}/${restaurent.Id}`} onClick={()=>senditem(restaurent)}>
        <div className="explore-card-cover">
          <img src={CoverImg} alt={Name} className='explore-card-image' />
          <div className="gredient"></div>
          <div className="price">₹{Price}</div>
          <div className="img-cover-text-wrapper">
            <div className='ratting'>{Ratting} <i className="fa-solid fa-star"></i>
              <div className="res-ratting-subtitle">{RattingSubtitle}</div>
            </div>
            <div className="location"><span className='location-icon'><i className="fa-solid fa-location-dot"></i></span><span>{Location}</span></div>
          </div>
        </div>
      </NavLink>
        <div className="res-row">
          <div className="res-name">{Name.length <= 20 ? Name : (Name.slice(0, 15) + '...')}</div>
        </div>
        <div className="res-rows">
          <div className="res-description">{Description.length <= 30 ? Description : (Description.slice(0, 30) + '...')}</div>
          <div className="btn btn-primary curstom-add-to-cart-btn"    
            // on onClick add data to store
            onClick={()=>send(restaurent)}
          >Add to Cart</div>
        </div>
      </div>
    </>
  )
}

export default ExploreCard