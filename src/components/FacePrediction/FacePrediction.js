import React from 'react';
import "./FacePrediction.css"

const FacePrediction = ({box, imgUrl}) => {
    return (
        <div className="center ma">
            <div className="absolute mt2">
                <img id="inputImage" alt="" src={imgUrl}/>
                <div className="bounding-box" 
                style={{top: box.topRow,  right:box.rightCol, bottom: box.bottomRow, left: box.leftCol }} ></div>
            </div>
        </div>
    )

    // style="inset: 12.6775% 56.3749% 73.3148% 36.9952%;"
}

export default FacePrediction
