import React, { createContext, useEffect, useReducer } from "react";

interface State {
    allCountries?: [],
    countriesToDisplay?: [],
    darkMode: boolean,
    loading: boolean
}

interface initial {
    allCountries?: [],
    countriesToDisplay?: [],
    darkMode: boolean,
    loading: boolean,
    searchACountry: (param: string) => void,
    filterByRegion: (param: string) => void,
}

const initialStates: initial = {
    allCountries: [],
    countriesToDisplay: [],
    darkMode: false,
    loading: true,
    searchACountry: () => {},
    filterByRegion: () => {},
}


type Action =
    | {type: "LOAD_DATA", data: []} 
    | {type: "SEARCH_A_COUNTRY", data: []} 
    | {type: "FILTER_BY_REGION", data: []}

const Context = createContext(initialStates);

function reducer(state: State, action: Action) {
    switch (action.type) {
        case 'LOAD_DATA':
            return {
                ...state,
                loading: false,
                allCountries: action.data,
                countriesToDisplay: action.data
            }
        case 'SEARCH_A_COUNTRY':
            return {
                ...state,
                loading: false,
                countriesToDisplay: action.data
            }
        case 'FILTER_BY_REGION':
            return {
                ...state,
                loading: false,
                countriesToDisplay: action.data
            }
        default:
            return state
    }
}

interface Country {
    name: string,
    flag: string
}

const ContextProvider: React.FC = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialStates);
    async function fetchData() {
        const data = await fetch('https://restcountries.eu/rest/v2/all');
        const response = await data.json();
        dispatch({type: "LOAD_DATA", data: response})
    }
    useEffect(() => {
        fetchData();
        
    }, [])

    function searchACountry(input: string) {
        const countries = state.allCountries?.filter((country:Country) => country.name.includes(input));
        dispatch({type: "SEARCH_A_COUNTRY", data: countries})
    }

    function filterByRegion(input: string) {
        const countries = state.allCountries?.filter((country: Country) => country.name.includes(input));
        dispatch({type: "FILTER_BY_REGION", data: countries})
    }
    return (
        <Context.Provider value={{
            allCountries: state.allCountries, 
            countriesToDisplay: state.countriesToDisplay, 
            darkMode: state.darkMode, 
            loading: state.loading,
            searchACountry: searchACountry,
            filterByRegion: filterByRegion
            }}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}