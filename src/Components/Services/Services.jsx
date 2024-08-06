import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from '../Card/Card';
import Resume from './Resume.jpg'
import { motion } from 'framer-motion'
// import { themeContext } from "../../context";
// import { useContext } from "react";

const Services = () => {
    // const theme = useContext(themeContext);
    // const darkMode = theme.state.darkMode;
    const transition = { duration: 1, type: 'string' }
    return (
        <div className="services" id='Services'>

            {/*Left side*/}
            <div className="awesome">
                <span>My Awesome </span>
                <span>services</span>
                <spane>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga neque  <br />
                    cumque rerum adipisci ipsum Lorem ipsum dolor sit amet consectetur,<br />
                    adipisicing elit. Repudiandae expedita aliquid ullam, vero voluptas sunt <br />
                    quos error, doloribus obcaecati, delectus optio perferendis beatae mollitia?<br />
                    Ex odit impedit architecto possimus dolor!.</spane>
                <a href={Resume} download>
                    <button className="button s-button">Download CV</button>
                </a>
                <div className="blur s-blur" style={{ background: "#ABF1FF94" }}></div>
            </div>

            {/*Right side*/}
            <div className="cards">
                <motion.div
                    whileInView={{ left: '14rem' }}
                    initial={{ left: '20rem' }}
                    transition={transition}
                    style={{ left: '14rem' }}>
                        <Card
                        emoji={HeartEmoji}
                        heading={'Design'}
                        detail={"Figma, Sketch, Photshop, Adobe, CorelDraw"}
                        />
                </motion.div>

                {/* Second card */}
                <motion.div
                    whileInView={{ left: '-4rem' }}
                    initial={{ left: '-18rem' }}
                    transition={transition}
                    style={{ top: "12rem", left: "-4rem" }}>

                    <Card
                        emoji={Glasses}
                        heading={"Developer"}
                        detail={"Html, CSS, Javascript, React, C++"}
                    />
                </motion.div>

                {/* Third card */}
                <motion.div
                    whileInView={{ left: '14rem' }}
                    initial={{ left: '19rem' }}
                    transition={transition}
                    style={{ top: "10rem", left: "14rem" }}>

                    <Card
                        emoji={Humble}
                        heading={"UI/UX"}
                        detail={"Canva, CSS, Wordpress, photoshop"}
                    />
                </motion.div>
            </div>
        </div>
    )
}

export default Services