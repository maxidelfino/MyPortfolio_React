import React from 'react';
import { Instagram, LinkedIn, Twitter, Github } from '../Icons/Icons';
import StyleHero from './StyleHero';

const HeroSection = () => {
  return (
    <>
      <StyleHero>
      <div className="hero">
        <div className="hero__container">
          <div className="hero__content">
            <h1 className="hero__title title-animation">¡Hola! Soy Maxi Delfino<span className="tech__title-h2--dot">.</span></h1>

            <div className="hero__typed-text">
              <span className="typed-text"></span><span className="bar">&nbsp;</span>
            </div>

            <div className="hero__p">
              <p className="hero__paragraph">Desde Argentina, actualmente enfocado en la maquetación y desarrollo front-end. Mi objetivo laboral es desempeñarme al 100% como desarrollador, adquiriendo herramientas del área constantemente. Valoro la simplicidad y la eficiencia.</p>
            </div>

            <a href="#contact" className="hero__btn">¡Comencemos!</a>

            <div className="hero__social">
              <ul>
                <li><a href="https://twitter.com/Maxiidelfino" target="_blank" rel="noreferrer noopener external"><Twitter/></a></li>
                <li><a href="https://www.instagram.com/maxi.delfino/" target="_blank" rel="noreferrer noopener external"><Instagram/></a></li>
                <li><a href="https://www.linkedin.com/in/maximiliano-delfino?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bk7ifhsywTJS7aVpi%2FatEjQ%3D%3D" target="_blank" rel="noreferrer noopener external"><LinkedIn/></a></li>
                <li><a href="https://github.com/maxidelfino" target="_blank" rel="noreferrer noopener external"><Github/></a></li>
              </ul>
            </div>
          </div>
          <div className="hero__img"><img src="https://firebasestorage.googleapis.com/v0/b/portfolio-with-react-22410.appspot.com/o/Javascript_Flatline.svg?alt=media&token=1beb5777-69c0-44c6-ab8c-96e573918cd2" alt="Hero"/></div>
        </div>
      </div>
      </StyleHero>
    </>
  )
}

export default HeroSection