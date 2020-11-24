import React, { useState, useEffect } from 'react'
import './Home.css'
import Card from '../components/Card'
import faker from 'faker'
import Searchbar from '../components/Searchbar'
import Footer from '../components/Footer'

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

    getSpacesData()
  }, [])

  return (
    <div className='Home'>
      <div className='heading'>
        <h1>Find spaces to work online in Dubai</h1>
        <p>
          Why work from your home or office when you can work from wherever you
          want! Discover 40+ restaurants, cafés and co-working spaces across the
          UAE.
        </p>
      </div>
      <div className='search-bar'>
        <Searchbar />
      </div>
      <div className='card-container'>
        {spaces.map(item => {
          return (
            <Card
              image={faker.image.technics()}
              rating={item.rating}
              internetSpeed={item.internetSpeed}
              type='Cafe'
              title={item.Name}
              sockets={item.sockets[0].name}
              key={item.id}
            />
          )
        })}
        {/* <Card title='SYNECHRON' />; */}
      </div>
      <Footer />
    </div>
  )
}

export default Home
