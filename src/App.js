import React from 'react'
import Home from './components/home/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
// import Weather from './components/Weather';
// import { Getapi } from './context/Getapi';
import { AppContext } from './context/AppContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Details from './components/detail/Details';
import HomeStore from './components/home/HomeStore';
const App = () => {

  return (
    <>
      <BrowserRouter>
        <AppContext>
          <Routes>
            <Route path='/' element={<HomeStore />} />
            <Route path='/Home' element={<Home />} />
            <Route path='/Details' element={<Details />} />
          </Routes>
        </AppContext>
      </BrowserRouter>

    </>
  )
}

export default App


