import React from 'react';
import cardServices from './ServiceItem';


const CardServices = () => {
    return (
        <>
            <div class="services__content">
                {cardServices.map((item, index) => {
                    return (
                        <div className="services__card" key={index}>
                            <div className="services__title">
                                <h3>{item.title}</h3>
                                <img src={item.svg} alt={item.alt} />
                            </div>
                            <p className="services__description">{item.description}</p>
                            <a href={item.link} className="services__btn">{item.linkTitle}</a>
                        </div>
                    );
                })}
            </div>
        </>
    )
}

export default CardServices;