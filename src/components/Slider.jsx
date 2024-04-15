'use client'

import ImageGallery from 'react-image-gallery'

import 'react-image-gallery/styles/css/image-gallery.css'
import './Slider.css'; // Importa tus estilos CSS

export const Slider = ({images}) => {


  return (
    <div className='flex justify-center mt-4 border-4 border-spacing-2'>
      <ImageGallery
        items={images}
        showPlayButton={false}
        showFullscreenButton={false}
        showThumbnails={false}
        showBullets={true}
        autoPlay={true}
        slideInterval={2000}
        slideDuration={500}
      
      />
    </div>
  );
};
