import React from 'react';
import '../../all.min.css';

import './Home.css';
import imgPride from '../../img/home/pexels-chan-walrus-958545.jpg';
import imgIngredients1 from '../../img/home/istockphoto-1443601790-1024x1024.jpg';
import imgIngredients2 from '../../img/home/pexels-nerfee-mirandilla-3186654.jpg';
import imgIngredients3 from '../../img/home/pexels-ella-olsson-1640773.jpg';
import imgIngredients4 from '../../img/home/pexels-rajesh-tp-1624487.jpg';


const Home = () => {
    return(
        <div className='Home'>
            <header>
                <div className='container row'>
                    <div className='col-md-6'>
                        <h2>Good food choices are good investments.</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora cupiditate nulla  distinctio saepe quaerat voluptates.</p>
                        <button className='btn'>order now</button>
                        <button className='btn'>learn more</button>
                    </div>
                    <div className='col-md-6 img-home'>

                    </div>

                </div>
            </header>
            <section className='numbers'>
                <div className='row'>
                    <div className='col-md-3'>
                        <h2>1287+</h2>
                        <h6>SAVINGS</h6>
                    </div>
                    <div className='col-md-3'>
                        <h2>5786+</h2>
                        <h6>PHOTOS</h6>
                    </div>
                    <div className='col-md-3'>
                        <h2>1440+</h2>
                        <h6>ROCKETS</h6>
                    </div>
                    <div className='col-md-3'>
                        <h2>7110+</h2>
                        <h6>GLOBES</h6>
                    </div>
                </div>
            </section>
            <section className='pride'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6 img-pride'>
                            <img src={imgPride} title="img-pride" />
                        </div>
                        <div className='col-md-6 content-pride'>
                            <h2>We pride ourselves on making real food from the best ingredients.</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora cupiditate nulla  distinctio saepe quaerat voluptates.</p>
                            <button className='btn'>learn more</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className='ingredients'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6 content-ingredients'>
                            <h2>We make everything by hand with the best possible ingredients.</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, quis repellendus minima omnis nesciunt fugiat sequi perspiciatis. Possimus unde quisquam minus dolorem similique, debitis dicta inventore mollitia commodi, eos alias eaque, fugiat ad molestias perspiciatis blanditiis consectetur eius! Quos sit architecto neque ea odio quidem asperiores accusantium modi deleniti at!</p>
                            <button className='btn'>learn more</button>
                        </div>
                        <div className='col-md-6 img-ingredients row'>
                            <div className='group-img col-md-12'>
                                <img src={imgIngredients1} title="img-ingredients1" />
                                <img src={imgIngredients2} title="img-ingredients2" />
                                <img src={imgIngredients4} title="img-ingredients4" />
                                <img src={imgIngredients3} title="img-ingredients3" />

                            </div>
                            <div className='group-img2 col-md-12'>
                            </div>
                            

                            
                        </div>
                        
                    </div>
                </div>
            </section>
            <section className='dessert'>
                <div className='container'> 
                    <h1 className='col-md-12'>When a man's staomach is full it makes no difference whether he is rich or poor.</h1>
                    <p className='col-md-12'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum sequi odit, mollitia nisi delectus quam repellendus. Iure autem facere quo!</p>
                    <button className='btn'>watch our story</button>
                </div>
            </section>
        </div>
    )
}

export default Home;