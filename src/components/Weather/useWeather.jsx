import { createContext, useReducer, useContext } from 'react';
import { weatherActions } from './constants';

const WeatherContext = createContext();
const initialState = {
    weatherData: null,
    isLoading: false
};

function weatherReducer(state, action) {
    console.log(state, action);
    switch (action.type) {
        case weatherActions.search: {
            console.log(`${weatherActions.search} is called`);
            console.log(action);
            return { ...state, isLoading: true };
        }

        case weatherActions.clear: {
            console.log(`${weatherActions.clear} is called`);
            console.log(action);
            return { ...initialState };
        }

        default: {
            throw new Error(`Unhandled type: ${action.type}`);
        }
    }
}

function WeatherProvider({ children }) {
    const [state, dispatch] = useReducer(weatherReducer, initialState);
    const value = { state, dispatch };
    return (
        <WeatherContext.Provider value={value}>
            {children}
        </WeatherContext.Provider>
    );
}

function useWeather() {
    const context = useContext(WeatherContext);
    if (context === undefined) {
        throw new Error(`useWeather must be used within a WeatherProvider`)
    }
    return context;
}

export { WeatherProvider, useWeather }
