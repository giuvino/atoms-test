import React from 'react'
import quotes from '../../../assets/images/quotes.svg'
import './quote.css'

function Quote(props) {
    return (
        <div className='quoteBanner'>
            <div>
                <h3 className='doubleQuotes'>“</h3>
            </div>
            <div className='textContainer'>
                <h1 className='quoteTitle'>{props.quoteText}</h1>
                <p className='quoteSource'>[{props.quoteSource}]</p>
            </div>
        </div>
    )
}

export default Quote