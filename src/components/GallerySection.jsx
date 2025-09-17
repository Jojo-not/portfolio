import { ArrowRight, ExternalLink, Github,X } from 'lucide-react'
import 'swiper/css';
import 'swiper/css/navigation';

import React, { useState } from 'react'
const Gallery = [
    {id: 1,
      image:"/gallery/achievement/achievement1.png",
      images:[
        "/gallery/achievement/achievement1.png",]},

    {id: 2,
      image:"/gallery/achievement/placeholder.png",
      }
]
export const GallerySection = () => {
 const [selectedGallery, setSelectedGallery] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (Gallery) => {
    setSelectedGallery(Gallery);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedGallery(null);
    setIsModalOpen(false);
  };

  return (
<section id='gallery' className='py-24 px-4 relative'>
        <div className='container mx-auto max-w-5xl'>
            {}
            <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>Featured <span className='text-primary'>Gallery</span></h2>
        
        <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
            Showcasing my recent achievements, each reflecting dedication, creativity, and growth.
        </p>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Gallery.map((project, key) => (
            <div
              key={key} 
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div onClick={() => openModal(project)} className="h-48 overflow-hidden cursor-pointer">
                <img
                  src={project.image}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              </div>
 
            ))}
        </div>
        </div>

      {isModalOpen && selectedGallery && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
    <div className="bg-white dark:bg-background rounded-lg shadow-lg max-w-3xl w-full relative">
      {/* Close Button */}
      <button
        onClick={closeModal}
        className="absolute top-4 right-4 text-gray-500 hover:text-red-500 z-50"
      >
        <X size={24} />
      </button>

      {selectedGallery.images?.map((img, idx) => (
            <img
              src={img}
              alt={`Slide ${idx + 1}`}
              className="w-full h-full object-cover rounded-t-lg"
            />
    
        ))}
    </div>
  </div>
)}
    </section>
  ) 
}