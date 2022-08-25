import React from "react";
import Carrousel from "./carrousel";
import TimeUntil from "./timeUntil";

import useSound from 'use-sound';
import audio from '../../resources/audio.mp3';





const Featured = () => {
    const [play, { stop }] = useSound(audio,{ volume: 0.5 })
    const [isHovering, setIsHovering] = React.useState(false)
    
    const audioFunc=(audio_state) => {
        if (!audio_state) {
            setIsHovering(true)
            play()
        }
        else {
            setIsHovering(false)
            stop()
        }
    }


    return (
        <div className="featured_container"  onClick={ () => {audioFunc(isHovering)}}>
            <Carrousel/>
            <div className="artist_name">
                <div className="wrapper">
                    Lana Del Rey
                </div>
            </div>
            <TimeUntil/>
        </div>
    )
}

export default Featured



  
