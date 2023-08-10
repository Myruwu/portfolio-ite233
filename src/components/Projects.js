import React from 'react'
import { Carousel, Image } from 'react-bootstrap';

const Projects = () => {
  return (
    <Carousel className='d-flex w-100'>
        <Carousel.Item>
          <div>
            <Image src="/portfolio-hover1.gif" className='w-100 h-100 object-fit-cover' fluid/>
          </div>
          <Carousel.Caption>
            <h3 className='bg-dark rounded'>3D Porsche Render</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div>
            <Image src="/portfolio-hover2.gif" className='w-100 h-100 object-fit-cover' fluid/>
          </div>
          <Carousel.Caption>
            <h3 className='bg-dark rounded'>Video Edit of PSU UC Student Project</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div>
            <Image src="/portfolio-hover3.gif" className='w-100 h-100 object-fit-cover' fluid/>
          </div>
          <Carousel.Caption>
            <h3 className='bg-dark rounded'>Kawasaki Webpage</h3>
          </Carousel.Caption>
      </Carousel.Item>
  </Carousel>
  )
}

export default Projects
