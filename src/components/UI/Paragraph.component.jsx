import React from 'react'

const Paragraph = ({children, style, className}) => {
    return <p style={style} className={`text-xl ${className}`}>{children}</p>
}

export default Paragraph