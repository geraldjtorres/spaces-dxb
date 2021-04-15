import React from 'react'
import './Card.css'
import faker from 'faker'
import wifi from '../images/wifi.svg'
import volume from '../images/volume.svg'
import power from '../images/power.svg'
import lock from '../images/lock.svg'

function Card(props) {
  return (
    <div className='card'>
      <a href={props.website} target='_blank' className='card-image'>
        <img src={props.image} alt='' />
      </a>
      <div className='card-content'>
        <div className='heading'>
          <a href={props.website} target='_blank' className='name'>
            {props.name}
          </a>
          <div className='info-row'>
            <div className='row-item type'>{props.type}</div>
            <div className='row-item rating'>
              {Array(props.rating)
                .fill()
                .map((_, i) => (
                  <span key={i}>💛</span>
                ))}
            </div>
            <a
              className='row-item location'
              href={props.directions}
              target='_blank'
            >
              Directions
            </a>
          </div>
        </div>
        <div className='specs-row'>
          <div className='internet'>
            <img src={wifi} alt='' />
            <div className='text'>
              <span className='bold'>{props.internetSpeed}</span>
            </div>
          </div>
          <div className='sockets'>
            <img src={power} alt='' />
            <span>{props.sockets}</span>
          </div>
          <div className='calls'>
            <img src={volume} alt='' />
            <span>{props.noiseLevel}</span>
          </div>
        </div>
        <div className='password-row'>
          <div className='password'>
            <img src={lock} alt='' />
            <span className='wifi-pass'>{props.wifiPassword}</span>
          </div>
          {/* <div className='copy'>Copy</div> */}
        </div>
      </div>
    </div>
  )
}

export default Card
