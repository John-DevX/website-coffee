import React from 'react';
import '../css/main.css';
import aboutImg from '../img/about.jpg';
import menu1 from '../img/menu1.png';
import menu2 from '../img/menu2.png';
import menu3 from '../img/menu3.png';
import menu4 from '../img/menu4.png';
import menu5 from '../img/menu5.png';
import menu6 from '../img/menu6.png';
import product1 from '../img/product1.png';
import quote from '../img/quote.png';
import profile1 from '../img/profile1.png';
import profile2 from '../img/profile2.jpg';
import profile3 from '../img/profile3.jpg';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faEyeSlash, faHeart, faShoppingCart, faStar} from '@fortawesome/free-solid-svg-icons';
import { MdEmail } from 'react-icons/md';
import { FaUserAlt } from 'react-icons/fa';
import { HiPhone } from 'react-icons/hi';
export default function Main() {
  return (
    <div>
        <About />
        <Menu />
        <Product />
        <Review />
        <Contact />
    </div>
  )
}

export const About = () =>{
    return(
    <div className='container-about' id='about'>
        <h1>about <span id='span-us'>us</span></h1>
        <section className='about'>
            <img className='img-about' src={aboutImg} alt="About" />
            <div>
                <h2>What Makes Our Coffee Special?</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi eius iste dolore non magnam tempora corrupti, unde, quas ipsam vel voluptatibus consequuntur voluptate facere harum ut, accusamus temporibus atque quidem.</p>
                <button>Learn more</button>
            </div>
        </section>
    </div>
    )
}

export const Menu = ()=>{
    return(
        <div className='container-menu' id='menu'>
                <h1>Our <span id='span-menu'>menu</span></h1>
            <section className='menu'>
                <div className='card'>
                    <img class='img-menu' src={menu1} alt="s" />
                    <h4>Tasy And Healty</h4>
                    <small>$15.99</small>
                    <small className='full-price'>$ 20.99</small> <br />
                    <button>Add To Cart</button>
                </div>
                <div className='card'>
                    <img class='img-menu' src={menu2} alt="s" />
                    <h4>Tasy And Healty</h4>
                    <small>$15.99</small>
                    <small className='full-price'>$ 20.99</small><br />
                    <button>Add To Cart</button>
                </div>
                <div className='card'>
                    <img class='img-menu' src={menu3} alt="s" />
                    <h4>Tasy And Healty</h4>
                    <small>$15.99</small>
                    <small className='full-price'>$ 20.99</small><br />
                    <button>Add To Cart</button>
                </div>
                <div className='card'>
                    <img class='img-menu' src={menu4} alt="s" />
                    <h4>Tasy And Healty</h4>
                    <small>$15.99</small>
                    <small className='full-price'>$ 20.99</small><br />
                    <button>Add To Cart</button>
                </div>
                <div className='card'>
                    <img class='img-menu' src={menu5} alt="s" />
                    <h4>Tasy And Healty</h4>
                    <small>$15.99</small>
                    <small className='full-price'>$ 20.99</small><br />
                    <button>Add To Cart</button>
                </div>
                <div className='card'>
                    <img class='img-menu' src={menu6} alt="s" />
                    <h4>Tasy And Healty</h4>
                    <small>$15.99</small>
                    <small className='full-price'>$ 20.99</small><br />
                    <button>Add To Cart</button>
                </div>
            </section>
        </div>
    )
}

export const Product = ()=>{
    return(
        <div className='container-product' id='products'>
                <h1>Latest <span id='span-product'>Products</span></h1>
            <section className='product'>
                <div className='card card-product'>
                <section className='icons-product'>
                    <FontAwesomeIcon className='icon-p' icon={faShoppingCart}/>
                    <FontAwesomeIcon className='icon-p' icon={faHeart}/>
                    <FontAwesomeIcon className='icon-p' icon={faEyeSlash}/>
                </section>
                <img className='img-product' src={product1} alt="Product1" />
                <h4>fresh coffee</h4>
                <section className='star-icon'>
                    <FontAwesomeIcon className='icon-s' icon={faStar}/>
                    <FontAwesomeIcon className='icon-s' icon={faStar}/>
                    <FontAwesomeIcon className='icon-s' icon={faStar}/>
                    <FontAwesomeIcon className='icon-s' icon={faStar}/>
                </section>
                </div>
                <div className='card card-product'>
                <section className='icons-product'>
                    <FontAwesomeIcon className='icon-p' icon={faShoppingCart}/>
                    <FontAwesomeIcon className='icon-p' icon={faHeart}/>
                    <FontAwesomeIcon className='icon-p' icon={faEyeSlash}/>
                </section>
                <img className='img-product' src={product1} alt="Product1" />
                <h4>fresh coffee</h4>
                <section className='star-icon'>
                    <FontAwesomeIcon className='icon-s' icon={faStar}/>
                    <FontAwesomeIcon className='icon-s' icon={faStar}/>
                    <FontAwesomeIcon className='icon-s' icon={faStar}/>
                    <FontAwesomeIcon className='icon-s' icon={faStar}/>
                </section>
                </div>
                <div className='card card-product'>
                <section className='icons-product'>
                    <FontAwesomeIcon className='icon-p' icon={faShoppingCart}/>
                    <FontAwesomeIcon className='icon-p' icon={faHeart}/>
                    <FontAwesomeIcon className='icon-p' icon={faEyeSlash}/>
                </section>
                <img className='img-product' src={product1} alt="Product1" />
                <h4>fresh coffee</h4>
                <section className='star-icon'>
                    <FontAwesomeIcon className='icon-s' icon={faStar}/>
                    <FontAwesomeIcon className='icon-s' icon={faStar}/>
                    <FontAwesomeIcon className='icon-s' icon={faStar}/>
                    <FontAwesomeIcon className='icon-s' icon={faStar}/>
                </section>
                </div>
            </section>
        </div>
    )
}


export const Review = ()=>{
    return(
        <div className='container-review' id='review'>
            <h1>Customer's <span id='span-review'>Review</span></h1>
            <section className='review'>
                <div className='card card-review'>
                    <img className='quote' src={quote} alt="Quote" />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem officia est suscipit repellendus quisquam quo placeat, illo fuga iusto, magnam quam architecto. Excepturi praesentium totam doloribus ratione nihil magnam quam.</p>
                    <img className='profile' src={profile1} alt="profile1" />
                    <h5>Malvin</h5>
                    <section className='star-icon'>
                    <FontAwesomeIcon className='icon-s' icon={faStar}/>
                    <FontAwesomeIcon className='icon-s' icon={faStar}/>
                    <FontAwesomeIcon className='icon-s' icon={faStar}/>
                    <FontAwesomeIcon className='icon-s' icon={faStar}/>
                </section>
                </div>
                <div className='card card-review'>
                    <img className='quote' src={quote} alt="Quote" />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem officia est suscipit repellendus quisquam quo placeat, illo fuga iusto, magnam quam architecto. Excepturi praesentium totam doloribus ratione nihil magnam quam.</p>
                    <img className='profile' src={profile2} alt="profile2" />
                    <h5>Álvaro Morte</h5>
                    <section className='star-icon'>
                    <FontAwesomeIcon className='icon-s' icon={faStar}/>
                    <FontAwesomeIcon className='icon-s' icon={faStar}/>
                    <FontAwesomeIcon className='icon-s' icon={faStar}/>
                    <FontAwesomeIcon className='icon-s' icon={faStar}/>
                </section>
                </div>
                <div className='card card-review'>
                    <img className='quote' src={quote} alt="Quote" />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem officia est suscipit repellendus quisquam quo placeat, illo fuga iusto, magnam quam architecto. Excepturi praesentium totam doloribus ratione nihil magnam quam.</p>
                    <img className='profile' src={profile3} alt="profile3" />
                    <h5>John</h5>
                    <section className='star-icon'>
                    <FontAwesomeIcon className='icon-s' icon={faStar}/>
                    <FontAwesomeIcon className='icon-s' icon={faStar}/>
                    <FontAwesomeIcon className='icon-s' icon={faStar}/>
                    <FontAwesomeIcon className='icon-s' icon={faStar}/>
                    <FontAwesomeIcon className='icon-s' icon={faStar}/>
                </section>
                </div>
            </section>
        </div>
    )
}

export const Contact = ()=>{
    const pauseEvent = e =>{
        e.preventDeffault();
    }
    return(
       <div className='container-contact' id='contact'>
            <h1><span id='span-contact'>Contact </span>Us</h1>
            <section className='contact'>
                <div>
                <iframe className='map' width="700" height="440" src="https://maps.google.com/maps?width=700&amp;height=440&amp;hl=en&amp;q=Lissabon%2C%20Portugal+(Av.%20Hilton%20Souto%20Maior%2C%20S%2FN%20-%20Mangabeira%2C%20Jo%C3%A3o%20Pessoa%20-%20PB%2C%2058055-018)&amp;ie=UTF8&amp;t=&amp;z=10&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                </div>
                <div className='form'>
                    <h1>Get in touch</h1>
                    <form>
                        <div>
                            <input type="text" className='input-contact' placeholder='Name' required/>
                            <FaUserAlt className='icon-form user'/>
                        </div>
                        <div>
                            <input type="email" className='input-contact' placeholder='Email' required/>
                            <MdEmail className='icon-form email' />
                        </div>

                        <div>
                            <input type="number"  className='input-contact' placeholder='Number' required/>
                            <HiPhone className='icon-form iphone' />
                        </div>
                    <button onClick={pauseEvent}>Contact Now</button>
                    </form>
                </div>
            </section>
        </div> 
    )
}