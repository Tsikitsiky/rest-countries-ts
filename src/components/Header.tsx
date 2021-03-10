import React from 'react'
//import styled from 'styled-components'

type Props ={
    title: string
}

// const Wrapper = styled.div`
//     display: flex;
//     justify-content: space-between;
// `

const Header = ({title}:Props) => {
    return (
        <div>
            <h1 data-testid="title">{title}</h1>
            <button>Mode</button>
        </div>
    )
}

export default Header
