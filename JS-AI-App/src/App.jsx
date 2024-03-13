import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WeatherForm from './components/WeatherForm/WeatherForm'
import useApiRequests from './hooks/useApiRequests'

function App() {

  const [prompt, setPrompt] = useState('');
  const [units, setUnits] = useState('metric');
  const [weatherDataLoading, setWeatherDataLoading] = useState(false);
  const [weatherDescriptionLoading, setWeatherDescriptionLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const { error, promptData, locationData, weatherData, weatherDesciption} = useApiRequests(prompt);

  const handleSubmit = (newPrompt) => {
    setErrorMsg('');
    setWeatherDataLoading(true);
    setWeatherDescriptionLoading(true);
    setPrompt(newPrompt);
  };

  return (
    <>
      <div className='container'>
        <header className='header'>
          <h1 className='page-title'>
            Current Weather
          </h1>
          <WeatherForm onSubmit={handleSubmit} />
        </header>
      </div>
    </>
  )
}

export default App
