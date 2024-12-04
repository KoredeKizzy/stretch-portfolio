import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Testimonial.css';
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css'



const Testimonial = () => {
    const clients = [
        {
            img: profilePic1,
            review:
                "Working with Korede was an absolute game-changer for our company. Their deep understanding of web development and dedication to delivering top-notch results transformed our online presence. From concept to execution, they were professional, innovative, and always attentive to our needs. I highly recommend Korede for anyone looking to elevate their digital platforms and achieve outstanding results."
        },
        {
            img: profilePic2,
            review:
                "I had the pleasure of collaborating with Korede on several projects, and their expertise in web development truly stands out. They consistently delivered high-quality work on time, helping us optimize our website for better user engagement and conversions. Their creative solutions and ability to turn complex ideas into functional designs made a significant impact on our marketing efforts. I can't recommend them enough."
        },
        {
            img: profilePic3,
            review:
                "I’ve worked with many developers, but Korede is in a league of their own. Their attention to detail, technical proficiency, and commitment to excellence ensured that our project was a success. They took the time to understand our goals and delivered a website that exceeded our expectations in both functionality and aesthetics. Korede is a true professional, and I would gladly work with them again on future projects."
        },
        {
            img: profilePic4,
            review:
                "Korede brought our vision to life with his exceptional web development skills. They were responsive, reliable, and always willing to go the extra mile to ensure our website was perfect. Their ability to blend creativity with technical know-how resulted in a site that not only looks fantastic but also performs flawlessly. I highly recommend Korede to anyone looking for a developer who delivers results with a personal touch."
        },

    ]
    return (
        <div className="t-wrapper" id='Testimonial'>
            <div className="t-heading">
                <span>Clients always get</span>
                <span> Exceptional Work </span>
                <span>from me</span>
                {/* <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
                <div className="blur t-blur2" style={{ background: "skyblue" }}></div> */}
            </div>
            {/* slider */}
            <Swiper
                modules={[Pagination]}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {clients.map((client, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className="testimonial">
                                <img src={client.img} alt="" />
                                <span>{client.review}</span>
                            </div>
                        </SwiperSlide>
                    )
                }
                )}
            </Swiper>
        </div>
    );
};

export default Testimonial