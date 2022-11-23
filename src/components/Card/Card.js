import {Link} from "react-router-dom";
import '../../index.css'
import './buy.css'
import ReactAudioPlayer from "react-audio-player";
import React, { useState } from "react";

function Card(props) {
        const [isFavorite, setIsFavorite] = useState(false)
        return (
        <body>
        <section className='section-card'>
            <div className='card'>
                <ul className='elements'>
                    <li className='el'>
                        <Link to="/contacts">
                            <img className='oblojka' width={200} height={200} src={props.imageUrl} alt=''/>
                        </Link>
                    </li>
                    <li className='el ttl'>
                        <p className='author'>{props.author.toUpperCase()}</p>
                        <p className='title'>{props.title.toLowerCase()}</p>
                        <p></p>
                        <p className='player'><ReactAudioPlayer
                            src={props.audioUrl}
                            autoPlay={false}
                            controls
                            onAbort={true}
                            onCanPlay
                            volume={0.5}
                        /></p>
                    </li>
                    <li><button className={isFavorite ? 'but2 but' : 'but1 but'} onClick={() => setIsFavorite(v => !v)}>★</button></li>
                </ul>
            </div>
        </section>
        </body>
    )
}


export default Card;