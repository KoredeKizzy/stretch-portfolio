import React from 'react'
import './Portfolio.css'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import Sidebar from "../../img/sidebar.png"
import Ecommerce from "../../img/ecommerce.png"
import HOC from "../../img/hoc.png"
import Webtech1 from "../../img/Webtech1.png"
import Webtech2 from "../../img/Webtech2.png"
import Webtech3 from "../../img/Webtech3.png"
import Webtech4 from "../../img/Webtech4.png"
import Webtech5 from "../../img/Webtech5.png"
import MusicApp from "../../img/musicapp.png"
import { themeContext } from "../../context";
import { useContext } from "react";


const Portfolio = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="portfolio" id='Portfolio'>

      {/* Heading */}
      <span style={{color: darkMode? 'white': ''}}>Recent Projects</span>
      <span> Portfolio</span>


      {/* slider */}
      <Swiper
        spaceBetween={10}
        slidesPerView={2}
        grabCursor={true}
        className='portfolio-slider'
      >
        <SwiperSlide>
          <img src={Sidebar} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={HOC} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Webtech1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Webtech2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Webtech3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Webtech4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Webtech5} alt="" />
        </SwiperSlide>
      </Swiper>

    </div>
  )
}

export default Portfolio