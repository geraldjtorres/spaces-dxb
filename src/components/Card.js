import React from 'react';
import './Card.css';
import faker from 'faker';
import wifi from '../images/wifi.svg';
import star from '../images/star.svg';
import volume from '../images/volume.svg';
import power from '../images/power.svg';
import lock from '../images/lock.svg';

function Card(props) {
  return (
    <div className='card'>
      <div className='card-image'>
        <img src={props.image} alt='' />
      </div>
      <div className='card-content'>
        <div className='heading'>
          <h2 className='name'>{props.name}</h2>
          <div className='info-row'>
            <div className='row-item type'>{props.type}</div>
            <div className='row-item type'>{props.type}</div>
            <div className='row-item rating'>❤️❤️❤️❤️</div>
            <div className='row-item location'>Somewhere</div>
          </div>
        </div>
        <div className='specs-row'>
          <div className='internet'>
            <img src={wifi} alt='' />
            <div className='text'>
              <span className='bold'>{props.internetSpeed}</span>
              <span> Mbps</span>
            </div>
          </div>
          <div className='sockets'>
            <img src={power} alt='' />
            <span>{props.sockets}</span>
          </div>
          <div className='calls'>
            <img src={volume} alt='' />
            <span>{props.calls}</span>
          </div>
        </div>
        <div className='password-row'>
          <div className='password'>
            <img src={lock} alt='' />
            <span>Houseofstark</span>
          </div>
          <div className='copy'>Copy</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
