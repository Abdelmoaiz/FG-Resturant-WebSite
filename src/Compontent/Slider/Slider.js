import React from 'react'
import "./Slider.css"
import '../../all.min.css'
import avatar1 from "../../img/slider/avatar-05.png";
import avatar2 from "../../img/slider/avatar-04.png";
import avatar3 from "../../img/slider/team-08.jpg";
import avatar4 from "../../img/slider/avatar-06.png";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper styles
import 'swiper/swiper-bundle.min.css';



const Slider = () => {
    return(
        <div>
            <div className='Slider'>
                <div className='container'>
                    <h2>Testimonials</h2>
                    <div className='Content-slider'>
                        <Swiper className='Swiper'
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={50}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            scrollbar={{ draggable: true }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                            >
                            <SwiperSlide>
                                <div className=''>
                                    <div className='div-img'>
                                        <img src={avatar1} title="vegetable sandwich"/>

                                    </div>
                                    <div className='box'>
                                        <p>I'm front end developer (html - css - javascript - react.js - bootstrap - sass) . i learn this courses online by Osama Elzero Courses , I work freelance .</p>
                                        <h3>Yassin Ramadan - Front End Developer</h3>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className=''>
                                    <div className='div-img'>
                                        <img src={avatar2} title="vegetable sandwich"/>
                                    </div>
                                    <div className='box'>
                                        <p>I'm back end developer (html - css - php - mysql) , I learn this online in Udacity courses elit. Tempora cupiditate nulla  distinctio saepe quaerat voluptates.</p>
                                        <h3>Mahmoud Ramadan - Back End Developer</h3>

                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className=''>
                                <div className='div-img'>
                                        <img src={avatar3} title="vegetable sandwich"/>

                                    </div>
                                    <div className='box'>
                                        <p>I'm Full steak developer (html - css - javascript - node.js - mongodb) , I learn this with My brothers Tempora cupiditate nulla  distinctio saepe quaerat voluptates.</p>
                                        <h3>Jana Abdelmoaiz - Full Steak Developer</h3>

                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className=''>
                                    <div className='div-img'>
                                        <img src={avatar4} title="vegetable sandwich"/>
                                    </div>
                                    <div className='box'>
                                        <p>I'm ui/ux designer  amet consectetur adipisicing elit. Tempora cupiditate nulla  distinctio saepe quaerat voluptates.</p>
                                        <h3>Mohammed Abdelmoaiz - UI/UX Designer</h3>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ...
                        </Swiper>

                    </div>
                    
                
                </div>

                
            </div>
            <div className='Questions'>
                <div className='container'>
                    <h2>Frequently Asked Questions</h2>
                    <div className='row class-Quest text-center'>
                        <div className='col-md-5 quest'>
                            <h5>* Is Foodera Bread really baked fresh each day?</h5>
                            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit, quis repellendus minima omnis nesciunt fugiat sequi perspiciatis. Possimus unde quisquam minus dolorem similique, debitis dicta inventore mollitia commodi.</p>

                        </div>
                        <div className='col-md-5 quest'>
                            <h5>* Do you bake breads containing animal fats or products?</h5>
                            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit, quis repellendus minima omnis nesciunt fugiat sequi perspiciatis. Possimus unde quisquam minus dolorem similique, debitis dicta inventore mollitia commodi.</p>

                        </div>
                        <div className='col-md-5 quest'>
                            <h5>* Can I order your products online?</h5>
                            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit, quis repellendus minima omnis nesciunt fugiat sequi perspiciatis. Possimus unde quisquam minus dolorem similique, debitis dicta inventore mollitia commodi.</p>

                        </div>
                        <div className='col-md-5 quest'>
                            <h5>* When are you opening a shop near me?</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit, quis repellendus minima omnis nesciunt fugiat sequi perspiciatis. Possimus unde quisquam minus dolorem similique, debitis dicta inventore mollitia commodi.</p>

                        </div>
                    </div>
                </div>

            </div>
        </div>
        
    )
}

export default Slider;