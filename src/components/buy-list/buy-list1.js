import React from 'react';
import './buy.css'
import '../../index.css'
import img1 from "../../images/logo_black.png";

const BuyList = () => {
    return (
        <body>
        <section>
            <div className='cards-list'>
                <ul className='cards-ul'>
                    <li className='card-element'>
                        <div className='window-card'>
                            <img src={img1}></img>
                            <div className='right-card'>
                                <div className='text'>
                                    <p className='author'>betrayalove2</p>
                                    <p className='title'>FLORA</p>
                                    <p className='time'>12:15</p>
                                </div>
                            </div>
                            <img className='play-stop' width='100px' height='100px' src={img1}></img>
                        </div>
                    </li>
                    <li className='card-element'>
                        <div className='window-card'>
                            <img src={img1}></img>
                            <div className='right-card'>
                                <div className='text'>
                                    <p className='author'>betrayalove2</p>
                                    <p className='title'>FLORA</p>
                                    <p className='time'>12:15</p>
                                </div>
                            </div>
                            <img className='play-stop' src={img1}></img>
                        </div>
                    </li>

                </ul>
            </div>
        </section>
        </body>
    );
}


export default BuyList;