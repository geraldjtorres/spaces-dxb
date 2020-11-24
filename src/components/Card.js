import React from 'react';
import './Card.css';
import faker from 'faker';
import wifi from '../images/wifi.svg';
import star from '../images/star.svg';

import power from '../images/power.svg';

function Card(props) {
  return (
    <div className='card'>
      <div className='card-image'>
        <img src={props.image} alt='' />
      </div>
      <div className='card-content'>
        <div className='title'>
          <h2>{props.title}</h2>
          <div className='type'>
            <span>{props.type}</span>
          </div>
        </div>
        <div className='specs'>
          <div className='internet'>
            <img src={wifi} alt='' />
            <span className='bold'>{props.internetSpeed}</span>
            <span>Mbps</span>
          </div>
          <div className='sockets'>
            <img src={power} alt='' />
            <span>{props.sockets}</span>
          </div>
        </div>
        <div className='rating'>
          <img src={star} alt='' />
          <span>{props.rating}/5</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
