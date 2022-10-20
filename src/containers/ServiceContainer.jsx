import React from 'react';
import AboutMe from '../components/AboutMe/AboutMe';
import {Element1, Element2} from '../components/Parallax/Element1';
import CardServices from '../components/Services/CardServices';

const ServiceContainer = () => {
    return (
        <>
            <section id="services" className="services">
                <div className="parallax">
                    <Element1/>
                </div>
                
                <div className="services__title-scroll">
                    <h2 className="services__title-h2 title-animation">Servicios<span className="services__title-h2--dot">.</span></h2>
                </div>

                <div className="services__wrapper">
                    <CardServices />
                    <AboutMe/>
                </div>

                <div className="parallax">
                    <Element2/>
                </div>
            </section>
        </>
    )
}

export default ServiceContainer;