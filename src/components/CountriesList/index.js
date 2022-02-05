/* import { useState } from "react"; */
import countries from '../../countries.json'
import styles from './styles.module.css'

import { Link } from "react-router-dom";

export function CountriesList() {

    return (

        <>

           {countries.map((country, index) => {

                return (

                    <a key={index} className="list-group-item list-group-item-action" href={country.alpha3Code} >

                        <img src="https://flagpedia.net/data/flags/icon/72x54/aw.png" alt={`${country.name.common} country flag`} />

                        <p>{country.name.common}</p>

                    </a>
                )

            })}

        </>

    )

}