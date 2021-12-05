import React, { useContext } from 'react'
import styled from 'styled-components'
import { Context } from './GlobalContext'

type Props ={
    title: string
}

const Wrapper = styled.div`
    width: 100%;
    background-color: ${props => props.theme.colors.backgroundElement};
    color: ${props => props.theme.colors.primary};
    box-shadow: 0 0.3rem 0.5rem 0 rgba(0,0,0,0.06);

    .content {
        display: flex;
        justify-content: space-between;
        max-width: 1240px;
        margin: 0 auto;
    }

    button {
        background: none;
        border: none;
        color: ${props => props.theme.colors.primary};
    }
`


const Header = ({title}:Props) => {
    const {darkMode, switchMode} = useContext(Context);
    return (
            <Wrapper>
                <div className='content'>
                    <h1 className={darkMode? 'dark' : ''} data-testid="title">{title}</h1>
                    <button data-testid="swicthMode" onClick={switchMode}>Dark Mode</button>
                </div>
            </Wrapper>
    )
}

export default Header
