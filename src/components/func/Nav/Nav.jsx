import React from 'react'
import './nav.css'
import '../../../assets/styles/index.css'
import user from '../../../assets/images/user.png'
import menu from '../../../assets/images/menu.svg'
import search from '../../../assets/images/search.svg'
import Button from '../Button/Button'

function Nav() {
    return (
        <nav className='navWrapper'>
            <div className='loginBar'>
                <div className='contributeBar'>
                    <p>Contribuisci</p>
                    <p>Abbonati</p>
                </div>

                <div className='loginContainer'>
                    <img src={user}></img>
                    <p>Accedi</p>
                </div>
            </div>
            <div className='menuSearch'>
                <div className='menuContainer'>
                    <img src={menu}></img>
                </div>
                <div className='spacer'></div>
                <div className='menuContainer'>
                    <img src={search}></img>
                </div>
            </div>
            <div className='navBar'>
                <div className='topicContainer'>
                    <h2>Tutti i temi</h2>
                    <h2>Ambiente</h2>
                    <h2>Economia</h2>
                    <h2>Mondo</h2>
                    <h2>Non Profit</h2>
                    <h2>Politica</h2>
                    <h2>Società</h2>
                    <h2>Welfare</h2>
                </div>
                <div className='switchContainer'>
                </div>
            </div>
        </nav>
    )
}

export default Nav