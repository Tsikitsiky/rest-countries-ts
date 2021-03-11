import React, { useContext } from 'react'
import styled from 'styled-components'
import { Context } from './GlobalContext'

type Props ={
    title: string
}

const Wrapper = styled.div`
    //background-color: white;
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
        outline: none;
    }
`


const Header = ({title}:Props) => {
    const {darkMode, switchMode} = useContext(Context);
    return (
        <div className={darkMode? 'dark' : 'white'}>
            <Wrapper>
            <h1 data-testid="title">{title}</h1>
            <button className={darkMode? 'dark' : ''} data-testid="swicthMode" onClick={switchMode}>Dark Mode</button>
        </Wrapper>
        </div>
    )
}

export default Header
