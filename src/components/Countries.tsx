import React, {useContext} from 'react'
import { Context } from '../components/GlobalContext';
import styled from 'styled-components';
import {Link} from 'react-router-dom'

const Countries = () => {
    
    const { countriesToDisplay, darkMode} = useContext(Context);
    console.log(countriesToDisplay);
    return (
        <Container>
                {countriesToDisplay?.map((country) => <Card key={country.name} className={darkMode? 'dark': ''} >
                    <Link to={`/${country.name}`}>
                    <img src={country.flag} alt={country.name} style={{width: "300px"}} />
                    <div>
                        <h3>{country.name}</h3>
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
    justify-content: space-between;
    row-gap: 2rem;
    flex-wrap: wrap;
    max-width: 1140px;
    margin: 0 auto;

    .dark {
        background-color: hsl(219, 30%, 18%);
        a {
            color: white;
        }
    }
`;

const Card = styled.div`
    max-width: 450px; 
    box-shadow: 0px 1px 0.5px 2px rgba(0,0,0,0.3);
    border-radius: 2px;
     
     a {
         color: black;
         text-decoration: none; 
     }

    img {
        width: 100%;
        height: 200px;
        box-shadow: 0px 1px 0px 0px rgba(0,0,0,0.3);
    }
    div {
        padding: 0 1rem;
    }
`

export default Countries
