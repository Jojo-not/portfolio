import React, { useEffect } from 'react'
import StartBackgound from '../components/StartBackgound'
import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import SkillsSection from '../components/SkillsSection'
import ProjectsSection from '../components/ProjectsSection'
import ContactSection from '../components/ContactSection'
import { Footer } from '../components/Footer'

const Home = () => {
useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);



  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
        <StartBackgound/>
        <NavBar/>
        <main>
          <HeroSection/>
          <AboutSection/>
          <SkillsSection/>
          <ProjectsSection/>
          <ContactSection/>
        </main>
        <Footer/>
    </div>
  )
}
export default Home