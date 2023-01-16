import React from 'react';
import {
  BrowserRouter as Router, Routes, Route, Link,
} from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './components/Home';
import Quote from './components/Quote';
import styles from './App.module.css';

class App extends React.PureComponent {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className={styles.Application}>
          <nav>
            <h1 className={styles.header}>Math Magicians</h1>
            <ul className={styles.links}>
              <li>
                <Link to="/">Home</Link>
              </li>
              |
              <li>
                <Link to="/Calculator">Calculator</Link>
              </li>
              |
              <li>
                <Link to="/Quote">Quote</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="Calculator" element={<Calculator />} />
            <Route path="Quote" element={<Quote />} />
            <Route path="/" element={<Home />} />
          </Routes>

        </div>
      </Router>
    );
  }
}

export default App;
