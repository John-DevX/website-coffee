import {React, useState} from 'react';
import '../css/header.css';
import logo from '../img/logo.png';
import coffee1 from '../img/menu1.png';
import coffee2 from '../img/menu2.png';
import coffee3 from '../img/menu3.png';
import coffee4 from '../img/menu4.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch, faShoppingCart, faX } from '@fortawesome/free-solid-svg-icons';
export default function Header() {
    const [show, setShow] = useState(false);
    const showInput = ()=>{
        setShow(!show);
    }

    const [active, setActive] = useState(false);
    const menushow = ()=>{
        setActive(!active);
    } 
    return (
        <div>
        <header>
                    <section className='logo'><img className='logo' src={logo} alt="Logo" /></section>
                    <section className='navigator'>
                        <nav>
                            <ul>
                                <li><a href='/'>Home</a></li>
                                <li><a href="#about">About</a></li>
                                <li><a href="#menu">Menu</a></li>
                                <li><a href="#products">Products</a></li>
                                <li><a href="#review">Review</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </nav>
                    </section>
                <section className='icons'>
                <FontAwesomeIcon  onClick={showInput} className='search' icon={faSearch} />
                <input className={show ? 'show-input' : 'show-input-hidde' } type="text" />
                <FontAwesomeIcon onClick={menushow} className='cart' icon={faShoppingCart} />
                    <div className= {active ? 'menu-cart-show': 'menu-cart' }>
                        <ul>
                            <li>
                                <img className='img-cart' src={coffee1} alt="coffee" />
                                <span className='msg-product item1'>Cart item 01</span>
                                <span className='msg-product price1'>$15.99</span>
                                <FontAwesomeIcon className='icon-x x1' icon={faX}/>
                            </li>
                            <li> <img className='img-cart' src={coffee2} alt="coffee" />
                                 <span className='msg-product item2'>Cart item 02</span>
                                 <span className='msg-product price2'>$15.99</span>
                                 <FontAwesomeIcon className='icon-x x2' icon={faX}/>
                            </li>
                            <li> <img className='img-cart' src={coffee3} alt="coffee" />
                                 <span className='msg-product item3'>Cart item 01</span>
                                 <span className='msg-product price3'>$15.99</span>
                                 <FontAwesomeIcon className='icon-x x3' icon={faX}/>
                            </li>
                            <li> <img className='img-cart' src={coffee4} alt="coffee" />
                                 <span className='msg-product item4'>Cart item 01</span>
                                 <span className='msg-product price4'>$15.99</span>
                                 <FontAwesomeIcon className='icon-x x4' icon={faX}/>
                            </li>
                        </ul>
                        <button className='btn-cart'>Checkout Now</button>
                    </div>
                </section>
            <section className='home' id='home'>
                <h2>Fresh coffe in <br/> the morning </h2>
                <div className='lorem-container'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim libero eaque porro quam iure numquam quasi dolor odit reprehenderit quod, iste culpa dolorum consequatur expedita nisi sed officia cupiditate deserunt.</p>
                </div>
                <button>Get it now</button>
            </section>
        </header>
    </div>
  )
}

