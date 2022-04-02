import React from 'react';
import './SolarPanels.css'
const SolarPanels = () => {
    return (
        <div className='modelsp-container'>
            <div className='headings-containersp'>
                <h2>Solar Panels</h2>
                <h5>Lowest Cost Solar Panels In America</h5>
            </div>
            <div className="buttons-containersp">
                <button className= 'order-btnsp' >CUSTOM ORDER</button>
                <button className = 'inventory-btnsp'>EXISTING INVENTORY</button>
            </div>
          
        </div>
    )
};

export default SolarPanels;
