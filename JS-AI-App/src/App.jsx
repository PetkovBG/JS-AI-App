import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WeatherForm from './components/WeatherForm/WeatherForm'
import useApiRequests from './hooks/useApiRequests'
import Description from './components/Description/Description'

function App() {

  const [prompt, setPrompt] = useState('');
  const [units, setUnits] = useState('metric');
  const [weatherDataLoading, setWeatherDataLoading] = useState(false);
  const [weatherDescriptionLoading, setWeatherDescriptionLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const { error, promptData, locationData, weatherData, weatherDesciption} = useApiRequests(prompt);

  useEffect(() => {
    if(error) {
      setErrorMsg(error);
      setWeatherDataLoading(false);
    }
  }, [error]);

  useEffect(() => {
    if(weatherData) {
      setWeatherDataLoading(false);
    }
  }, [weatherData]);

  useEffect(() => {
    if(weatherDesciption) {
      setWeatherDescriptionLoading(false);
    }
  }, [weatherDesciption]);

  useEffect(() => {
    if(promptData && promptData.units) {
      setUnits(promptData.units);
    }
  }, [promptData]);

  const handleSubmit = (newPrompt) => {
    setErrorMsg('');
    setWeatherDataLoading(true);
    setWeatherDescriptionLoading(true);
    setPrompt(newPrompt);
  };

  return (
      <div className='container'>
        <header className='header'>
          <h1 className='page-title'>
            Current Weather
          </h1>
          <WeatherForm onSubmit={handleSubmit} />
          {error && <p className='error'>{errorMsg}</p>}
          {true ? <Description /> : null}
        </header>
      </div>
  )
}

export default App
