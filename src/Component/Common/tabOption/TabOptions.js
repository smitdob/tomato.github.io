import React from 'react'
import { Link } from 'react-router-dom';
import "./tabOption.css";
const tabs = [
  {
    id: 1,
    name: "Dilevery",
    active_img: <i className="fa-solid fa-bicycle" style={{ color: "red", display: "flex" }}></i>,
    backdrop: "#FCEEC0",
    inactive_img: <i className="fa-solid fa-bicycle" style={{ color: "grey", display: "flex" }}></i>,
    path:'dilevery'
  },
  {
    id: 2,
    name: "Diningout",
    active_img: <i className="fa-solid fa-plate-wheat" style={{ color: "red", display: "flex" }}></i>,
    backdrop: "#c0d14d",
    inactive_img: <i className="fa-solid fa-plate-wheat" style={{ color: "grey", display: "flex" }}></i>,
    path:'diningout'
  },
  {
    id: 3,
    name: "NightLife",
    active_img: <i className="fa-solid fa-bottle-water" style={{ color: "red", display: "flex" }}></i>,
    backdrop: "#d984a6",
    inactive_img: <i className="fa-solid fa-bottle-water" style={{ color: "grey", display: "flex" }}></i>,
    path:'nightlife'
  }
];
const TabOptions = (props) => {
  return (
    <>
      {/* tab desktop */}
      <div className="tab-option d-md-block d-none desk-tab container-md">
        <div className="option-wrapper">
          {tabs.map((tab) => {
            return <Link to={tab.path} onClick={() =>{ props.setActiveTab(tab.path)}}
              className={`tab-item text-decoration-none absolute-center cur-po ${props.activeTab === tab.path && 'active-tab'}`} key={tab.id}>
              <div className='tab-image-container absolute-center' style={{backgroundColor: `${props.activeTab === tab.path ? tab.backdrop : ""}`}}>
                <p className='tab-icon'>{props.activeTab === tab.path ? tab.active_img : tab.inactive_img}</p>
              </div>
              <div className="tab-name">{tab.name}</div>
            </Link>
          })}
        </div>
      </div>
     
     
      {/* tab mobile */}
        <div className="tab-option d-md-none mob-tab">
          <div className="option-wrapper">
            {tabs.map((tab) => {
              return <Link to={tab.path}  onClick={() => { props.setActiveTab(tab.path) }}
                className={`tab-item text-decoration-none absolute-center cur-po ${props.activeTab === tab.path && 'active-tab'}`} key={tab.id}>
                <div className='tab-image-container absolute-center' style={{backgroundColor: `${props.activeTab === tab.path ? tab.backdrop : ""}`}}>
                  <p className='tab-icon'>{props.activeTab === tab.path ? tab.active_img : tab.inactive_img}</p>
                </div>
                <div className="tab-name">{tab.name}</div>
              </Link>
            })}
          </div>
        </div>
    </>
  )
}

export default TabOptions