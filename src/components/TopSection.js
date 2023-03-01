import React from 'react';
import { Button } from './Button';
import '../App.css';
import './TopSection.css';



function HeroSection() {
    return (
        <div className="hero-container">
            <video src="videos/video-1.mp4" autoPlay loop muted />
            <div className='hero-textandbtns'>

                <h1 className='hero-h1'>ODKRYJ NASZ ŚWIAT</h1>
                <p>Na co czekasz? </p>


                <div className='hero-btns'>
                    <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                        ZACZYNAMY
                    </Button>

                    <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>

                        OBEJRZYJ NAS <i className='far fa-play-circle' />

                    </Button>




                </div>
            </div>
        </div>
    )
}

export default HeroSection
