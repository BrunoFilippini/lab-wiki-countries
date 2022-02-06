import { Navbar } from '../Navbar'
import { CountriesList } from '../CountriesList'
import { CountriesDetails } from '../CountriesDetails'

export function Home() {
    return (
        <>

            {<Navbar />}

            <div className="container">
            
                <div className="row">

                    {<CountriesList />}

                    {<CountriesDetails />}

                </div>

            </div>



        </>
    )
}