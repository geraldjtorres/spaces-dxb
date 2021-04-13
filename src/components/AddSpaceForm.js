import React, { useState, useEffect } from 'react'
import './AddSpaceForm.css'
import './AddressSearch.css'
import SearchIcon from '@material-ui/icons/Search'
import LockOpenIcon from '@material-ui/icons/LockOpen'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'
import usePlacesAutocomplete, { getDetails } from 'use-places-autocomplete'
import axios from '../axios'
// import Spinner from './components/Spinner'

const AddSpaceForm = () => {
  const [workspaceName, setWorkspaceName] = useState('')
  const [category, setCategory] = useState('')
  const [rating, setRating] = useState('')
  const [internetSpeed, setInternetSpeed] = useState('')
  const [sockets, setSockets] = useState('')
  const [wifiPassword, setWifiPassword] = useState('')
  const [passwordExist, setPasswordExist] = useState('')
  const [noiseLevel, setNoiseLevel] = useState('')
  const [website, setWebsite] = useState('')
  const [directions, setDirections] = useState('')
  const [isLoading, setLoading] = useState(false)

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

    const response = await axios({
      method: 'POST',
      url: '/spaces',
      data: {
        name: workspaceName,
        website,
        rating,
        // socket: [sockets],
        category: { id: '6023a5d69639c476df3a10fd' },
        // noise_level: [noiseLevel],
        wifi_password: wifiPassword,
        directions
        // internet_speed: [internetSpeed]
      }
    })

    console.log('posted!', response)

    setLoading(false)
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
        console.log(
          'photo',
          details.photos[1].getUrl({ maxWidth: 500, maxHeight: 500 })
        )

        if (details.name) setWorkspaceName(details.name)
        if (details.rating) setRating(Math.round(details.rating))
        if (details.website) setWebsite(details.website)
        if (details.url) setDirections(details.url)

        console.log('name: ', workspaceName)
        console.log('rating: ', rating)
        console.log('website: ', website)
        console.log('directions: ', directions)
      })
      .catch(error => {
        console.log('Error: ', error)
      })
  }

  const renderSuggestions = () =>
    data.map(suggestion => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text }
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

  return (
    <form className='form'>
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
          <input
            type='radio'
            id='Cafe'
            value='Cafe'
            onChange={e => setCategory(e.target.value)}
            checked={category === 'Cafe'}
            required
          />
          <label htmlFor='Cafe'>Cafe</label>

          <input
            type='radio'
            id='Restaurant'
            value='Restaurant'
            onChange={e => setCategory(e.target.value)}
            checked={category === 'Restaurant'}
            required
          />
          <label htmlFor='Restaurant'>Restaurant</label>

          <input
            type='radio'
            id='Bar'
            value='Bar'
            onChange={e => setCategory(e.target.value)}
            checked={category === 'Bar'}
            required
          />
          <label htmlFor='Bar'>Bar</label>
          <input
            type='radio'
            id='Co-working'
            value='Co-working'
            onChange={e => setCategory(e.target.value)}
            checked={category === 'Co-working'}
            required
          />
          <label htmlFor='Co-working'>Co-working</label>

          <input
            type='radio'
            id='Library'
            value='Library'
            onChange={e => setCategory(e.target.value)}
            checked={category === 'Library'}
            required
          />
          <label htmlFor='Library'>Library</label>

          <input
            type='radio'
            id='Other'
            value='Other'
            onChange={e => setCategory(e.target.value)}
            checked={category === 'Other'}
            required
          />
          <label htmlFor='Other'>Other</label>
        </div>
      </div>

      <div className='form-group'>
        <h5>Is there a Wi-Fi password?</h5>
        <div className='radio-toolbar'>
          <input
            type='radio'
            id='passwordExistYes'
            value='passwordExistYes'
            onChange={e => setPasswordExist(e.target.value)}
            checked={passwordExist === 'passwordExistYes'}
            required
          />
          <label htmlFor='passwordExistYes'>Yes</label>

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
          <input
            type='radio'
            id='Fast'
            value='Fast'
            onChange={e => setInternetSpeed(e.target.value)}
            checked={internetSpeed === 'Fast'}
            required
          />
          <label htmlFor='Fast'>Fast</label>

          <input
            type='radio'
            id='Medium'
            value='Medium'
            onChange={e => setInternetSpeed(e.target.value)}
            checked={internetSpeed === 'Medium'}
            required
          />
          <label htmlFor='Medium'>Medium</label>

          <input
            type='radio'
            id='Slow'
            value='Slow'
            onChange={e => setInternetSpeed(e.target.value)}
            checked={internetSpeed === 'Slow'}
            required
          />
          <label htmlFor='Slow'>Slow</label>
        </div>
      </div>

      <div className='form-group'>
        <h5>Are there plug sockets?</h5>
        <div className='radio-toolbar'>
          <input
            type='radio'
            id='None'
            value='None'
            onChange={e => setSockets(e.target.value)}
            checked={sockets === 'None'}
            required
          />
          <label htmlFor='None'>None</label>

          <input
            type='radio'
            id='Some'
            value='Some'
            onChange={e => setSockets(e.target.value)}
            checked={sockets === 'Some'}
            required
          />
          <label htmlFor='Some'>Some</label>

          <input
            type='radio'
            id='Many'
            value='Many'
            onChange={e => setSockets(e.target.value)}
            checked={sockets === 'Many'}
            required
          />
          <label htmlFor='Many'>Many</label>
        </div>
      </div>

      <div className='form-group'>
        <h5>What is the noise level?</h5>
        <div className='radio-toolbar'>
          <input
            type='radio'
            id='Quiet'
            value='Quiet'
            onChange={e => setNoiseLevel(e.target.value)}
            checked={noiseLevel === 'Quiet'}
            required
          />
          <label htmlFor='Quiet'>Quiet</label>

          <input
            type='radio'
            id='Moderate'
            value='Moderate'
            onChange={e => setNoiseLevel(e.target.value)}
            checked={noiseLevel === 'Moderate'}
            required
          />
          <label htmlFor='Moderate'>Moderate</label>

          <input
            type='radio'
            id='Loud'
            value='Loud'
            onChange={e => setNoiseLevel(e.target.value)}
            checked={noiseLevel === 'Loud'}
            required
          />
          <label htmlFor='Loud'>Loud</label>
        </div>
      </div>

      <button
        className='add-space-btn'
        disabled={
          !value ||
          !category ||
          !passwordExist ||
          !internetSpeed ||
          !sockets ||
          !noiseLevel ||
          !rating ||
          !website ||
          !directions
            ? true
            : false
        }
        onClick={e => onHandleSubmit(e)}
      >
        Add a space
      </button>
    </form>
  )
}

export default AddSpaceForm
