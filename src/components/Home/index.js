import styles from './styles.module.css'

import { Navbar } from '../Navbar'
import { CountriesList } from '../CountriesList'
import { CountryDetails } from '../CountryDetails'


export function Home() {
    return (
        <>

            {<Navbar />}

            <div className="container">
            
                <div className="row">

                    <div className={`col-5 ${styles.conteriesScroll}`}>
                    
                        <div className="list-group">

                            {<CountriesList />}

                        </div>

                    </div>

                    <div className="col-7">

                        {<CountryDetails />}

                    </div>

                </div>

            </div>



        </>
    )
}