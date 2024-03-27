import { useEffect, useState } from 'react'
import './App.css'
import WeatherForm from './components/WeatherForm/WeatherForm'
import useApiRequests from './hooks/useApiRequests'
import Description from './components/Description/Description'
import WeatherCard from './components/WeatherCard/WeatherCard'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login/Login'
import Main from './components/Main/Main'

const isLoggedIn = false;

function App() {

  return (
    <>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/app' element={<Main />} />
        </Routes>
    </>
  )

}

export default App
