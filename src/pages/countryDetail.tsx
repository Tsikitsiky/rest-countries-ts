import React, { useContext } from 'react'
import { useParams } from 'react-router'
import { Context } from '../components/GlobalContext';

const CountryDetail = () => {
    
    type Country = {
        name: string,
        nativeName: string,
        population: number,
        region: string,
        subregion: string,
        capital: string,
        topLevelDemand: [],
        currencies: [],
        languages: [],
        borders: []
    }

    interface RouteParams {
        name: string
    }
    const  { name} = useParams<RouteParams>();
    const {allCountries} = useContext(Context);
    const country = allCountries?.find((country: Country) => country.name === name);
    console.log(country);
    
    return (
        <div>
            <h3>{country?.name}</h3>
        </div>
    )
}

export default CountryDetail
