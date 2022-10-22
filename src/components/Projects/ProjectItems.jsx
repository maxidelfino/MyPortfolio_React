import { Github, Preview } from "../Icons/Icons";

const projectItems = [
    {
        title: 'ORMA Steel',
        description: 'Empresa de construcción en seco',
        previewIcon: <Preview/>,
        githubIcon: <Github/>,
        previewLink: 'https://maxidelfino.github.io/proyecto_coder/',
        githubLink: 'https://github.com/maxidelfino/proyecto_coder/',
        className: 'projects__card--one'
    },
    {
        title: 'Quality',
        description: 'Emprendimiento de indumentaria masculina',
        previewIcon: <Preview/>,
        githubIcon: <Github/>,
        previewLink: 'https://indumentaria-masculina.vercel.app/',
        githubLink: 'https://github.com/maxidelfino/indumentariaMasculina',
        className: 'projects__card--two'
    },
    {
        title: 'Soy Juan, tu tutor',
        description: 'Profesor que dicta clases a distancia',
        previewIcon: <Preview/>,
        githubIcon: <Github/>,
        previewLink: 'https://nicolasrodriguez3.github.io/soy-juan-tu-tutor/',
        githubLink: '#',
        className: 'projects__card--three'
    },
    {
        title: 'Resumen',
        description: 'Mi CV Digital ;)',
        previewIcon: <Preview/>,
        githubIcon: <Github/>,
        previewLink: 'Resume/index.html',
        githubLink: 'https://github.com/maxidelfino/MyPortfolio',
        className: 'projects__card--four'
    }
]

export default projectItems;