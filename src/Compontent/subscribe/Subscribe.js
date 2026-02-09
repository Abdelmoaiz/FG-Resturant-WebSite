import React from "react";
import './Subscribe.css'

const Subscribe = () =>{
    return(
        <div className="Subscribe text-center">
            <h2>Hurry up! Subscribe our newsletter and get 25% off</h2>
            <p>Limited time offer for this month. No credit card required</p>
            <div className="inputs row">
                <input className="col-md-8" type='email' placeholder="Email Address here" />
                <button className="btn col-md-4">Subscribe</button>
            </div>
        </div>
    )
}
export default Subscribe;