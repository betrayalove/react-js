import React from 'react';
import './main-text.css'
import '../../index.css'
import img1 from '../../images/logo_black.png'
import {Link} from "react-scroll";



const MainText = () => {

    return (
        <body>
        <main>
            <section className='ftd-elements'>
                <div className="main-text">
                    <h2 className='ftd ftdd'>FOLLOW THE DREAM</h2>
                    <h1 className='ftd-additionally'>MARKETPLACE FOR THE SALE AND PURCHASE OF BEATS</h1>
                </div>
                <div className='ftd'>
                    <Link
                        activeClass="active"
                        to="new-beats-text"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        <button className="button-ftd">FOLLOW</button></Link>
                </div>
            </section>
            <section id='new-beats-text' className="new-beats">
                <p className='fake'>fake</p>
                <h3 className='new-beats-text'>NEW BEATS</h3>
                <div className='frame-new'>
                    <ul className="ul-new-beats">
                        <li className="new-beats-element">
                            <div className='new-beats-card'>
                                <img src={img1} alt='beat'></img>
                                <p>betrayalove1</p>
                            </div>
                        </li>
                        <li className="new-beats-element">
                            <div className='new-beats-card'>
                                <img src={img1} alt='beat'></img>
                                <p>betrayalove2</p>
                            </div>
                        </li>
                        <li className="new-beats-element">
                            <div className='new-beats-card'>
                                <img src={img1} alt='beat'></img>
                                <p>betrayalove3</p>
                            </div>
                        </li>
                        <li className="new-beats-element">
                            <div className='new-beats-card'>
                                <img src={img1} alt='beat'></img>
                                <p>MORE</p>
                            </div>
                        </li>
                    </ul>
                </div>

            </section>
            <section>
                <div>

                </div>
            </section>

        </main>
        </body>);
}

export default MainText;