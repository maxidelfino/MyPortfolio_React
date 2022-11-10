import React from 'react';
import { Bootstrap, Css, Figma, Git, Html, JavaScript, MaterialUI, MongoDB, MySQL, NodeJs, ReactJs, Redux, Sass } from "../Icons/Icons";

const technologiesItemsTop = [
    {
        title: 'HTML',
        svg: <Html />
    },
    {
        title: 'CSS',
        svg: <Css />
    },
    {
        title: 'Sass',
        svg: <Sass />
    },
    {
        title: 'JavaScript',
        svg: <JavaScript />
    }
]

const technologiesItemsMiddle = [
    {
        title: 'React Js',
        svg: <ReactJs />
    },
    {
        title: 'Node Js',
        svg: <NodeJs />
    },
    {
        title: 'MongoDB',
        svg: <MongoDB />
    },
    {
        title: 'MySQL',
        svg: <MySQL />
    }
]

const technologiesItemsBot = [
    {
        title: 'Bootstrap',
        svg: <Bootstrap />
    },
    {
        title: 'Material UI',
        svg: <MaterialUI />
    },
    {
        title: 'Figma',
        svg: <Figma />
    },
    {
        title: 'Redux',
        svg: <Redux />
    },
    {
        title: 'Git',
        svg: <Git />
    }
]

export { technologiesItemsTop, technologiesItemsMiddle, technologiesItemsBot };
