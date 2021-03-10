import React, { useContext, useState } from 'react'
import { Context } from './GlobalContext'

const Filter = () => {
    interface Country {
        region: string
    }
    const {allCountries} = useContext(Context);
    const [region, setRegion] = useState('');
    
    return (
        <div>
            <input placeholder="Search for a country" />
            <select>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Europe">Europe</option>
                <option value="Asia">Asia</option>
                <option value="Oceanie">Oceanie</option>
                <option value="Polar">Polar</option>
            </select>
        </div>
    )
}

export default Filter
