import React from 'react'
import ExploreCard from './ExploreCard/ExploreCard'
import './ExploreSection.css'
const ExploreSection = ({list,collectionName}) => {
  return (
    <div className='explore-section'>
        <div className='collection-title'>{collectionName}</div>
        <div className="explore-grid">
             {list.map((restaurent)=>{
                return <ExploreCard restaurent={restaurent} key={restaurent.Id} />
             })}
        </div>
    </div>
  )
}

export default ExploreSection