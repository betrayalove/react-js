import AppHeader from "../components/app-header";
import './pages.css';


fetch(
    'http://localhost:3001/cards'
)
    .then((res) => res.json())
    .then((data) => setCards(data[0]));

function setCards({title, author, id}) {
    document.body.insertAdjacentHTML(
        'afterbegin', `
            <h1>${title}</h1>
            <h2>${author}</h2>`
    )
}

function cardList(props) {
    const numbers=props.title
    const listItems = numbers.map((number) =>
        <li key={number.toString()}>{number}</li>);
    return <ul>{listItems}</ul>
}

const Test = () => {
    return (
        <div>

            <AppHeader/>
            {cardList()}
        </div>)
}
export default Test;
