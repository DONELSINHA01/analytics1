import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga';

const Home = () => {
  return <>
    <p>Home</p>
  </>
}

const Menu = () => {
  return <>
    <p>Menu</p>
  </>
}

const About = () => {
  return <>
    <p>About</p>
  </>
}

function App() {
  // Initialize Google Analytics
  ReactGA.initialize('YOUR_MEASUREMENT_ID');
  ReactGA.pageview(window.location.pathname + window.location.search);

  return (
    <div className="App">
      <nav>
        <ul>
          <Link to='/'><li>Home</li></Link>
          <Link to='/menu'><li>Menu</li></Link>
          <Link to='/about'><li>About</li></Link>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
