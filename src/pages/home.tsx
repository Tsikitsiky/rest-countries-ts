import React, { useContext } from 'react'
import { Context } from '../components/GlobalContext';
import Filter from '../components/Filter';
import Header from '../components/Header';
import styled from 'styled-components';
import {Link} from 'react-router-dom'


const Home = () => {
    interface Country {
        name: string,
        flag: string,
        population: number,
        region: string,
        capital: string
    }
    const { countriesToDisplay} = useContext(Context);
    console.log(countriesToDisplay);
    
    return (
        <>
            <Header title="Where in the world?" />
            <Filter />
            <Container>
                {countriesToDisplay?.map((country: Country) => <Card key={country.name}  >
                    <Link to={`/${country.name}`}>
                    <img src={country.flag} alt={country.name} style={{width: "300px"}} />
                    <h3>{country.name}</h3>
                    <p>Population: {country.population}</p>
                    <p>Region: {country.region}</p>
                    <p>Capital: {country.capital}</p>
                    </Link>
                </Card>)}
            </Container>
        </>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    row-gap: 2rem;
    flex-wrap: wrap
`;

const Card = styled.div`
    max-width: 450px; 
    box-shadow: 1px 0px 1px 0px rgba(0,0,0,0.5);


    img {
        max-width: 100%;
    }
`

export default Home
