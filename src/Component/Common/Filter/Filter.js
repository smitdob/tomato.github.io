import React from 'react'
import "./Filter.css"
const Filter = (props) => {
  return (
    <>
      <div className="filter-wrapper container-md">
        <div className='filter'>{props.Filterlist && props.Filterlist.map((filter) => {
            return <div className='cur-po' key={filter.id}>{filter.title}{filter.icon}</div>
        })}</div>
      </div>
    </>
  )
}
export default Filter