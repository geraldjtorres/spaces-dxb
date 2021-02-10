import React, { useState, useEffect } from 'react'
import './Home.css'
import Card from '../components/Card'
import faker from 'faker'
import Searchbar from '../components/Searchbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import axios from '../axios'
import { useStateValue } from '../StateProvider'

function Home() {
  const [{ spaces }, dispatch] = useStateValue()

  useEffect(() => {
    const getSpacesData = async () => {
      const response = await axios({
        method: 'get',
        url: '/spaces'
      })

      dispatch({
        type: 'GET_SPACES',
        item: response.data
      })
    }

    console.log('response', spaces)

    getSpacesData()
  }, [])

  return (
    <div className='home'>
      <div className='alpha-mode'>
        <span>Website currently in alpha mode</span>
        <span>
          Designed by
          <a href='https://www.linkedin.com/in/tajdid/' target='_blank'>
            Taj
          </a>
          and built by
          <a
            href='https://www.linkedin.com/in/gerald-jeff-torres-92a24a94/'
            target='_blank'
          >
            Jeff
          </a>
          &amp;
          <a
            href='https://www.linkedin.com/in/barbora-tvrzova-1744741bb/'
            target='_blank'
          >
            Bara
          </a>
        </span>
      </div>
      <div className='main-heading'>
        <h1>Find spaces to work online in Dubai</h1>
        <p>
          Why work from your home or office when you can work from wherever you
          want! Discover 40+ restaurants, cafés and co-working spaces across the
          UAE.
        </p>
        {/* <div className='add-btn'>
          <Link to='/'>Add a space</Link>
        </div> */}
      </div>
      {/* <div className='search-bar'>
        <Searchbar />
      </div> */}
      <div className='card-container'>
        {spaces.map(item => {
          return (
            <Card
              image={
                item.image
                  ? `https://spaces-dxb-strapi-atlas.herokuapp.com${item.image.formats.small.url}`
                  : faker.image.business()
              }
              rating={item.rating}
              internetSpeed={item.internetSpeed}
              type='Cafe'
              name={item.name}
              sockets={item.socket.name}
              key={item.id}
              calls='Okay for calls'
            />
          )
        })}
      </div>
    </div>
  )
}

export default Home
