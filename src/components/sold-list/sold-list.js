import React from 'react';
import './sold.css'
import '../../index.css'
import Card from "../card/Card";
import sold_arr from "./sold_goods_list";


const SoldList = () => {
    return (
        <div className='product'>
            {sold_arr.map((obj) => (
                <Card
                    author={obj.author}
                    title={obj.title}
                    audioUrl={obj.audioUrl}
                    imageUrl={obj.imageUrl}
                    isActive={obj.isActive}
                />
            ))}
        </div>
    );
}


export default SoldList;