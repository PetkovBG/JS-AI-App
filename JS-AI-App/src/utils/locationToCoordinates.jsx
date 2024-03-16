

const LocationToCoordinates = async (locationString) => {

    try {
        const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${locationString}&limit=1&APPID=${import.meta.env.VITE_OWM
            }`);

        const locationData = await response.json();
        if (locationData.length === 0) {
            throw new Error('No location found by that name. Try again.')
        }
        return locationData;
    } catch (error) {
        console.log('Location error: ', error);
        return await Promise.reject(error)
    }
}
export default LocationToCoordinates;