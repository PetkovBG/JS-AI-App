import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";


export const AuthContext = createContext(null);

export const AuthContextProvider = ({children}) => {

    const navigate = useNavigate();

    const [auth, setAuth] = useLocalStorage('auth', {});
    const [error, setError] = useState(null);


    const onLoginSubmit = (loginData) => {
        const dbUsername = import.meta.env.VITE_USERNAME;
        const dbPassword = import.meta.env.VITE_PASSWORD;
        if((loginData.username !== dbUsername) || loginData.password !== dbPassword) {
            console.log('return!');
            setError('Invalid username or password.')
            return;
        }
        setAuth({
            username: loginData.username,
            token: !!loginData.password
        });
        console.log('auth---', auth);
        navigate('/app');

    }

    const onLogout = () => {
        setAuth({});
    }

    const contextValues = {
        onLoginSubmit,
        onLogout,
        error,
        setError,
        username: auth.username,
        isAuthenticated: !!auth.token,
    }

    return (

        <AuthContext.Provider value={contextValues}>
            {children}
        </AuthContext.Provider>
    )

}

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    return context;
}