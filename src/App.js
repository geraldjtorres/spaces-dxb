import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
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
        {/* <Footer /> */}
      </div>
    </Router>
  )
}

export default App
