import React from 'react';
import TajAvatar from '../images/Taj-avatar.jpg';
import BaraAvatar from '../images/Bara-avatar.jpg';
import JeffAvatar from '../images/Jeff-avatar.jpg';
import './About.css';

function About() {
  return (
    <div className='about-container'>
      <div className='about-heading'>
        <h1>About FaWS</h1>
        <p>
          Why work from your home or office when you can work from wherever you
          want! Discover 40+ restaurants, cafés and co-working spaces across the
          UAE.
        </p>
      </div>
      <div className='about-text-content'>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
        ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
        enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet
        minim mollit non deserunt.
      </div>
      <div className='about-gallery'>
        <div className='left'></div>
        <div className='right'>
          <div className='top'></div>
          <div className='bottom'></div>
        </div>
      </div>
      <div className='about-credits'>
        <h3>Credits</h3>
        <p>
          Work in progresss. Amet minim mollit non deserunt ullamco est sit
          aliqua dolor do amet sint. Velit officia consequat duis enim velit
          mollit. Exercitation veniam consequat sunt.
        </p>
      </div>
      <div className='authors-container'>
        <div className='author'>
          <img src={TajAvatar} alt='' />
          <div className='author-name'>
            <h4>Tajdid Rahman</h4>
            <p>Designer</p>
          </div>
        </div>
        <div className='author'>
          <img src={BaraAvatar} alt='' />
          <div className='author-name'>
            <h4>Barbora Tvrzova</h4>
            <p>Front-End Developer</p>
          </div>
        </div>
        <div className='author'>
          <img src={JeffAvatar} alt='' />
          <div className='author-name'>
            <h4>Jeff Torres</h4>
            <p>Back-End Developer</p>
          </div>
        </div>
        <div className='author'>
          <img src={JeffAvatar} alt='' />
          <div className='author-name'>
            <h4>Jeff Torres</h4>
            <p>Back-End Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
