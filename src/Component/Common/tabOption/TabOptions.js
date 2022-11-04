import React from 'react'
import "./tabOption.css";
const tabs = [
  {
    id: 1,
    name: "Dilevery",
    active_img: <i className="fa-solid fa-bicycle" style={{ color: "red", display:"flex"}}></i>,
    backdrop: "#FCEEC0",
    inactive_img: <i className="fa-solid fa-bicycle" style={{ color: "grey",display:"flex" }}></i>
  },
  {
    id: 2,
    name: "Dining Out",
    active_img: <i className="fa-solid fa-plate-wheat" style={{ color: "red",display:"flex" }}></i>,
    backdrop: "#c0d14d",
    inactive_img: <i className="fa-solid fa-plate-wheat" style={{ color: "grey",display:"flex" }}></i>
  },
  {
    id: 3,
    name: "NightLife",
    active_img: <i className="fa-solid fa-bottle-water" style={{ color: "red",display:"flex" }}></i>,
    backdrop: "#d984a6",
    inactive_img: <i className="fa-solid fa-bottle-water" style={{ color: "grey",display:"flex" }}></i>
  }

];
const TabOptions = (props) => {
  return (
    <>
      <div className="tab-option">
        <div className="option-wrapper">
          {tabs.map((tab) => {
            return <div onClick={() => { props.setActiveTab(tab.name)}}
              className={`tab-item absolute-center cur-po ${props.activeTab === tab.name && 'active-tab'}`} key={tab.id}
            >
              <div className='tab-image-container absolute-center' style={{
                backgroundColor: `${props.activeTab === tab.name ? tab.backdrop : ""}`
              }}>
                <p className='tab-icon'>{props.activeTab===tab.name? tab.active_img: tab.inactive_img}</p>
              </div>
              <div className="tab-name">{tab.name}</div>
            </div>
          })}
        </div>
      </div>
    </>
  )
}

export default TabOptions