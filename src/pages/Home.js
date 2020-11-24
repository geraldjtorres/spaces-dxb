import React from 'react';
import './Home.css';
import Card from '../components/Card';
import faker from 'faker';
import Searchbar from '../components/Searchbar';
import Footer from '../components/Footer';

function Home() {
  const workspaces = [
    {
      title: 'A4 Space',
      rating: 4.5,
      internetSpeed: 100,
      type: 'cafe',
      image: faker.image.technics(),
      sockets: 'Some sockets',
    },
    {
      title: 'A4 Space',
      rating: 4.5,
      internetSpeed: 100,
      type: 'cafe',
      image: faker.image.business(),
      sockets: 'Some sockets',
    },
    {
      title: 'A4 Space',
      rating: 4.5,
      internetSpeed: 100,
      type: 'cafe',
      image: faker.image.city(),
      sockets: 'Some sockets',
    },
  ];

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
        {workspaces.map((item) => {
          return (
            <Card
              image={item.image}
              rating={item.rating}
              internetSpeed={item.internetSpeed}
              type={item.type}
              title={item.title}
              sockets={item.sockets}
            />
          );
        })}
        {/* <Card title='SYNECHRON' />; */}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
