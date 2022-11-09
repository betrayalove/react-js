import React from 'react';
import './buy.css'
import '../../index.css'
import img1 from "../../images/logo_black.png";
import { Col, Row } from 'antd';


const BuyList = () => {
    return (
        <body>
        <section>

            <div className='cards-list'>
                <ul className='cards-ul'>
                    <li className='card-element'>
                        <div className='div-top'>
                            <ul className='card-elements'>
                                <li className='text-el'>
                                    <img className='oblojka' src={img1}></img></li>
                                <li className='text-el'>
                                    <div className='text'>
                                        <p className='author'>betrayalove2</p>
                                        <p className='title'>FLORA</p>
                                        <p className='time'>12:15</p>
                                    </div>
                                </li>
                                <li className='text-el'>
                                    <img className='play-stop' src={img1}></img>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className='card-element'>
                        <ul className='card-elements'>
                            <li className='text-el'>
                                <img className='oblojka' src={img1}></img></li>
                            <li className='text-el'>
                                <div className='text'>
                                    <p className='author'>betrayalove2</p>
                                    <p className='title'>FLORA</p>
                                    <p className='time'>12:15</p>
                                </div>
                            </li>
                            <li className='text-el'>
                                <img className='play-stop' src={img1}></img>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </section>


        </body>
    );
}


export default BuyList;