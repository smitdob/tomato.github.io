import React, { useState } from 'react'
import Header from '../../Component/Common/Header/Header'
import TabOptions from '../../Component/Common/tabOption/TabOptions'
import Footer from '../../Component/Common/Footer/Footer'
import Dilevery from '../../Component/DIlevery/Dilevery'
import DiningOut from "../../Component/DiningOut/DiningOut"
import NightLife from '../../Component/NightLife/NightLife'
const HomePage = () => {
  const [activeTab, setActiveTab] = useState("Dilevery")
 
  
 

  return (
    <>
      <Header/>
        <TabOptions setActiveTab={setActiveTab} activeTab={activeTab} />
        {getCorrectScreen(activeTab)}
      <Footer />
    </>
  )
}

const getCorrectScreen = (Tab) => {
  switch (Tab) {
    case "Dilevery":
      return <Dilevery/>  
    case "Dining Out":
      return <DiningOut />
    case "NightLife":
      return <NightLife />
    default:
      return <Dilevery />
  }
}
export default HomePage