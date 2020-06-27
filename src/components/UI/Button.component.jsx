import React from 'react'

// Button types:
//     - primary
//     - bordered
//     - TODO: disabled 

// Button background colors:
//     - yellow
//     - blue
//     - transparent

// Button border colors:
//     - yellow
//     - blue
//     - transparent

const Button = ({ type = 'primary', bgColor, borderColor, className, children, ...otherProps }) => {
    return (
        <button
            className={`btn btn-${type} ${bgColor && `btn-bg-${bgColor}`} ${borderColor && `btn-border-${borderColor}`} text-xl ${className}`}
            {...otherProps}
        >
            {children}
        </button>
    )
}

export default Button