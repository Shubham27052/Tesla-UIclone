import React from 'react';
import './Model3.css'
import {motion} from 'framer-motion'

const Model3 = () => {
    
    
    return (
        <div className='model3-container'>
            <div className='headings-container3'>
                <motion.h2
                    initial={{
                        y: 40,
                        opacity:0
                    }}
                    animate={{
                        y: 0,
                        opacity: 1
                    }}
                    transition={{
                        duration:0.7
                    }}>
                    Model 3
                </motion.h2>
                <motion.h5
                    initial={{
                        y: 40,
                        opacity:0
                    }}
                    animate={{
                        y: 0,
                        opacity: 1
                    }}
                    transition={{
                        delay: 0.7,
                        duration: 1
                    }}
                >Order Online for Touchless Delivery</motion.h5>
            </div>
            <div className="buttons-container3">
                <motion.button className='order-btn3'
                    initial={{
                        x: -100,
                        opacity:0
                    }}
                    animate={{
                        x: 0,
                        opacity: 1
                    }}
                    transition={{
                        delay: 0.7,
                        duration:1
                    }}
                >CUSTOM ORDER</motion.button>
                <motion.button className='inventory-btn3'
                 initial={{
                        x: 100,
                        opacity:0
                    }}
                    animate={{
                        x: 0,
                        opacity: 1
                    }}
                    transition={{
                        delay: 0.7,
                        duration:1
                    }}
                >EXISTING INVENTORY</motion.button>
            </div>
            <motion.div className='down-arrow-container3'
                animate={{
                y:[5,-5,0]
                }}
                transition={{
                 duration: 2,
                    yoyo:Infinity
                }}
            
            >
                <svg xmlns='http://www.w3.org/2000/svg' fill="black" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></svg>

            </motion.div>
        </div>
    )
};

export default Model3;
