import React, { useState, useEffect } from 'react';
import './Home.css';
import Card from '../components/Card';
import faker from 'faker';
import Searchbar from '../components/Searchbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import axios from '../axios';
import { useStateValue } from '../StateProvider';

function Home() {
  const [{ spaces }, dispatch] = useStateValue();

  useEffect(() => {
    const getSpacesData = async () => {
      const response = await axios({
        method: 'get',
        url: '/spaces',
      });

      dispatch({
        type: 'GET_SPACES',
        item: response.data,
      });
    };

    getSpacesData();
  }, []);

  return (
    <div className='Home'>
      <div className='heading'>
        <h1>Find spaces to work online in Dubai</h1>
        <p>
          Why work from your home or office when you can work from wherever you
          want! Discover 40+ restaurants, cafés and co-working spaces across the
          UAE.
        </p>
        <div className='add-btn'>
          <Link to='/'>Add a space</Link>
        </div>
      </div>
      <div className='search-bar'>
        <Searchbar />
      </div>
      <div className='card-container'>
        {spaces.map((item) => {
          return (
            <Card
              image={
                `https://spaces-dxb-strapi-atlas.herokuapp.com${item.image[0].url}` ||
                faker.image.business()
              }
              rating={item.rating}
              internetSpeed={item.internetSpeed}
              type='Cafe'
              name={item.name}
              sockets={item.sockets[0].name}
              key={item.id}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default Home;

// const showImg = () => {
//   if (`https://spaces-dxb-strapi-atlas.herokuapp.com/${item.image[0].url}`) {
//     return `https://spaces-dxb-strapi-atlas.herokuapp.com/${item.image[0].url}`;
//   }
//   return faker.image.busines();
// };
