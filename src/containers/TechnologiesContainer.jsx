import React from 'react'
import { Element3 } from '../components/Parallax/Parallax'
import Technologies from '../components/Technologies/Technologies'

const TechnologiesContainer = () => {
  return (
    <>
        <section id="technologies" className="tech">
            <div className="tech__wrapper">
                <div className="tech__title">
                    <h2 className="tech__title-h2 title-animation">Tecnologías<span className="tech__title-h2--dot">.</span></h2>
                </div>
                <Technologies />
                <div className="parallax">
                    <Element3 />
                </div>
            </div>
        </section>
    </>
  )
}

export default TechnologiesContainer