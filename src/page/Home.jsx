import React, { useEffect } from 'react'
import StartBackgound from '../components/StartBackgound'
import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import ProjectsSection from '../components/ProjectsSection'
import ContactSection from '../components/ContactSection'
import { Footer } from '../components/Footer'
import { GallerySection } from '../components/GallerySection'
import { ThemeToggel } from '../components/ThemeToggel'
import SkillsSection from '../components/SkillsSection'

const Home = () => {
useEffect(() => {
    document.documentElement.classList.add('light');
  }, []);



  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
       {/* <StartBackgound/> */} 
        <ThemeToggel/>
        <NavBar/>
        <main>
          <HeroSection/>
          <AboutSection/>
          <SkillsSection/>
          <GallerySection/>
          <ProjectsSection/>
          <ContactSection/>
        </main>
        <Footer/>
    </div>
  )
}
export default Home