import React from 'react'
import { Carousel,Image } from 'react-bootstrap';

export default function SlideShow() {
    const slideStyle = {
        width: '100%', // La largeur que vous souhaitez pour chaque slide
        height: '300px', // La hauteur que vous souhaitez pour chaque slide
    };
  return (
      <Carousel>
          <Carousel.Item>
              <Image
                  className="d-block w-100"
                  src="https://cdn.pixabay.com/photo/2017/01/22/19/06/animals-2000586_1280.jpg"
                  alt="Slide 1"
                  style={slideStyle} // Appliquer le style ici
              />
          </Carousel.Item>
          <Carousel.Item>
              <Image
                  className="d-block w-100"
                  src="https://cdn.pixabay.com/photo/2016/09/14/08/18/film-1668918_1280.jpg"
                  alt="Slide 2"
                  style={slideStyle} // Appliquer le style ici
              />
          </Carousel.Item>
          <Carousel.Item>
              <Image
                  className="d-block w-100"
                  src="https://cdn.pixabay.com/photo/2015/05/15/09/13/demonstration-767983_1280.jpg"
                  alt="Slide 3"
                  style={slideStyle} // Appliquer le style ici
              />
          </Carousel.Item>
      </Carousel>
  )
}
