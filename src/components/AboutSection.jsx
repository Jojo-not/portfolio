import { Brain, Briefcase, Code, User } from 'lucide-react'
import React from 'react'

function AboutSection() {
  return (
    <section id='about' className='py-24 px-4 relative'>
      {""}
      <div className='container mx-auto max-w-5xl'>
        <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
          About <span className ="text-primary">Me</span>
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
          <div className='space-y-6'>
            <h3 className='text-2xl font-semibold'>
              Turning Ideas into Interactive Experiences
            </h3>
            <p className='text-muted-foreground'>
              {""}
              As a new system developer, I am eager to build and optimize reliable solutions while 
              continuously learning modern technologies to create efficient and user-focused applications.
            </p>
            <p className='text-muted-foreground'>
              {""}
              I’m a system developer who loves building reliable solutions, especially the behind-the-scenes 
              logic that makes applications run smoothly and efficiently. I’m always learning, always coding.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 pt-4 justify-center' >
              <a href="#contact" className='cosmic-button'>
                {""}
                Get In Touch
              </a>
              <a href="/public/Diez, Jowen Miguel L. CV.pdf" download className='px-5 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 '>
                Download CV
              </a>
            </div>

          </div>
          <div className='grid grid-cols-1 gap-6'>
             <div className='gradient-border p-6 card-hover'>
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <Code className='h-6 w-6 text-primary'/>
                </div>
                <div className='text-left'>
                  <h4 className='font-semibold text-lg'>System Development</h4>
                  <p className='text-muted-foreground'>
                    Crafting seamless and efficient systems with a focus on user experience.
                  </p>
                </div>
              </div>
             </div>
             <div className='gradient-border p-6 card-hover'>
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <Brain className='h-6 w-6 text-primary'/>
                </div>
                <div className='text-left'>
                  <h4 className='font-semibold text-lg'>Back-End Development</h4>
                  <p className='text-muted-foreground'>
                    I handle the logic, data, and performance behind every great app.
                  </p>
                </div>
              </div>
             </div>
             <div className='gradient-border p-6 card-hover'>
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <Briefcase className='h-6 w-6 text-primary'/>
                </div>
                <div className='text-left'>
                  <h4 className='font-semibold text-lg'>Project Management</h4>
                  <p className='text-muted-foreground'>
                    Leading project from conception to completion with agle
                    methodologies.
                  </p>
                </div>
              </div>
             </div>
         
          </div>

        </div>

      </div>

    </section>
  )
}

export default AboutSection