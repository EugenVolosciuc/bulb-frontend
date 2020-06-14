import React from 'react'

import Header from '../ui/Header.component'
import Footer from '../ui/Footer.component'

const BasePage = ({ children }) => {
    return (
        <>
            <Header />
            <div className="base-page">
                {children}
            </div>
            <Footer />
        </>
    )
}

export default BasePage