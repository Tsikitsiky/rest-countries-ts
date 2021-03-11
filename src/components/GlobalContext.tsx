import React, { createContext, useEffect, useReducer } from "react";

interface subArr {
    subArr: string
}

interface language {
    name: string
}

interface currency {
    code: string
}

interface Country {
    name: string,
    nativeName: string,
    population: number,
    flag: string,
    region: string,
    subregion: string,
    capital: string,
    topLevelDomain: subArr[],
    currencies: currency[],
    languages: language[],
    borders: subArr[]
}

interface State {
    allCountries?: Country[],
    countriesToDisplay?: Country[],
    darkMode: boolean,
    loading: boolean
}

interface initial {
    allCountries?: Country[],
    countriesToDisplay?: Country[],
    darkMode: boolean,
    loading: boolean,
    searchACountry: (param: string) => void,
    filterByRegion: (param: string) => void,
    switchMode: () => void,
}

const initialStates = {
    allCountries: [],
    countriesToDisplay: [],
    darkMode: false,
    loading: true,
    searchACountry: () => {},
    filterByRegion: () => {},
    switchMode: () => {}
}

interface data {
    data: []
}

type Action =
    | {type: "LOAD_DATA", data: []} 
    | {type: "SEARCH_A_COUNTRY", data?: Country[]} 
    | {type: "FILTER_BY_REGION", data?: Country[]}
    | {type: "SWITCH_MODE"}

const Context = createContext<initial>(initialStates);

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
        case 'SWITCH_MODE':
            return {
                ...state,
                darkMode: !state.darkMode
            }
        default:
            return state
    }
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
        console.log(input);
        const countries = state.allCountries?.filter((country) => country.name.toLowerCase().includes(input.toLocaleLowerCase()));
        dispatch({type: "SEARCH_A_COUNTRY", data: countries})
    }

    function filterByRegion(input: string) {
        const countries = state.allCountries?.filter((country) => country.region === input);
        dispatch({type: "FILTER_BY_REGION", data: countries})
    }

    function switchMode() {
        dispatch({type: "SWITCH_MODE"});
        console.log('Dark?', state.darkMode);
        
    }
    return (
        <Context.Provider value={{
            allCountries: state.allCountries, 
            countriesToDisplay: state.countriesToDisplay, 
            darkMode: state.darkMode, 
            loading: state.loading,
            searchACountry,
            filterByRegion,
            switchMode,
            }}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}