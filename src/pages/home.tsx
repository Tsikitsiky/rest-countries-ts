import React from 'react'
import Countries from '../components/Countries';
import Filter from '../components/Filter';
import Header from '../components/Header';



const Home = () => {
    
    
    return (
        <>
            <Header title="Where in the world?" />
            <Filter />
            <Countries />
        </>
    )
}



export default Home
