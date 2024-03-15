import './WeatherCard.css';

const tempTranslator = (temp, unit) => {
    const allTemps = {
        k: {
            value: temp,
            unit: '°k'
        },
        c: {
            value: temp - 273,
            unit: '°C'
        },
        f: {
            value: 1.8 * (temp - 273) + 32,
            unit: '°F',
        },
    };
    if (unit === 'metric') {
        return allTemps.c;
    } else if (unit === 'imperial') {
        return allTemps.f;
    } else {
        return allTemps.k;
    }
}

const speedTranslator = (speed, units) => {
    const allSpeeds = {
        metric: {
            value: speed,
            unit: 'm/s'
        },
        imperial: {
            value: speed * 3.281,
            unit: 'ft/s'
        }
    }
    if (units === 'metric') {
        return allSpeeds.metric;
    } else if (units === 'imperial') {
        return allSpeeds.imperial;
    } else {
        return allSpeeds.metric;
    }
}

const WeatherCard = ({ isLoading, data, units, country, USstate, setUnits }) => {


    //TODO remove ? after data accross this component
    //TODO - add props to jsx when available to display data
    const displayState = () => {
        if (data?.sys.country === 'US') {
            return `${USstate}`
        } else {
            return '';
        }
    }

    const handleUnitChange = () => {
        if (units === 'metric') {
            setUnits('imperial')
        } else {
            setUnits('metric')
        }
    }

    const windDirStyle = {
        transform: `rotate(${data?.wind.deg + 90}deg)`
    }

    return (
        <article className='weather-card'>
            {isLoading && <Loader />}
            <div className='weather-card__data'>
                <div className='weather-card__meta'>
                    <div className='weather-card__meta-location'>
                        {`${data?.name}${displayState()}, ${country}`}
                    </div>
                </div>

                <div className='weather-card__temp'>
                    <span className='temp'>
                        {tempTranslator(data.main.temp, units).value.toFixed(1)}
                    </span>
                    <span className='temp-unit'>
                        {tempTranslator(data.main.temp, units).unit}
                    </span>
                </div>
                <div className='weather-card__wind'>
                    <div className='weather-card__wind-speed'>
                        <span className='speed'>
                            {speedTranslator(data.wind.speed, units).value.toFixed(1)}
                        </span>
                        <span className='wind-unit'>
                            {speedTranslator(data.wind.speed, units).unit}
                        </span>
                    </div>
                    <div className='weather-card__wind-dir' style={windDirStyle}>
                        <span className='screen-reader-text'>
                            ${data.wind.deg}
                        </span>
                    </div>
                </div>
                <button id='units' onClick={handleUnitChange}>
                    Change Units
                </button>
            </div>
        </article>
    )
}

export default WeatherCard;