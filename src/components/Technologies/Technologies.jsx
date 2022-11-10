import React from 'react'
import { technologiesItemsBot, technologiesItemsMiddle, technologiesItemsTop } from './TechnologiesItems'

const Technologies = () => {
  return (
    <>
        <div className="tech__logos-top">
            {technologiesItemsTop.map((item, index) => {
                return (
                    <div className="tech__zone" key={index}>
                        {item.svg}
                        <p>{item.title}</p>
                    </div>
                )
            })}
        </div>
        <div className="tech__logos-middle">
            {technologiesItemsMiddle.map((item, index) => {
                return (
                    <div className="tech__zone" key={index}>
                        {item.svg}
                        <p>{item.title}</p>
                    </div>
                )
            })}
        </div>
        <div className="tech__logos-bot">
            {technologiesItemsBot.map((item, index) => {
                return (
                    <div className="tech__zone" key={index}>
                        {item.svg}
                        <p>{item.title}</p>
                    </div>
                )
            })}
        </div>
    </>
  )
}

export default Technologies