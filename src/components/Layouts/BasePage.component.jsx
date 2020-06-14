import React from 'react'

import Header from '../UI/Header.component'
import Footer from '../UI/Footer.component'

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