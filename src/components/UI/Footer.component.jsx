import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="w-full flex justify-center blue-bg">
            <p className="text-base py-5 white-text">Bulb © {currentYear}. All rights reserved.</p>
        </footer>
    )
}

export default Footer