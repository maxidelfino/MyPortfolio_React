import React from 'react'
import DotCursor from '../components/DotCursor/DotCursor'
import HeroSection from '../components/HeroSection/HeroSection'
import PageLoader from '../components/PageLoader/PageLoader'
import Technologies from '../components/Technologies/Technologies'
import ProjectsContainers from './ProjectsContainers'
import ServicesContainer from './ServiceContainer'

const MainContainer = () => {
  return (
    <>
        <PageLoader/>
      <header>
        <HeroSection/>
      </header>
      <main>
        <DotCursor/>
        <ServicesContainer/>
        <ProjectsContainers/>
        <Technologies/>
      </main>
    </>
  )
}

export default MainContainer