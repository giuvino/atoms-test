import React from 'react'
import './articles.css'
import Tag from '../Tag/Tag'

function Articles(props) {
    return (
        <div
            className={props.articleStyle}
            style={{
                background: `${props.bgColor}`
            }}
        >
            <Tag
                tagLabel='migranti'
                bgColor='white'
            />
            <div className='titleContainer'>
                <h1>{props.articleName}</h1>
            </div>
        </div>
    )
}

export default Articles