import React from 'react';
import './buy.css'
import '../../index.css'
import Card from '../Card'
import arr from '../array/arr'



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