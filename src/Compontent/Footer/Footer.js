import React from "react";
import './Footer.css'

const Footer = () =>{
    return(
        <div className="Footer">
            <div className="content row">
                <div className="head col-md-12 text-center">
                    <h6 className="">Register</h6>
                    <h6 className="">Firum</h6>
                    <h6 className="">Affiliate</h6>
                    <h6 className="">FAQ</h6>

                </div>
                <div className="links col-md-12">
                    <a href=""><i className="fab fa-facebook-square"></i></a>
                    <a href=""><i className="fab fa-twitter"></i></a>
                    <a href=""><i className="fab fa-youtube"></i></a>
                    <a href=""><i className="fab fa-linkedin-in"></i></a>
                    <a href=""><i className="fab fa-telegram-plane"></i></a>
                    <a href=""><i className="fab fa-instagram-square"></i></a>

                </div>
                <div className="rights col-md-12"><i className="fas fa-copyright"></i> 2021. AR&Food. All rights reserved</div>
            </div>
        </div>
    )
}
export default Footer;