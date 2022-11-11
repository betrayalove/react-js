import React from 'react';
import './buy.css'
import '../../index.css'
import img1 from "../../images/logo_black.png";
import { Col, Row } from 'antd';
import Card from "../card/Card";

const arr = [
    {
        id: 1,
        author: 'betrayalove1',
        title: 'devil',
        time: '53:22',
        imageUrl: require('../../images/logo_black.png')
    },
    {
        id: 2,
        author: 'betrayalove1',
        title: 'devil',
        time: '53:22',
        imageUrl: require('../../images/logo_black.png')
    },
    {
        id: 3,
        author: 'betrayalove1',
        title: 'devil',
        time: '53:22',
        imageUrl: require('../../images/logo_black.png')
    },
    {
        id: 4,
        author: 'betrayalove2',
        title: 'flora',
        time: '53:22',
        imageUrl: require('../../images/logo_white.png')
    },
];


const BuyList = () => {
    return (
        <div className='product'>
            {arr.map((obj) => (
                <Card
                    author={obj.author}
                    title={obj.title}
                    time={obj.time}
                    imageUrl={obj.imageUrl}
                />
            ))}
        </div>
    );
}


export default BuyList;