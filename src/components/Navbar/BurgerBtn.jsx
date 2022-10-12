import React from 'react'

const BurgerBtn = (props) => {
    return (
        <>
            <div className="nav-icon" onClick={props.handleClick}>
                <div className={`nav-burger ${props.clicked ? 'burger-closed' : 'burger-open'}`}></div>
            </div>
        </>
    )
}

export default BurgerBtn