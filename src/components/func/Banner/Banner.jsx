import React from 'react'
import './banner.css'
import Button from '../Button/Button'

function Banner(props) {
    return (
        <div className='titleBar1'
            style={{
                background: `${props.bgColor}`
            }}
        >
            <h1>{props.bannerTitle}</h1>
            <div className='buttonContainer'>
                <Button
                    buttonLabel='ambiente'
                    bgColor='#E2F1E8'
                />
                <Button
                    buttonLabel='economia'
                />
                <Button
                    buttonLabel='mondo'
                    bgColor='#F1DADA'
                />
                <Button
                    buttonLabel='non profit'
                />
                <Button
                    buttonLabel='politica'
                    bgColor='#F1F1E2'
                />
                <Button
                    buttonLabel='società'
                />
                <Button
                    buttonLabel='welfare'
                />
            </div>
        </div>
    )
}

export default Banner