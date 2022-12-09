import React from 'react'
import Collections from '../Common/Collections/Collections'
import "./DiningOut.css"
import {diningOut} from '../../data/diningOut'
// import Filter from '../Common/Filter/Filter';
import ExploreSection from '../Common/Exploresection/ExploreSection'
const collectionsList=[
  {
      id:1,
      title:'Live Sports Screenings',
      cover:'https://images.unsplash.com/photo-1526318896980-cf78c088247c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      places:'12 Places'
  },
  {
      id:2,
      title:'Veggie Friendly',
      cover:'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      places:'18 Places'
  },
  {
      id:3,
      title:'Insta-Worthy',
      cover:'https://images.unsplash.com/photo-1594627882045-57465104050f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
      places:'6 Places'
  },
  {
      id:4,
      title:'Great Cafes',
      cover:'https://images.unsplash.com/photo-1437418747212-8d9709afab22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      places:'5 Places'
  },
  {
      id:5,
      title:'Street Food',
      cover:'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      places:'6 Places'
  },
  {
      id:6,
      title:'Ice Cream',
      cover:'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=481&q=80',
      places:'5 Places'
  },
  {
      id:7,
      title:'Meat Cravings',
      cover:'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=410&q=80',
      places:'6 Places'
  },
  {
      id:8,
      title:'Sweet Tooth',
      cover:'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=449&q=80',
      places:'8 Places'
  },
];
// const DiningFilter=[
//     {
//       id:1,
//       icon:<i className="fa-solid fa-sliders"></i>,
//       title:"Filters"
//     },
//     {
//       id:2,
//       title:"Ratting: 4.0+"
//     },
//     {
//       id:3,
//       title:"Safe and Hygienic"
//     },
//     {
//       id:4,
//       title:"Pure Veg"
//     },
//     {
//       id:5,
//       icon:<i className="fa-regular fa-clock"></i>,
//       title:"Dilevery Time"
//     },
//     {
//       id:6,
//       title:"Great Offers"
//     }
// ];
const diningList= diningOut;
const DiningOut = (props) => {   
  return (
    <>
    <Collections list={collectionsList}/>
    {/* <Filter Filterlist={DiningFilter}/> */}
    <ExploreSection list={diningList} collectionName='Dine-out Restaurants in Surat' props={props}/>
    </>
  )
}

export default DiningOut