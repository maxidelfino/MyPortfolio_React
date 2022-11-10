import React from 'react';

const Element1 = () => {
    return (
        <>
            <div className="element-1 rellax" data-rellax-speed="1">
                <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-with-react-22410.appspot.com/o/CSS_Outline.svg?alt=media&token=ec6bf386-bb0b-4d24-8ee5-130cef2ad920" alt="CSS Element" />
            </div>
        </>
    )
}

const Element2 = () => {
    return (
        <>
            <div className="element-2 rellax" data-rellax-speed="1">
                <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-with-react-22410.appspot.com/o/Javascript_Outline.svg?alt=media&token=f8819014-f46f-40cb-aef5-2e655feb2d0b" alt="JavaScript element" />
            </div>
        </>
    )
}

const Element3 = () => {
    return (
        <>
            <div className="element-3 rellax" data-rellax-speed="1">
                <img src="assets/parallax/Coding _Two Color.svg" alt="Coding Element"/>
            </div>
        </>
    )
}

export { Element1, Element2, Element3 };