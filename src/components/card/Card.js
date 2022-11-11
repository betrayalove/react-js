import React, {useState} from 'react';
import {Link} from "react-router-dom";
import '../../index.css'
import './buy.css'
import ReactAudioPlayer from "react-audio-player";
import sound1 from "../../sounds/1.mp3";

function Card(props) {
    // const [isPlaying, setIsPlaying] = useState(false)

    return (
        <body>
        <section className='section-card'>
            <div className='card'>
                <ul className='elements'>
                    <li className='el'><img className='oblojka' width={200} height={200} src={props.imageUrl} alt=''/></li>
                    <li className='el'>
                        <p className='author'>{props.author.toUpperCase()}</p>
                        <p className='title'>{props.title.toLowerCase()}</p>
                        <p className='totalTime'>{props.time}</p>
                        <p className='player'><ReactAudioPlayer
                            src={sound1}
                            autoPlay={false}
                            controls
                            onAbort={true}
                            onCanPlay
                            volume={0.5}
                        /></p>
                    </li>
                    {/*<li className='el'><img className='playButton' width={50} height={50} src={isPlaying ? Pause : Play}*/}
                    {/*         onClick={() => {*/}
                    {/*             setIsPlaying(v => !v)*/}
                    {/*         }}/>< /li>*/}
                </ul>
            </div>
        </section>
        </body>

    )
}


export default Card;