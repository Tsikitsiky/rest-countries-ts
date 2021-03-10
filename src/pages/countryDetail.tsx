import React, { useContext } from 'react'
import { useParams } from 'react-router'
import { Context } from '../components/GlobalContext';
import Header from '../components/Header';
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const CountryDetail = () => {
    
    interface RouteParams {
        name: string
    }

    const  { name} = useParams<RouteParams>();
    const {allCountries, darkMode} = useContext(Context);
    const country = allCountries?.find((country) => country.name === name);
    console.log(country);

    return (
        <>
            <Header title='Where in the world?' />
            <Container>
                <Link to="/">Back</Link>
            </Container>
            <Container>
                <img src={country?.flag} alt={`${country?.name}'s flag`}/>
                <div className={darkMode? 'dark':''}>
                    <TextWrapper>
                        <p>Native Name: {country?.nativeName}</p>
                        <p>Population: {country?.population}</p>
                        <p>Region: {country?.region}</p>
                        <p>Sub Region: {country?.subregion}</p>
                        <p>Capital: {country?.capital}</p>
                        <p>Top Level Domain: {country?.topLevelDomain.map(str => <span key={`${str}`}>{str}</span>)}</p>
                        <p>Currencies: {country?.currencies.map(str => <span key={`${str}`}>{str.code}</span>)}</p>
                        <p>Languages: {country?.languages.map(str => <span key={str.name}>{str.name}</span>)}</p>
                    </TextWrapper>
                    <Border>Boreder Countries: {country?.borders.map(str => <span key={`${str}`}>{str}&nbsp;</span>)} </Border>
                </div>
            </Container>
        </>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 1140px;
    margin: 0 auto;

    .dark {
        color: white;

        a {
            color: white
        }
    }

    img {
        max-width: 40%;
        box-shadow: 0 0 1px 1px rgba(0,0,0, 0.3);
    }

    a {
        text-decoration: none;
        color: black;
        padding: 0.5rem 1rem;
        box-shadow: 0 0 1px 1px rgba(0,0,0, 0.3);
        margin-bottom: 2rem;
    }
`

const TextWrapper = styled.div`
    columns: 2;

    p {
        margin-top: 0
    }
`;

const Border = styled.p`
    margin-top: 2rem;
    margin-bottom: 0;

    span {
        border: 1px solid black;
        padding: 0 0.5rem;
        margin-right: 1rem;
    }
`;

export default CountryDetail
