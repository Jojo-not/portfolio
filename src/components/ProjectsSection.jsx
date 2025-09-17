import { Description, Title } from '@radix-ui/react-toast'
import { ArrowRight, ExternalLink, Github,X } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import React from 'react'
import { useState } from 'react'
const projects = [
    {id: 1,
    title:"Ticketing System",
    description:"A streamlined support platform that helps teams manage, track, and resolve tickets efficiently. ",
    image:"/projects/ticketing/dashbordtick.png",
    images:[
      "/projects/ticketing/dashbordtick.png",
      "/projects/ticketing/7.png",
      "/projects/ticketing/4.png",
      "/projects/ticketing/5.png",
      "/projects/ticketing/1.png",
      "/projects/ticketing/qt.png",
      "/projects/ticketing/3.png",
      "/projects/ticketing/8.png",
      "/projects/ticketing/9.png",
    ],
    tags:["React. js" ,"TailwindCSS","Laravel"],
    demoUrl:"#",
    githubUrl:"https://github.com/Jojo-not/Ticketing" },
    {id: 2,
    title:"Vendo Print",
    description:"It’s fast, convenient, and perfect for schools, libraries, and public areas where on-demand printing is needed",
    image:"/projects/vendo printer/1.png",
    images:[
      "/projects/vendo printer/1.png",
      "/projects/vendo printer/2.png",
      "/projects/vendo printer/3.png",
      "/projects/vendo printer/4.png",
      "/projects/vendo printer/5.png"
    ],
    tags:["React. js" ,"TailwindCSS","JavaScript"],
    demoUrl:"https://vendo-print.vercel.app/printer",
    githubUrl:"https://github.com/Jojo-not/VendoPrint" },
    {id: 3,
    title:"Project Zomboid",
    description:"Project Zomboid is the ultimate zombie survival RPG. Scavenge, build, craft, fight, farm, and survive as long as you can in a post-apocalyptic world. ",
    image:"/projects/PZ/1.png",
    images:[
      "/projects/PZ/1.png",
      "/projects/PZ/2.png",
      "/projects/PZ/3.png",
    ],
    tags:["HTML" ,"Bootstrap","CSS"],
    demoUrl:"https://jojo-not.github.io/PZ/",
    githubUrl:"https://github.com/Jojo-not/PZ" },
     {id: 4,
    title:"Housing Loan Calculator",
    description:"A simple web application that allows users to calculate their monthly housing loan payments based on the loan amount, interest rate, and loan term.",
    image:"/projects/Loan/housingloan.png",
    images:[
      '/projects/Loan/housingloan.png'
    ],
    tags:["React. js" ,"TailwindCSS","JavaScript"],
    demoUrl:"https://housing-loan-calculator.netlify.app/",
    githubUrl:"https://github.com/Jojo-not/PZ" },
    
]

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };
  return (
    <section id='projects' className='py-24 px-4 relative'>
        <div className='container mx-auto max-w-5xl'>
            {}
            <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>Featured <span className='text-primary'>Projects</span></h2>
        
        <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
            Here are some of my recent projects. Each project was carefull
            crafted with attention to details, performance, and user experience.
        </p>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key} 
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div onClick={() => openModal(project)} className="h-48 overflow-hidden cursor-pointer">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag,idx) => (
                    <span key={idx} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                </p>

                 <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>

                </div>
                </div>
 
            ))}
        </div>
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Jojo-not"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
        </div>

      {isModalOpen && selectedProject && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
    <div className="bg-white dark:bg-background rounded-lg shadow-lg max-w-3xl w-full relative">
      {/* Close Button */}
      <button
        onClick={closeModal}
        className="absolute top-4 right-4 text-gray-500 hover:text-red-500 z-50"
      >
        <X size={24} />
      </button>

      {/* Swiper with Navigation */}
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        spaceBetween={10}
        slidesPerView={1}
        loop
        className="rounded-t-lg max-h-[500px] w-full"
      >
        {selectedProject.images?.map((img, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={img}
              alt={`Slide ${idx + 1}`}
              className="w-full h-full object-cover rounded-t-lg"
            />
          </SwiperSlide>
        ))}

        {/* Prev / Next Buttons */}
        <button className="swiper-button-prev absolute top-1/2 left-4 z-20 transform -translate-y-1/2 bg-transparent rounded-full p-2 hover:text-black transition">
        </button>
        <button className="swiper-button-next absolute top-1/2 right-4 z-30 transform -translate-y-1/2 bg-transparent rounded-full p-2 hover:text-black transition">

        </button>
      </Swiper>
    </div>
  </div>
)}
    </section>
  )
}

export default ProjectsSection