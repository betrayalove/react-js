import React, {useEffect, useState} from 'react';
import './buy.css'
import '../../index.css'
import Card from "../card/Card";


const BuyList = () => {

    const [cards, setCards] = useState()

    useEffect(() => {
        fetch(
            'http://localhost:3001/cards'
        )
            .then((res) => res.json())
            .then((data) => setCards(data));
    }, [])


    return (
        <div className='product'>
            {cards?.map((obj) => (
                <Card
                    author={obj.author}
                    title={obj.title}
                    audioUrl={obj?.audioUrl}
                    imageUrl={obj?.imageUrl}
                />
            ))}

            {/*{goods_list.map((obj) => (*/}
            {/*    <Card*/}
            {/*        author={obj.author}*/}
            {/*        title={obj.title}*/}
            {/*        audioUrl={obj.audioUrl}*/}
            {/*        imageUrl={obj.imageUrl}*/}
            {/*    />*/}
            {/*))}*/}



            {/*{cards?.map(obj=><div key={obj.id}>*/}
            {/*    <Card>*/}
            {/*    <p>{obj.title}</p>*/}
            {/*        <p>{obj.author}</p>*/}
            {/*            <p>{obj.audioUrl}</p>*/}
            {/*                <p>{obj.imageUrl}</p></Card>*/}
            {/*</div>)}*/}
        </div>
    );
}


export default BuyList;