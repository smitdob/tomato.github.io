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
      cover:'https://bit.ly/3U00S7N',
      places:'12 Places'
  },
  {
      id:2,
      title:'Veggie Friendly',
      cover:'https://bit.ly/3U00Wo3',
      places:'18 Places'
  },
  {
      id:3,
      title:'Insta-Worthy',
      cover:'https://bit.ly/3FGxG0Z',
      places:'6 Places'
  },
  {
      id:4,
      title:'Great Cafes',
      cover:'https://bit.ly/3T1aygS',
      places:'5 Places'
  },
  {
      id:5,
      title:'Street Food',
      cover:'https://bit.ly/3h71eea',
      places:'6 Places'
  },
  {
      id:6,
      title:'Ice Cream',
      cover:'https://bit.ly/3Ucc0xY',
      places:'5 Places'
  },
  {
      id:7,
      title:'Meat Cravings',
      cover:'https://bit.ly/3h9w7yF',
      places:'6 Places'
  },
  {
      id:8,
      title:'Sweet Tooth',
      cover:'https://bit.ly/3Nuo3EC',
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
const DiningOut = () => {   
  return (
    <>
    <Collections list={collectionsList}/>
    {/* <Filter Filterlist={DiningFilter}/> */}
    <ExploreSection list={diningList} collectionName='Dine-out Restaurants in Surat'/>
    </>
  )
}

export default DiningOut