import './About.css'
import aboutImage from '../../assests/Center_music band.png'
import React from 'react';
const About = (props) => {
  return (
    <>
    <div className="mainHeading">
      <h1>Who are we?</h1></div>
      <div className="aboutContent"><p>
        Lorem ipsum dolor sit, amet lexical consectetur adipisicing elit. Similique
        iusto doloremque quaerat repellendus amet. Autem quod delectus harum
        labore quo eaque ducimus culpa facere, vero aliquam consectetur a
        repudiandae nulla.This is the about Page, here tou will find the information about the page.
      </p>
      
      </div>
      <img src={aboutImage} alt="Band Image" className='aboutImage' />
    </>
  );
};
export default About;
