import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';



import Home from './components/home';
import Community from './components/community';
import Mypage from './components/mypage';
import CheckSMS from "./components/checkSMS";
import UseToastGrid from "./components/useToastGrid";
import UseAjaxGetData from "./components/useAjaxGetData";
import 'tui-grid/dist/tui-grid.css';

function App() {



    return (
        <div className="App">

업데이트 ㅎ

          <Router>
            <div className='Menu-wrapper'>
              <ul style={{listStyle:'none'}}>
                <Link to='/'><li>Home</li></Link>
                <Link to='/community'><li>Community</li></Link>
                <Link to='/mypage'><li>MyPage</li></Link>
                <Link to='/checkSMS'><li>CheckSMS</li></Link>
                <Link to='/useAjaxGetData'><li>useAjaxGetData</li></Link>
                <Link to='/useToastGrid'><li>useAjaxGetData</li></Link>
              </ul>
            </div>
            <div className='Contents-wrapper'>
              <Routes>
                <Route exact path='/' element={<Home/>} />
                <Route path='/community' element={<Community/>} />
                <Route path='/mypage' element={<Mypage/>} />
                <Route path='/checkSMS' element={<CheckSMS/>} />
                <Route path='/useAjaxGetData' element={<UseAjaxGetData/>} />
                <Route path='/useToastGrid' element= {<UseToastGrid/>}/>
              </Routes>
            </div>
          </Router>


        </div>

    )
  }
export default App;