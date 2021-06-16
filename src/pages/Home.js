import React, { useState, useEffect } from 'react'
import './Home.css'
import Card from '../components/Card'
import faker from 'faker'
import Spinner from '../components/Spinner'
import Searchbar from '../components/Searchbar'
import axios from '../axios'
import { useStateValue } from '../StateProvider'
import AddSpaceForm from '../components/AddSpaceForm'

import Dialog from '@material-ui/core/Dialog'

function Home() {
  const [{ spaces }, dispatch] = useStateValue()
  const [isLoading, setLoading] = useState(true)
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  const getSpaces = async () => {
    const res = await axios({
      method: 'get',
      url: '/spaces'
    })

    dispatch({
      type: 'GET_SPACES',
      item: res.data
    })

    setLoading(false)
  }

  const getAllCategories = async () => {
    const res = await axios({
      method: 'get',
      url: '/categories'
    })

    dispatch({
      type: 'GET_CATEGORIES',
      item: res.data
    })
  }

  const getSockets = async () => {
    const res = await axios({
      method: 'get',
      url: '/sockets'
    })

    dispatch({
      type: 'GET_SOCKETS',
      item: res.data
    })
  }

  const getInternetSpeeds = async () => {
    const res = await axios({
      method: 'get',
      url: '/internet-speeds'
    })

    dispatch({
      type: 'GET_INTERNETSPEEDS',
      item: res.data
    })
  }

  const getNoiseLevels = async () => {
    const res = await axios({
      method: 'get',
      url: '/noise-levels'
    })

    dispatch({
      type: 'GET_NOISELEVELS',
      item: res.data
    })
  }

  useEffect(() => {
    getAllCategories()
    getSpaces()
    getSockets()
    getInternetSpeeds()
    getNoiseLevels()
  }, [])

  const divStyles = {
    border: '1px solid red'
  }

  return (
    <div className='home' style={divStyles}>
      <div className='alpha-mode'>
        <span>Website currently in alpha mode</span>
        <span className='credits'>
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

        <button className='add-btn' onClick={handleOpen}>
          Add a space
        </button>

        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby='form-dialog-title'
        >
          <AddSpaceForm closeDialog={handleClose} />
        </Dialog>
      </div>
      {/* <div className='search-bar'>
        <Searchbar />
      </div> */}

      <div className='card-container'>
        {isLoading ? (
          <Spinner />
        ) : (
          spaces.map((item, index) => {
            return (
              <Card
                image={item.img ? item.img : faker.image.business()}
                rating={item.rating}
                internetSpeed={item.internet_speed.name}
                type={item.category.name}
                name={item.name}
                sockets={item.socket.name}
                key={item.id}
                noiseLevel={item.noise_level.name}
                website={item.website}
                directions={item.directions}
                placeId={item.place_id}
                timer={index}
                wifiPassword={
                  item.wifi_password
                    ? item.wifi_password
                    : 'No wifi password required'
                }
              />
            )
          })
        )}
      </div>
    </div>
  )
}

export default Home
