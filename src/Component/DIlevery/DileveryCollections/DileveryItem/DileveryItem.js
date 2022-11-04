import React from 'react'
import './DileveryItem.css'
const DileveryItem = ({item}) => {
  return (
    <div>   
        <div className="dilevery-item-cover">
            <img src={item.cover} 
                 alt={item.title} 
                 className='dilevery-item-image'
            />
        </div>
        <div className='dilevery-item-title'>{item.title}</div>
    </div>
  )
}

export default DileveryItem