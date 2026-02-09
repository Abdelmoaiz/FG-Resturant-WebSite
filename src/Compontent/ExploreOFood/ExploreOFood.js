import React from 'react'
import './ExploreOFood.css'
import '../../all.min.css'
import vegetable from "../../img/ExperFoods/vvv.jpg";
import burger from "../../img/ExperFoods/burger2.jpg";
import Stuffed from "../../img/ExperFoods/istockphoto-1149294733-1024x1024.jpg";

const ExploreOFood = () => {
    return(
        <div className='ExploreOFood'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 content'>
                        <h2 className='text-center'>Explore Our Foods</h2>
                        <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, quis repellendus minima omnis nesciunt fugiat sequi perspiciatis. Possimus unde quisquam minus dolorem similique, debitis dicta inventore mollitia commodi.</p>
                    </div>
                    <div className='col-md-12 row text-center box-imags'>
                        <div className='col-md-4'>
                            <img src={vegetable} title="vegetable sandwich"/>
                            <div className='box'>
                                <h4>Rainbow Vegetable Sandwich</h4>
                                <p>Time: 15 - 20 Minutes | Serves: 1</p>
                                <h2>$10.50 <span>$11.70</span></h2>
                                <button className='btn'>order now</button>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <img src={burger} title="burger"/>

                            <div className='box'>
                                <h4>Vegetarian Burger</h4>
                                <p>Time: 30 - 45 Minutes | Serves: 1</p>
                                <h2>$9.20 <span>$10.50</span></h2>
                                <button className='btn'>order now</button>

                            </div>
                        </div>
                        <div className='col-md-4'>
                            <img src={Stuffed} title="Stuffed"/>
                            <div className='box'>
                                <h4>Raspberry Stuffed French Toast</h4>
                                <p>Time: 10 - 15 Minuts | Serves: 1</p>
                                <h2>$12.50 <span>$13.20</span></h2>
                                <button className='btn'>order now</button>

                            </div>
                            
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default ExploreOFood;