import React from 'react';
import { Carousel, Image, Container,  Row, Col } from 'react-bootstrap';


const Work = () => {
  return (
    <>
    <Container>
      <Row>
      <Col>
        <h2 className='display-1 fw-bold'>
           My Work
        </h2>
        <p>Here are some of the projects I've worked on:</p>
        <ul>
          <li>
            <h4>3D Porsche Render</h4>
            <p>Blender</p>
          </li>
          <li>
            <h4>Video Edit</h4>
            <p>Adobe After Effects, Adobe Premiere Pro, Wondershare Filmora</p>
          </li>
          <li>
            <h4>Kawasaki Motor Website</h4>
            <p>HTML, CSS, JS</p>
          </li>
        </ul>
      </Col>
      <Col>
      <div style={{minWidth:280}}>
      <Carousel>
        <Carousel.Item>
           <div style={{maxHeight:500}}>
            <Image src="/portfolio-hover1.gif" className="w-100 h-100 object-cover"/>
           </div>
          <Carousel.Caption>
            <h3>3D Porsche Render</h3>  
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{maxHeight:500}}>
            <Image src="/portfolio-hover2.gif" className="w-100 h-100 object-cover"/>
           </div>
          <Carousel.Caption>
            <h3>Video Edit Project for PSU UC Students</h3>  
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          
          <div style={{maxHeight:500}}>
            <Image src="/portfolio-hover3.gif" className="w-100 h-100 object-cover"/>
           </div>
          <Carousel.Caption>
            <h3>Kawasaki Motors Website</h3>
           
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
      </Col>
    </Row>
    </Container>
    </>
  );
};

export default Work;
