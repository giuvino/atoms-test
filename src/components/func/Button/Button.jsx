import React from 'react'
import './button.css'

function Button(props) {
    return (
        <div
            className='whiteButton'
            style={{
                background: `${props.bgColor}`
            }}
        >{props.buttonLabel}</div>
    )
}

export default Button