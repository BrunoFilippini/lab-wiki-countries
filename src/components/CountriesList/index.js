import countries from '../../countries.json'
import styles from './styles.module.css'


export function CountriesList() {

    return (

        <>
            <div className={`col-5 ${styles.conteriesScroll}`}>

                {countries.map((country, index) => {

                    return (
                        <div key= {index} className="list-group">

                            <a className="list-group-item list-group-item-action" href={country.alpha3Code} >

                                <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}  alt={`${country.name.common} country flag`} />

                                <p>{country.name.common}</p>

                            </a>

                        </div>
                    )

                })}

            </div>

        </>

    )

}