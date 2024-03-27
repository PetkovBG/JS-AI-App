import { useState } from "react";


export const useLocalStorage = (key, initialValue) => {

    const [state, setState] = useState(() => {
        
        const persistedStateSerialized = localStorage.getItem(key);

        if(persistedStateSerialized) {
            const peristedState = JSON.parse(persistedStateSerialized);
            return peristedState;
        }
        return initialValue;
    });

    const setLocalStorage = (value) => {
        setState(value);
        localStorage.setItem(key, JSON.stringify(value))
    }

    return [
        state,
        setLocalStorage
    ]
}