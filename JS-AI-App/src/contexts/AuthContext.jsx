import { createContext } from "react";
import { useNavigate } from "react-router-dom";


export const AuthContext = createContext(null);

export const AuthContextProvider = ({children}) => {

    const navigate = useNavigate();

    

}