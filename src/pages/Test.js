import AppHeader from "../components/app-header";
import './pages.css';
import {useEffect, useState} from "react";


const Test = () => {

    const [cards, setCards] = useState()

    useEffect(() => {
        fetch(
            'http://localhost:3001/cards'
        )
            .then((res) => res.json())
            .then((data) => setCards(data));
    }, [])

    return (
        <div>
            <AppHeader/>
            {cards?.map(c=><div key={c.id}>
                <p>{c.title}</p>
                <p>{c.author}</p>
            </div>)}
        </div>)
}
export default Test;
