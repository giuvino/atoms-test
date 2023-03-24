import React from 'react'
import './tag.css'

function Tag(props) {
    return (
        <div
            className='whiteTag'
            style={{
                background: `${props.bgColor}`
            }}
        >{props.tagLabel}
        </div>
    )
}

export default Tag