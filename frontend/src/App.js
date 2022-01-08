import React from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import './App.css';
import FindScreen from './screen/FindScreen';
import HomeScreen from './screen/HomeScreen';
import PromoteScreen from './screen/PromoteScreen';

const App=()=>{
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomeScreen/>} exact/>
        <Route path='/findneighbors' element={<FindScreen/>} />
        <Route path='/promoteneighbors' element={<PromoteScreen/>}/>
      </Routes>
    </Router>
  )
}

export default App;
