import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Headroom from 'react-headroom'
import debounce from 'lodash/debounce'

import '../../style/hamburger.min.css'

const Header = () => {
    const [hamIsActive, setHamIsActive] = useState(false)
    const [passedAboveTheFold, setPassedAboveTheFold] = useState(false)

    const checkScreen = debounce(() => {
        const screenHeight = window.innerHeight
            || document.documentElement.clientHeight
            || document.body.clientHeight

        if (window.scrollY <= screenHeight && passedAboveTheFold) setPassedAboveTheFold(false)
        if (window.scrollY > screenHeight && !passedAboveTheFold) setPassedAboveTheFold(true)
    }, 100)

    useEffect(() => {
        window.addEventListener('scroll', checkScreen)

        return () => { 
            window.removeEventListener('scroll', checkScreen)
        }
    })

    return (
        <Headroom>
            <header className={`w-full py-5 ${passedAboveTheFold ? 'white-bg blue-text' : 'blue-bg white-text'}`}>
                <div className="container flex justify-between items-center">
                    <div className="logo-container">
                        <h4 className="text-3xl font-bold">Bulb</h4>
                    </div>
                    <nav className="hidden md:block">
                        <ul className="flex justify-center">
                            <li className="mx-3"><Link>Get Ideas</Link></li>
                            <li className="mx-3"><Link>Get Inspired</Link></li>
                            <li className="mx-3"><Link>Get Collaborative</Link></li>
                            <li className="mx-3"><Link>About</Link></li>
                        </ul>
                    </nav>
                    <button
                        onClick={() => setHamIsActive(!hamIsActive)}
                        className={`hamburger hamburger--slider pr-0 md:hidden ${hamIsActive && 'is-active'}`}
                        type="button"
                    >
                        <span className="hamburger-box">
                            <span className="hamburger-inner"></span>
                        </span>
                    </button>
                    {
                        hamIsActive &&
                        <div className="w-full mx-3 pt-2 fixed right-0" style={{ top: 61 }}>
                            <nav className="md:hidden">
                                <ul className="flex flex-col">
                                    <li className="my-1 text-right"><Link>Get Ideas</Link></li>
                                    <li className="my-1 text-right"><Link>Get Inspired</Link></li>
                                    <li className="my-1 text-right"><Link>Get Collaborative</Link></li>
                                    <li className="my-1 text-right"><Link>About</Link></li>
                                </ul>
                            </nav>
                        </div>
                    }
                </div>
            </header>
        </Headroom>

    )
}

export default Header