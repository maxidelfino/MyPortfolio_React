import React from 'react';
import projectItems from './ProjectItems';

const Projects = () => {
    return (
        <>
            {projectItems.map((item, index) => {
                return (
                    <div className={`projects__card ${item.className}`} key={index}>
                        <div className="projects__text">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <div className="projects__btn">
                                <a href={item.previewLink} target="_blank" rel="noreferrer noopener external">{item.previewIcon} Preview</a>
                                <a href={item.githubLink} target="_blank" rel="noreferrer noopener external">{item.githubIcon} GitHub</a>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default Projects