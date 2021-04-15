import React, { useState } from 'react'
import './AddSpaceForm.css'
import './AddressSearch.css'
import SearchIcon from '@material-ui/icons/Search'
import LockOpenIcon from '@material-ui/icons/LockOpen'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'
import usePlacesAutocomplete, { getDetails } from 'use-places-autocomplete'
import axios from '../axios'
import { useStateValue } from '../StateProvider'
import Spinner from '../components/Spinner'

const AddSpaceForm = () => {
  const [
    { categories, sockets, internetSpeeds, noiseLevels },
    dispatch
  ] = useStateValue()
  const [workspaceName, setWorkspaceName] = useState('')
  const [categoryType, setCategoryType] = useState('')
  const [rating, setRating] = useState('')
  const [internetSpeed, setInternetSpeed] = useState('')
  const [socket, setSocket] = useState('')
  const [wifiPassword, setWifiPassword] = useState('')
  const [passwordExist, setPasswordExist] = useState('')
  const [noiseLevel, setNoiseLevel] = useState('')
  const [website, setWebsite] = useState('')
  const [directions, setDirections] = useState('')
  const [isLoading, setLoading] = useState(false)
  const [place_id, setplaceId] = useState('')
  const [img, setImg] = useState('')
  const [hasError, setHasError] = useState(false)
  const [success, setSuccess] = useState(null)

  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions
  } = usePlacesAutocomplete({
    requestOptions: {
      /* Define search scope here */
      types: ['establishment'],
      componentRestrictions: { country: 'AE' }
    },
    debounce: 300
  })

  const onHandleSubmit = async e => {
    e.preventDefault()
    console.log('submit form')

    setLoading(true)

    try {
      const response = await axios({
        method: 'POST',
        url: '/spaces',
        data: {
          name: workspaceName,
          website,
          rating,
          img,
          socket: [socket],
          category: [categoryType],
          noise_level: [noiseLevel],
          wifi_password: wifiPassword,
          directions,
          internet_speed: [internetSpeed],
          place_id
        }
      })

      console.log('posted!', response)

      setTimeout(() => {
        setLoading(false)
        setSuccess(true)
      }, 2500)
    } catch (err) {
      setTimeout(() => {
        setLoading(false)
        setHasError(true)
      }, 2500)
    }
  }

  const handleInput = e => {
    // Place a "string" to update the value of the input element
    setValue(e.target.value)
  }

  const handleSelect = suggestion => () => {
    // When user selects a place, we can replace the keyword without request data from API
    // by setting the second parameter to "false"
    setValue(suggestion.structured_formatting.main_text, false)
    clearSuggestions()

    const parameter = {
      placeId: suggestion.place_id
    }

    console.log('suggestion', suggestion)

    getDetails(parameter)
      .then(details => {
        console.log('Details: ', details)
        const image = details.photos[1].getUrl({
          maxWidth: 500,
          maxHeight: 500
        })

        console.log('photo', image)

        if (details.photos) setImg(image)
        if (details.name) setWorkspaceName(details.name)
        if (details.rating) setRating(Math.round(details.rating))
        if (details.website) setWebsite(details.website)
        if (details.url) setDirections(details.url)
        if (details.place_id) setplaceId(details.place_id)
      })
      .catch(error => {
        console.log('Error: ', error)
      })
  }

  const renderSuggestions = () =>
    data.map(suggestion => {
      const {
        place_id,
        structured_formatting: { main_text }
      } = suggestion

      return (
        <li key={place_id} onClick={handleSelect(suggestion)}>
          <LocationOnOutlinedIcon />
          <div className='suggestion-label'>
            <p>{main_text}</p>
            <p>{suggestion.description}</p>
          </div>

          {/* <strong>{main_text}</strong> <small>{secondary_text}</small> */}
        </li>
      )
    })

  const renderCategories = () =>
    categories.map(category => {
      return (
        <div className='radio-btn' key={category.id}>
          <input
            type='radio'
            id={category.id}
            value={category.id}
            onChange={e => setCategoryType(e.target.value)}
            checked={category.id === categoryType}
            required
          />
          <label htmlFor={category.id}>{category.name}</label>
        </div>
      )
    })

  const renderSockets = () =>
    sockets.map(socketType => {
      return (
        <div className='radio-btn' key={socketType.id}>
          <input
            type='radio'
            id={socketType.id}
            value={socketType.id}
            onChange={e => setSocket(e.target.value)}
            checked={socketType.id === socket}
            required
          />
          <label htmlFor={socketType.id}>{socketType.name}</label>
        </div>
      )
    })

  const renderInternetSpeeds = () =>
    internetSpeeds.map(item => {
      return (
        <div className='radio-btn' key={item.id}>
          <input
            type='radio'
            id={item.id}
            value={item.id}
            onChange={e => setInternetSpeed(e.target.value)}
            checked={item.id === internetSpeed}
            required
          />
          <label htmlFor={item.id}>{item.name}</label>
        </div>
      )
    })

  const renderNoiseLevels = () =>
    noiseLevels.map(item => {
      return (
        <div className='radio-btn' key={item.id}>
          <input
            type='radio'
            id={item.id}
            value={item.id}
            onChange={e => setNoiseLevel(e.target.value)}
            checked={item.id === noiseLevel}
            required
          />
          <label htmlFor={item.id}>{item.name}</label>
        </div>
      )
    })

  return (
    <form className='form'>
      {success ? (
        <h5 className='feedback-message'>Thanks for submitting a space</h5>
      ) : hasError ? (
        <h5 className='feedback-message'>
          Oops! Something went wrong. Please try again
        </h5>
      ) : (
        <>
          <div className='input-style'>
            <SearchIcon fontSize='small' />

            <input
              value={value}
              onChange={handleInput}
              disabled={!ready}
              placeholder='Find a Workspace'
            />
            {/* We can use the "status" to decide whether we should display the dropdown or not */}
            {status === 'OK' && (
              <ul className='suggestion-list'>{renderSuggestions()}</ul>
            )}
          </div>

          <div className='form-group'>
            <h5>Type of Space</h5>
            <div className='radio-toolbar'>
              {categories && renderCategories()}
            </div>
          </div>

          <div className='form-group'>
            <h5>Is there a Wi-Fi password?</h5>
            <div className='radio-toolbar'>
              <div className='radio-btn'>
                <input
                  type='radio'
                  id='passwordExistYes'
                  value='passwordExistYes'
                  onChange={e => setPasswordExist(e.target.value)}
                  checked={passwordExist === 'passwordExistYes'}
                  required
                />
                <label htmlFor='passwordExistYes'>Yes</label>
              </div>

              <div className='radio-btn'>
                <input
                  type='radio'
                  id='passwordExistNo'
                  value='passwordExistNo'
                  onChange={e => setPasswordExist(e.target.value)}
                  checked={passwordExist === 'passwordExistNo'}
                  required
                />
                <label htmlFor='passwordExistNo'>No</label>
              </div>
            </div>

            {passwordExist === 'passwordExistYes' ? (
              <div className='input-style wifiPass'>
                <LockOpenIcon fontSize='small' />
                <input
                  type='text'
                  value={wifiPassword}
                  onChange={e => setWifiPassword(e.target.value)}
                  placeholder='Wifi password'
                />
              </div>
            ) : null}
          </div>

          <div className='form-group'>
            <h5>Internet Speed</h5>
            <div className='radio-toolbar'>
              {internetSpeeds && renderInternetSpeeds()}
            </div>
          </div>

          <div className='form-group'>
            <h5>Are there plug sockets?</h5>
            <div className='radio-toolbar'>{sockets && renderSockets()}</div>
          </div>

          <div className='form-group'>
            <h5>What is the noise level?</h5>
            <div className='radio-toolbar'>
              {noiseLevels && renderNoiseLevels()}
            </div>
          </div>

          {isLoading ? (
            <Spinner />
          ) : (
            <button
              className='add-space-btn'
              disabled={
                !value ||
                !categoryType ||
                !passwordExist ||
                !internetSpeed ||
                !sockets ||
                !noiseLevel ||
                !rating ||
                !place_id ||
                !website ||
                !directions
                  ? true
                  : false
              }
              onClick={e => onHandleSubmit(e)}
            >
              Add a space
            </button>
          )}
        </>
      )}
    </form>
  )
}

export default AddSpaceForm
