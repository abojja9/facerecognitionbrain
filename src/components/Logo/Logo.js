import React from 'react'
import Tilt from 'react-parallax-tilt';
import face from './face.png'

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2" options={{max: 55}} style={{height: 125, width: 125}}>
                <div className="Tilt-inner">
                    <img alt="logo" src={face}></img>
                </div>
            </Tilt>
        </div>
    )
}

export default Logo
