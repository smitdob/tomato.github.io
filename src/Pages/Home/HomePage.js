import React, { useState } from 'react'
import Header from '../../Component/Common/Header/Header'
import TabOptions from '../../Component/Common/tabOption/TabOptions'
import Footer from '../../Component/Common/Footer/Footer'
import Dilevery from '../../Component/DIlevery/Dilevery'
import DiningOut from "../../Component/DiningOut/DiningOut"
import NightLife from '../../Component/NightLife/NightLife'
import Error from '../../Component/Common/Error/Error'
import { Route, Routes } from "react-router-dom";
import { Navigate } from 'react-router-dom'
import ItemDetail from '../../Component/Common/ItemDetail/ItemDetail'
import { useLocation } from 'react-router-dom';
import Cart from '../../Component/cart/Cart'
// import { diningOut } from '../../data/diningOut'
import Checkout from '../../Component/Checkout page/Checkout'


const HomePage = (props) => {
  const location = useLocation()
  const [activeTab, setActiveTab] = useState(`${location.pathname.slice(1)}`)
// const dining=diningOut;

//   const [dataset, setDataset] = useState(dining)
  return (
    <>
      <Header setActiveTab={setActiveTab} />
      <TabOptions setActiveTab={setActiveTab} activeTab={activeTab} />
      <Routes>
        <Route exact path='/tomato.github.io' element={<Navigate to='/dilevery' />} />
        <Route exact path='/' element={<Navigate to='/dilevery' />} />
        <Route exact path='' element={<Navigate to='/dilevery' />} />
        <Route exact path='/dilevery' element={<Dilevery props={activeTab} />} />
        <Route exact path='/diningout' element={<DiningOut props={activeTab} />} />
        <Route exact path='/nightlife' element={<NightLife props={activeTab} />} />
        <Route exact path={`/${activeTab}/:id`} element={<ItemDetail />} />
        <Route exact path='/cart' element={<Cart setActiveTab={setActiveTab} activeTab={activeTab} />} />
        <Route exact path='/checkout' element={ <Checkout setActiveTab={setActiveTab} activeTab={activeTab}/>} />
        <Route exact path='*' element={<Error setActiveTab={setActiveTab} activeTab={activeTab}/>} />
      </Routes>
      <Footer />
    </>
  )
}

export default HomePage