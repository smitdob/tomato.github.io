import React from 'react'
import { restro } from '../../data/restro'
import ExploreSection from '../Common/Exploresection/ExploreSection'
// import Filter from '../Common/Filter/Filter'
import './Dilevery.css'
import DileveryCollections from './DileveryCollections/DileveryCollections'
import TopBrand from './TopBrands/TopBrand'

// const DileveryFilter=[
//   {
//     id:1,
//     icon:<i className="fa-solid fa-sliders"></i>,
//     title:"Filters"
//   },
//   {
//     id:2,
//     title:"Ratting: 4.0+"
//   },
//   {
//     id:3,
//     title:"Safe and Hygienic"
//   },
//   {
//     id:4,
//     title:"Pure Veg"
//   },
//   {
//     id:5,
//     icon:<i className="fa-regular fa-clock"></i>,
//     title:"Dilevery Time"
//   },
//   {
//     id:6,
//     title:"Great Offers"
//   }
// ]
const restroList= restro;
const Dilevery = (props) => {
  return (
    <>
    {/* <Filter Filterlist={DileveryFilter} /> */}
    <DileveryCollections/>
    <TopBrand/>
    <ExploreSection list={restroList} collectionName='Dilevery Restaurants in Surat' props={props}/>
    </>
  )
}

export default Dilevery