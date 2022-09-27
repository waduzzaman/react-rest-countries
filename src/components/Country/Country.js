import React from 'react';
import './Country.css'

const Country = ( props ) =>
{
    // console.log( props.country );
    const {area, region, population,capital , name, flags }=props.country

    return (
        <div className='country'>
            <h2>Country Name: { name.common }</h2>
            <img src={flags.png} alt="" />
            <h3>Capital: {capital}</h3>
            <h3>Population: {population}</h3>
            <h3>Region: {region}</h3>
            <h3><small>Area: {area}</small></h3>
            
        </div>
    );
};

export default Country;