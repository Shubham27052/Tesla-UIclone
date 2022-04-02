import React, {useState} from 'react';
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Model3 from './components/Model3/Model3'
import ModelS from './components/ModelS/ModelS.jsx'
import ModelX from './components/ModelX/ModelX'
import ModelY from './components/ModelY/ModelY'
import SolarPanels from './components/SolarPanels/SolarPanels';
import SolarRoof from './components/SolarRoof/SolarRoof'
import Accessories from './components/Accessories/Accessories';
import Footer from './components/Footer/Footer'
import Sidebar from './components/Sidebar/Sidebar'

import {Routes, Route } from 'react-router-dom'
import PageModelS from './Pages/PageModelS'
import PageModelE from './Pages/PageModelE'
import PageModelX from './Pages/PageModelX'
import PageModelY from './Pages/PageModelY'
import PageSolarRoof from './Pages/PageSolarRoof'
import PageSolarPanel from './Pages/PageSolarPanel'
const MainApp = () => {

  

  return (
    <>   
   
        <Routes>
        <Route path="/" element={<App />} />
        <Route path = "/models" element={<PageModelS/>} />
        <Route  path = "/modele" element={<PageModelE/>}/>
        <Route path = "/modelx" element={<PageModelX/>} />
        <Route path = "/modely" element={<PageModelY/>} />
        <Route path = "/solarroof" element={<PageSolarPanel/>}/> 
         <Route path = "/solarpanels" element={<PageSolarRoof/>} />
        </Routes>
        
      </>
    )
};

const App = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  console.log(showSidebar);
  


  return (<>
    <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
    <div className='app' >
          
          <Navbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
          <Model3 /> 
          <ModelX />
          <ModelS />
          <ModelY />  
          <SolarPanels />
          <SolarRoof />
      <Accessories />
       <Footer/>
    </div>
    </>
  )


}



export default MainApp;
