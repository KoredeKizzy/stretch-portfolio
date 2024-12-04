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
                <spane>With a proven track record of collaborating with industry giants like <br/> 
                    Upwork, Facebook, Amazon, and Shopify,<br/>
                    I bring a wealth of experience to every project.<br/> 
                    My expertise in web development has empowered these leading brands<br/> 
                    to enhance their digital<br/> 
                    platforms, improve user experiences, and drive growth.<br/> 
                    Whether you're a startup or an established<br/> 
                    business, I’m here to deliver the same level<br/> 
                    of excellence and innovation that has helped these <br/>
                    top brands succeed. Let's build something remarkable together.
                </spane>

                <button className="button s-button">Hire me</button>
                {/* <div className="blur s-blur" style={{ background: "#ABF1FF94" }}></div> */}
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