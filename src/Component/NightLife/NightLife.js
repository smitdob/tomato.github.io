import React from 'react'
import Collections from '../Common/Collections/Collections';
import ExploreSection from '../Common/Exploresection/ExploreSection';
// import Filter from '../Common/Filter/Filter';
import './NightLife.css';
import {nightlife} from '../../data/nightLife';
const collectionsList=[
  {
      id:1,
      title:'Live Sports Screenings',
      cover:'https://images.unsplash.com/photo-1586511934875-5c5411eebf79?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
      places:'12 Places'
  },
  {
      id:2,
      title:'Veggie Friendly',
      cover:'https://images.unsplash.com/photo-1612240498936-65f5101365d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      places:'18 Places'
  },
  {
      id:3,
      title:'Insta-Worthy',
      cover:'https://images.unsplash.com/photo-1568600891621-50f697b9a1c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      places:'6 Places'
  },
  {
      id:4,
      title:'Great Cafes',
      cover:'https://images.unsplash.com/photo-1530554764233-e79e16c91d08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      places:'5 Places'
  },
  {
      id:5,
      title:'Street Food',
      cover:'https://images.unsplash.com/photo-1587015566802-5dc157c901cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80',
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
// const NightFilter=[
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
const nightlifeList= nightlife;
const NightLife = (props) => {
  return (
   <>
    <div>
      <Collections list={collectionsList} />
      {/* <Filter Filterlist={NightFilter}/> */}
      <ExploreSection list={nightlifeList} collectionName='Night-Life Restaurant in Surat' props={props}/>
    </div>
   </>
  )
}

export default NightLife