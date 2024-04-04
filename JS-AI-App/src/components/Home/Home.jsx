import { Link } from 'react-router-dom';
import './Home.css';
import { useAuthContext } from '../../contexts/AuthContext';

const Home = () => {

    const { isAuthenticated, onLogout } = useAuthContext();
    console.log('onLogout', onLogout);

    return (
        <div className='home-wrapper'>
            <Link className='weather-link' to={'/app'}>Weather App</Link>
            {isAuthenticated ? <button className='auth-link' to={'/login'} onClick={onLogout}>Logout</button>
                :
                <Link className='auth-link' to={'/login'}>Login</Link>
            }
        </div>
    )
}

export default Home;