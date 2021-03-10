import React, { useContext } from 'react'
import styled from 'styled-components'
import { Context } from './GlobalContext'

type Props ={
    title: string
}

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 1140px;
    margin: 0 auto;

    .dark {
        color: white;
        background-color: hsl(219, 30%, 18%);
    }

    button {
        background-color: transparent;
        border: none;
    }
`


const Header = ({title}:Props) => {
    const {darkMode, switchMode} = useContext(Context);
    return (
        <Wrapper>
            <h1  className={darkMode? 'dark' : ''} data-testid="title">{title}</h1>
            <button  className={darkMode? 'dark' : ''} onClick={switchMode}>Mode</button>
        </Wrapper>
    )
}

export default Header
