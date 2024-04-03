import { useEffect, useState } from "react";
import useApiRequests from "../../hooks/useApiRequests";
import WeatherForm from "../WeatherForm/WeatherForm";
import Description from "../Description/Description";
import WeatherCard from "../WeatherCard/WeatherCard";
import './Main.css';
import { useAuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Main = () => {

    const { isAuthenticated, onLogout} = useAuthContext();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/');
        }
    }, [isAuthenticated, navigate]);


    const [prompt, setPrompt] = useState('');
    const [units, setUnits] = useState('metric');
    const [weatherDataLoading, setWeatherDataLoading] = useState(false);
    const [weatherDescriptionLoading, setWeatherDescriptionLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const { error, promptData, locationData, weatherData, weatherDescription } = useApiRequests(prompt);

    useEffect(() => {
        if (error) {
            setErrorMsg(error);
            setWeatherDataLoading(false);
        }
    }, [error]);

    useEffect(() => {
        if (weatherData) {
            setWeatherDataLoading(false);
        }
    }, [weatherData]);

    useEffect(() => {
        if (weatherDescription) {
            setWeatherDescriptionLoading(false);
        }
    }, [weatherDescription]);

    useEffect(() => {
        if (promptData && promptData.units) {
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
        <>
      
            {isAuthenticated && <div className='container'>
                <header className='header'>
                    <h1 className='page-title'>
                        Current Weather
                    </h1>
                    <WeatherForm onSubmit={handleSubmit} />
                    {error && <p className='error'>{errorMsg}</p>}
                    {weatherDescription ? <Description isLoading={weatherDescriptionLoading} weatherDescription={weatherDescription} />
                        : (<Description isLoading={weatherDescriptionLoading} />)}
                </header>
                <main className='main-content'>
                    {weatherData.name && !errorMsg ? (
                        <WeatherCard
                            isLoading={weatherDataLoading}
                            data={weatherData}
                            units={units}
                            country={promptData.country}
                            USstate={locationData[0].state}
                            setUnits={setUnits}
                        />
                    ) : (
                        <WeatherCard
                            isLoading={weatherDataLoading}
                        />
                    )}
                </main>
            </div>}
        </>

    )
}

export default Main;