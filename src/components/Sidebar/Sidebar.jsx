import React from 'react';
import './Sidebar.css'
import { VscChromeClose } from "react-icons/vsc";



const Sidebar = ({ showSidebar, setShowSidebar })=> {
    const data = ['Existing Inventory', 'Used Inventory','Trade-In','Test Drive','Cybertruck', 'Roadster', 'Semi','Charging','Powerwall', 'Commercial Energy', 'Utilities', 'Find Us', 'Support']

    const handleSidebarbtn = () => {
        setShowSidebar(false)
    }
    return (
        <aside className={showSidebar ? 'sidebar-container' : 'sidebar-container hide'}
        >
            <button className='close-sidebar-btn' onClick={handleSidebarbtn}><VscChromeClose/></button>
            <div className='sidebar-options-container'>
                {
                    data.map((option) => {
                        return (
                            <span>{ option}</span>
                        )
                    })                    
                }
            </div>
        </aside>
    );
};

export default Sidebar;
