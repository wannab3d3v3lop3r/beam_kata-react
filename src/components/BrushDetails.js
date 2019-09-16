import React from 'react'

const brushColors = {
    blue: 'beam-brush-blue-box',
    pink: 'beam-brush-pink-box',
    chartreuse: 'beam-brush-chartreuse-box'
}

export default function BrushDetails(props) {
    const color = brushColors[props.brushPreference.brush_color]
    return (
        <div className="membership-brush">
            <h2 className="membership-brush-title beam-title">Brush Preference</h2>
            <p className="membership-brush-color beam-text inline offset"><span className="beam-label">Brush Color: </span>{props.brushPreference.brush_color}</p>
            <div className={color}></div>
            <p className="membership-brush-motor beam-text"><span className="beam-label">Motor Speed: </span>{props.brushPreference.motor_speed}</p>
            <p className="membership-brush-auto beam-text"><span className="beam-label">Auto Off: </span>{props.brushPreference.auto_off ? "Yes" : "No"}</p>
        </div>
    )
}
