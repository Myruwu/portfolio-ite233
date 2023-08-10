import React from 'react';
import SocialLinks from '../components/SocialLinks';
import { Button, Image, Row, Col } from 'react-bootstrap';
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import Projects from '../components/Projects';
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion";
import { TypeAnimation } from 'react-type-animation'


const Home = () => {
  return (
    <section>
       <AnimatePresence>
          <motion.div
            initial={{ opacity:0, y:15}}
            animate={{ opacity:1, y:0}}
            transition={{ ease: "easeOut", duration: 2}}>
            <Row className='py-5 my-2' >
              <Col className='w-100 d-flex justify-content-center items-center'>
                <Image src='/profile.jpg' className='' width={350} roundedCircle/>
              </Col>
              <Col className='d-flex flex-column'>
                <h1 className='display-1 fw-bold'>
                  Myro Mercado
                </h1>
                <h3 className='display-6 fw-semibold'>I AM A</h3>
                <TypeAnimation
                sequence={[
                  'WEBDEV STUDENT',
                  2000,
                  'VIDEO EDITOR',
                  2000,
                  'TIKTOKER',
                  2000,
                ]}
                speed={50}
                className='text-accent'
                wrapper='h3'
                repeat={Infinity}
              />
                <p>
                Welcome to my Portfolio website! Check out my links and works down below!
                </p>
                <div className='d-flex align-items-center gap-2'>
                  <Link to='/work'>
                    <Button className='btn-lg' variant='dark'>View Work</Button>
                  </Link>
                  <SocialLinks />
                </div>
              </Col>
            </Row>
        </motion.div>
      </AnimatePresence>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y:15}}
          whileInView={{ opacity: 1, y:0}}
          transition={{delay:0.25}}>
      <Row className='mt-5 bg-dark rounded text-light p-5'>
        <Row>
          <Col>
            <h1 className='display-1 fw-bold'>About Me</h1>
            <hr />
            <p>I'm a 3rd year BSIT Student in PHINMA UPang University and I am looking forward to a future in Game Development or Film Industry
            </p>
            </Col>
            <Col>
              <h3 className='display-1 fw-bold'>Tech Stack</h3>
              <div className='display-1'>
                <FaHtml5 />
                <FaCss3Alt />
                <FaJs />
                <FaReact />
              </div>
            </Col>
          </Row>
          <h3 className='display-1 fw-bold'>Recent Projects</h3>
          <Projects />
         </Row>
        </motion.div>
      </AnimatePresence>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y:15}}
          whileInView={{ opacity: 1, y:0}}
          transition={{delay:0.25}}>
          <div className='d-flex flex-column justify-content-center text-center'>
            <h1 className='display-1 fw-bold'>Contact Me</h1>
            <p>These are my socials where you can ask me if you have any question 
              Feel free to contact me!.
            </p>
            <ul className='d-flex flex-column list-inline'>
              <li>
                Email: <span className='text-primary'>myde.mercado.up@phinmaed.com</span>
              </li>
              <li>
                Facebook: 
                <a 
                href='https://www.facebook.com/myro.mercado10/' 
                className='m-2 text-decoration-none'>Myro Mercado</a>
              </li>
              <li>
                TikTok: 
                <a 
                href='https://www.tiktok.com/@myruwuu' 
                className='m-2 text-decoration-none'>myruwuu</a>
              </li>
              <li>
                Github: 
                <a 
                href='https://github.com/Myruwu' 
                className='m-2 text-decoration-none'>Myro Mercado</a>
              </li>
            </ul>
          </div>
      </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Home;
