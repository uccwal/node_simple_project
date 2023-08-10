import React, { Component } from 'react'
import './App.css';
import UseSample from "./components/useSample";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import Home from './components/home';
import Community from './components/community';
import Mypage from './components/mypage';

export default class App extends Component {


  render() {
    return (
        <div className="App">
          <Router>
            <div className='Menu-wrapper'>
              <ul>
                <Link to='/'><li>Home</li></Link>
                <Link to='/community'><li>Community</li></Link>
                <Link to='/mypage'><li>MyPage</li></Link>
              </ul>
            </div>
            <div className='Contents-wrapper'>
              <Routes>
                <Route exact path='/' element={<Home/>} />
                <Route path='/community' element={<Community/>} />
                <Route path='/mypage' element={<Mypage/>} />
              </Routes>
            </div>
          </Router>


        </div>

    )
  }
}