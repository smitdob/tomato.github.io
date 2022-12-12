import React from 'react'
import { useDispatch } from 'react-redux';
import './ExploreCard.css'
import { ADD } from '../../../../Redux/actions/action';
import { NavLink } from 'react-router-dom';
import { Tooltip } from '@mui/material';

const ExploreCard = ({ restaurent, props }) => {
  const Name = restaurent?.info?.name ?? '';
  const CoverImg = restaurent?.info?.cover ?? '';
  const Ratting = restaurent?.info?.ratting ?? 'New';
  const RattingSubtitle = restaurent?.info?.ratting_sub_title ?? 'New';
  const Description = restaurent?.info?.description ?? '';
  const Location = restaurent?.info?.location ?? '';
  const Price = restaurent?.info?.price ?? '';

  // redux add to store
  const dispatch = useDispatch();
  const send = (e) => {
    dispatch(ADD(e))
  }
  return (
    <>
      <div className="explore-card cur-po">
        <NavLink to={`/${props.props}/${restaurent.Id}`}>
        <Tooltip title='Go to Item Detail'>
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
          </Tooltip>
        </NavLink>
        <div className="res-row">
          <div className="res-name">{Name.length <= 20 ? Name : (Name.slice(0, 15) + '...')}</div>
        </div>
        <div className="res-rows" >
          <div className="res-description">{Description.length <= 30 ? Description : (Description.slice(0, 30) + '...')}</div>
          <button className="btn btn-primary curstom-add-to-cart-btn"
            // on onClick add data to store
            onClick={() => send(restaurent)}
          >Add to Cart</button>
        </div>
      </div>
    </>
  )
}

export default ExploreCard