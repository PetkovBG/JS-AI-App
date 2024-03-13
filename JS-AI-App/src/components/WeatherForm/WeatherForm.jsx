import { useState } from 'react';
import './WeatherForm.css';

const WeatherForm = ({onSubmit}) => {

    const [inputLocation, setInputLocation] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(inputLocation);
    }

    return(
        <form className='location-form' onSubmit={handleSubmit}>
            <div className='location-form-elements'>
                <label htmlFor='location'>Enter location:</label>
                <input 
                id='location'
                type='text'
                value={inputLocation}
                onChange={(e) => setInputLocation(e.target.value)}
                placeholder='City, state code (if USA), country code'
                />
                <input type='submit' value='Submit' />
            </div>
            <p className='instructions'>
            For USA, enter &quot;city,two-letter state code,US&quot; eg
        &quot;Oskaloosa,IA,US&quot;. For every other country, enter
        &quot;city,two-letter country code&quot; eg. &quot;Lillehammer,NO&quot;.
            </p>
        </form>
    )
}

export default WeatherForm;