import React, { useContext, useState } from 'react'
import styled from 'styled-components';
import { Context } from './GlobalContext'

const Filter = () => {
    const {searchACountry, filterByRegion, allCountries, darkMode} = useContext(Context);
    console.log(allCountries?.map(country => country.region));
    
    const [region, setRegion] = useState('');
    const [country, setCountry] = useState('');
    
    return (
        <Container>
            <Input className={darkMode ? 'dark' : 'light'}>
                <input data-testid="search" placeholder="Search for a country" value={country} onChange={(e) => {
                    setCountry(e.target.value) 
                    searchACountry(e.target.value)
                }} />
            </Input>
            <Select>
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
            </Select>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    gap: 2rem;
    flex-direction: column;
    padding: 2rem 1rem;

    .dark {
        background-image: url('../../icons/search-light.svg');
    }

    .light {
        background-image: url('../../icons/search-dark.svg');
    }
    
    @media (min-width: 376px) {
        flex-direction: row;
        justify-content: space-between;
        max-width: 1240px;
        margin: 0 auto;
      }

    
`;

const Input = styled.div`
      width: 300px;
      height: 40px;
      box-shadow: 0px 1px 3px 1px rgb(0 0 0 / 30%);
      border-radius: 2px;
      background-repeat: no-repeat;
      background-size: 24px;
      background-position: left;
      padding-left: 2rem;
      display: flex;
      flex-direction: column;
      justify-content: center;

      input {
          border: none;
          background-color: transparent;
          color: ${props => props.theme.colors.primary};
      }
`

const Select = styled.div`
    width: 150px;
    height: 40px;
    box-shadow: 0px 1px 3px 1px rgb(0 0 0 / 30%);
    border-radius: 2px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    select {
        border: none;
        background-color: transparent;
        color: ${props => props.theme.colors.primary};
    }
`;

export default Filter
