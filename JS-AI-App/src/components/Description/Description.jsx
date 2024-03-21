import Loader from '../Loader/Loader';
import './Description.css';

const Description = ({ isLoading, weatherDescription }) => {
    console.log('weather description received--', weatherDescription);
    return (
        <div className='description'>
            <h2 className='description__title'>
                Description
            </h2>
            <div className='description__divider'>
                {isLoading && <Loader />}
                <p className='description__text'>{weatherDescription}</p>
            </div>
        </div>
    )
}


export default Description;