import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Header from './components/Header';

function App() {
  const workspaces = [
    {
      title: 'A4 Space',
      rating: 4.5,
      internetSpeed: 100,
      type: 'cafe',
      image: 'office.jpg',
    },
    {
      title: 'A4 Space',
      rating: 4.5,
      internetSpeed: 100,
      type: 'cafe',
      image: 'office.jpg',
    },
    {
      title: 'A4 Space',
      rating: 4.5,
      internetSpeed: 100,
      type: 'cafe',
      image: 'office.jpg',
    },
  ];

  return (
    <Router>
      <div className='App'>
        <Header />

        <Switch>
          <Route path='/about'>
            <About />
          </Route>

          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
