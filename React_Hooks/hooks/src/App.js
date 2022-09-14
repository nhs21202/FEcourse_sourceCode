import logo from './logo.svg';
import './App.css';
import About from './pages/about';
import Users from './pages/user';
import Home from './pages/home';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom"
function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Routes>
          <Route path="/about" element={<About/>}/>
          <Route path="/users" element={<Users/>}/>
          <Route path="/" element={<Home/>}/>
          </Routes>
      </div>
    </Router>
  );
}

export default App;
