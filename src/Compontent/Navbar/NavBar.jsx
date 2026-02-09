import React from 'react';
import style from "./NavBar.module.css";
import { NavLink } from 'react-router-dom';
const NavBar = () => {
    return(
        <div className={`${style.NavBar}`}>
            <nav className='container'>
                <div className={`${style.row} row`}>
                    <div className={`${style.logo} col-lg-3`}>
                        <h2>AR&Food</h2>
                    </div>
                    <ul className={`${style.links} col-lg-9`}>
                        <NavLink to="/"  exact className='home'>Home</NavLink>
                        <a href='../' className='about'>About us</a>
                        <a href='../ExploreOFood/exploreFoods' className='exploreFoods'>Explore Foods</a>
                        <a href='/reviews' className='reviews'>Reviews</a>
                        <a href='/faq' className='faq'>FAQ</a>
                        <a href='' className={`${style.txtnum}`}>1800 789 123</a>
                    </ul>
                </div>
                
            </nav>
            
        </div>
    )
}

export default NavBar;