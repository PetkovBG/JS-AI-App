import { useEffect, useState } from "react";


const useApiRequests = (prompt) => {
    const [error, setError] = useState(null);
    const [promptData, setPromptData] = useState({});
    const [locationData, setLocationData] = useState({});
    const [weatherData, setWeatherData] = useState({});
    const [weatherDescription, setWeatherDescription] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            if (!prompt) {
                return;
            }

            try {
                const promptDataRes = await PromptLocation(prompt);
                setPromptData(promptDataRes);

                const locationDataRes = await LocationCoordinates(promptDataRes.locationString);
                setLocationData(locationDataRes);

                const weatherDataRes = await WeatherData(locationDataRes);
                setWeatherData(weatherDataRes);

                const weatherDescriptionRes = await WeatherDescription(prompt, weatherDataRes)
                setWeatherDescription(weatherDescriptionRes);
            } catch (error) {
                setError(error);
                console.log('Error in API request: ', error);
            }
        };
        fetchData();
    }, [prompt]);

    return { error, promptData, locationData, weatherData, weatherDescription }
}

export default useApiRequests;