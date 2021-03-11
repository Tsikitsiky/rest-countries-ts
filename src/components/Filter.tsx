import React, { useContext, useState } from 'react'
import styled from 'styled-components';
import { Context } from './GlobalContext'

const Filter = () => {
    const {searchACountry, filterByRegion, allCountries} = useContext(Context);
    console.log(allCountries?.map(country => country.region));
    
    const [region, setRegion] = useState('');
    const [country, setCountry] = useState('');
    
    return (
        <Container>
            <input data-testid="search" placeholder="Search for a country" value={country} onChange={(e) => {
                setCountry(e.target.value) 
                searchACountry(e.target.value)
                }} />
            <select value={region} onChange={(e) => {
                setRegion(e.target.value)
                filterByRegion(e.target.value)
                }}>
                <option value="All">Filter by Region</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Europe">Europe</option>
                <option value="Asia">Asia</option>
                <option value="Oceania">Oceania</option>
                <option value="Polar">Polar</option>
            </select>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 2rem 0;
    max-width: 1140px;
    margin: 0 auto;
`;

export default Filter
