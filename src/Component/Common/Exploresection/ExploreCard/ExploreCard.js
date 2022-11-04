import React from 'react'
import './ExploreCard.css'
const ExploreCard = ({ restaurent }) => {
  const Name = restaurent?.info?.name ?? '';
  const CoverImg = restaurent?.info?.cover ?? '';
  const Ratting = restaurent?.info?.ratting ?? 'New';
  const RattingSubtitle = restaurent?.info?.ratting_sub_title ?? 'New';
  const Description = restaurent?.info?.description ?? '';
  const Location = restaurent?.info?.location ?? '';
  return (
    <>
      <div className="explore-card cur-po">
        <div className="explore-card-cover">
          <img src={CoverImg} alt={Name} className='explore-card-image' />
          <div className="gredient"></div>

          <div className="img-cover-text-wrapper">
            <div className='ratting'>{Ratting} <i className="fa-solid fa-star"></i>
              <div className="res-ratting-subtitle">{RattingSubtitle}</div>
            </div>
            <div className="location"><span className='location-icon'><i className="fa-solid fa-location-dot"></i></span><span>{Location}</span></div>
          </div>

        </div>
        <div className="res-row">
          <div className="res-name">{Name.length <= 20 ? Name : (Name.slice(0, 20) + '...')}</div>
        </div>
        <div className="res-rows">
          <div className="res-description">{Description.length <= 30 ? Description : (Description.slice(0, 30) + '...')}</div>
        </div>
      </div>
    </>
  )
}

export default ExploreCard