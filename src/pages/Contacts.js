import AppHeader from "../components/app-header";
import './pages.css';
import vk from '../images/VK_black.svg';
import yt from '../images/YouTube_black.svg';
import ig from '../images/Instagram_black.svg';
import sc from '../images/SoundCloud_black.svg';
import {
    fadeInDownBig,
    fadeInLeftBig,
    fadeInRightBig,
    fadeInUpBig
} from 'react-animations';
import React, {Component} from 'react';
import styled, {keyframes} from 'styled-components';

// const Bounce = styled.div`animation: 2s ${keyframes`${bounce}`} infinite`;

const bounceAnimation = keyframes`${fadeInLeftBig}`;
const BouncyDiv = styled.div`
  animation: 2s ${bounceAnimation};`;
const bounceAnimation2 = keyframes`${fadeInRightBig}`;
const BouncyDiv2 = styled.div`
  animation: 2s ${bounceAnimation2};`;
const bounceAnimation3 = keyframes`${fadeInDownBig}`;
const BouncyDiv3 = styled.div`
  animation: 2s ${bounceAnimation3};`;
const bounceAnimation4 = keyframes`${fadeInUpBig}`;
const BouncyDiv4 = styled.div`
  animation: 2s ${bounceAnimation4};`;

export default class Contacts extends Component {
    render() {
        return (
            <div>
                <AppHeader/>
                <body className='contacts-body'>
                <div className='cont'>
                    <BouncyDiv><h1>CONTACTS</h1></BouncyDiv>
                    <BouncyDiv2><p>Here you can find even more beats or contact me if you want to purchase a beat.</p>
                    </BouncyDiv2>
                </div>
                <div className='logos'>
                    <BouncyDiv3><a target="_blank" rel="noopener noreferrer" href='https://vk.com/betrayalove1'><img
                        src={vk} alt='vk'
                        width='100px'
                        height='100px'/></a></BouncyDiv3>
                    <BouncyDiv4><a target="_blank" rel="noopener noreferrer"
                                   href='https://www.youtube.com/channel/UChUJfBn7STev9PWYLV_DPTg'><img src={yt}
                                                                                                        alt='yt'
                                                                                                        width='100px'
                                                                                                        height='100px'/></a></BouncyDiv4>
                    <BouncyDiv3><a target="_blank" rel="noopener noreferrer" href='https://www.instagram.com/'><img
                        src={ig} alt='ig'
                        width='100px'
                        height='100px'/></a></BouncyDiv3>
                    <BouncyDiv4><a target="_blank" rel="noopener noreferrer"
                                   href='https://soundcloud.com/betrayalove'><img src={sc}
                                                                                  alt='sc'
                                                                                  width='100px'
                                                                                  height='100px'/></a></BouncyDiv4>
                </div>
                </body>
            </div>
        )
    }
}


// const Contacts = () => {
//     return (
//         <div>
//             <AppHeader/>
//             <body>
//             <div className=''>
//                 <h1>CONTACTS</h1>
//                 <p>Here you can find even more beats or contact me if you want to purchase a beat.</p>
//             </div>
//             <bounce><h1>Hello Animation Bounce</h1></bounce>
//             <div className='logos'>
//                 <a target="_blank" rel="noopener noreferrer" href='https://vk.com/betrayalove1'><img src={vk} alt='vk'
//                                                                                                      width='100px'
//                                                                                                      height='100px'/></a>
//                 <a target="_blank" rel="noopener noreferrer"
//                    href='https://www.youtube.com/channel/UChUJfBn7STev9PWYLV_DPTg'><img src={yt} alt='yt'
//                                                                                         width='100px'
//                                                                                         height='100px'/></a>
//                 <a target="_blank" rel="noopener noreferrer" href='https://www.instagram.com/'><img src={ig} alt='ig'
//                                                                                                     width='100px'
//                                                                                                     height='100px'/></a>
//                 <a target="_blank" rel="noopener noreferrer" href='https://soundcloud.com/betrayalove'><img src={sc}
//                                                                                                             alt='sc'
//                                                                                                             width='100px'
//                                                                                                             height='100px'/></a>
//             </div>
//             </body>
//         </div>
//     )
// }
// export default Contacts;