import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import {ReactComponent as SvgLogo} from './../img/logo.svg';
import {ReactComponent as CartIcon} from './../img/icon-cart.svg';
import avatar from './../img/image-avatar.png'
import './../css/Header.css'
import Cart from './Cart';
import { ContextCart } from './../context/contextCart';


const IconAmount = styled.button`
    position: absolute;
    top: -12px;
    left: 12px;
    background-color: var(--orange);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    text-align: center;
    border:none;
    color: #fff;
    font-weight: 700;
    z-index:2;
`;

const Svg = styled(SvgLogo)`
    width: 100%;
`;

const SvgCart = styled(CartIcon)`
    transform: scale(1.2);
`;
 
const Header = () => {

    const {cart} = useContext(ContextCart)

    const [showCart, setShowCart] = useState(false);

    const handleChange = () => {
        showCart ? setShowCart(false) : setShowCart(true)
    }

    const menuOpen = () => {
        const hamburgerMenu = document.querySelector('.hamburger');
        hamburgerMenu.classList.toggle('active_hamburger');


        const menuMobile = document.querySelector('.menu-mobile')
        menuMobile.classList.toggle('open')

        const backgroundMenu = document.querySelector('.background-menu')
        backgroundMenu.classList.toggle('open-background')
    }

    return (
        <>
            <header>
                <div className='container'>
                    <div className='nav'>
                        <button onClick={() => menuOpen()} type="button" className="hamburger">
                            <span className="line"></span>
                            <span className="line"></span>
                            <span className="line"></span>
                        </button>

                        <div className='logo-nav'>
                            <Svg />
                        </div>
                    
                        <div onClick={handleChange} className='icon-cart'>
                            {cart.amounts && <IconAmount><span>{cart.amounts}</span></IconAmount>}
                            
                            <SvgCart />
                        </div>

                        <div className='avatar'>
                            <img src={avatar} alt="" />
                        </div>

                        <nav className='menu_desktop'>
                            <ul className='menu_desktop__items'>
                                <li><a href="#">Collections</a> </li>
                                <li><a href="#">Men</a></li>
                                <li><a href="#">Women</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </nav>

                        <nav className='menu-mobile'>
                            <div className='menu-mobile__items'>
                                <ul>
                                    <li><a href="#">Collections</a> </li>
                                    <li><a href="#">Men</a></li>
                                    <li><a href="#">Women</a></li>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Contact</a></li>
                                </ul>
                            </div>
                        </nav>

                    </div>
                </div>
                <div className='background-menu'></div>
            </header>
            {
                showCart && <Cart  />
            }
            
        </>
    );
}
 
export default Header;
