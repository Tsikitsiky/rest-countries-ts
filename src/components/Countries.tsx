import React, {useContext} from 'react'
import { Context } from '../components/GlobalContext';
import styled from 'styled-components';
import {Link} from 'react-router-dom'

const Countries = () => {
    
    const { countriesToDisplay, darkMode} = useContext(Context);
    console.log(countriesToDisplay);
    return (
        <Container>
                {countriesToDisplay?.map((country) => <Card key={country.name.common} className='card' >
                    <Link to={`/${country.name.common}`}>
                    <img src={country.flags.png} alt={country.name.common} />
                    <div>
                        <h3>{country.name.common}</h3>
                        <p>Population: {country.population}</p>
                        <p>Region: {country.region}</p>
                        <p>Capital: {country.capital}</p>
                    </div>
                    </Link>
                </Card>)}
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 2rem;

@media (min-width: 376px) {
    flex-direction: row;
    justify-content: space-between; 
    flex-wrap: wrap;
    max-width: 1240px;
    margin: 0 auto;
    height: 100%;

}

    a {
        color: ${props => props.theme.colors.primary};
         text-decoration: none; 
     }

    .card {
        background-color: ${props => props.theme.colors.backgroundElement}
    }
    
`;

const Card = styled.div`
    max-width: 270px; 
    box-shadow: 0px 1px 3px 1px rgb(0 0 0 / 30%);
    border-radius: 2px;
    background-color: 'red';
      
    img {
        width: 100%;
        height: 200px;
        box-shadow: 0px 1px 3px 1px rgb(0 0 0 / 30%)
    }
    div {
        padding: 0 1rem;
    }
`

export default Countries
