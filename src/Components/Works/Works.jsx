import React from 'react'
import './Works.css'
import Upwork from "../../img/Upwork.png"
import Fiverr from "../../img/fiverr.png"
import Amazon from "../../img/amazon.png"
import Shopify from "../../img/Shopify.png"
import Facebook from "../../img/Facebook.png"
import {motion} from 'framer-motion'



const Works = () => {
    return (
        <div className="works">
            <div className="awesome">
                <span>Works for All these </span>
                <span>Brands & Clients</span>
                <spane>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga neque  <br />
                    cumque rerum adipisci ipsum Lorem ipsum dolor sit amet consectetur,<br />
                    adipisicing elit. Repudiandae expedita aliquid ullam, vero voluptas sunt <br />
                    Ex odit impedit architecto possimus dolor!.
                </spane>

                <button className="button s-button">Hire me</button>
                <div className="blur s-blur" style={{ background: "#ABF1FF94" }}></div>
            </div>

            {/* Right side */}
            <div className="w-right">
                <motion.div 
                     initial={{rotate: 45}}
                     whileInView={{rotate: 0}}
                     viewport={{margin: '-40px'}}
                     transition={{duration: 3.5, type: 'spring'}}
                
                className="w-mainCircle">
                    <div className="w-secCircle">
                        <img src={Upwork} alt="Upwork Logo" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Fiverr} alt="Fiver Logo" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Amazon} alt="Amazon Logo" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Shopify} alt="Shopify Logo" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Facebook} alt="Facebook Logo" />
                    </div>
                </motion.div>
                {/* Background circle */}
                <div className="w-backCircle blueCircle"></div> 
                <div className="w-backCircle yellowCircle"></div>  
            </div>
        </div>
    )
}

export default Works