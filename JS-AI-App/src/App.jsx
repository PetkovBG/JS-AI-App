import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WeatherForm from './components/WeatherForm/WeatherForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='container'>
      <header className='header'>
      <h1 className='page-title'>
        Current Weather
      </h1>
      <WeatherForm />
      </header>
    </div>
    </>
  )
}

export default App
