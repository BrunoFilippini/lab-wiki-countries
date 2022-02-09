import styles from './styles.module.css';

import { useParams } from 'react-router-dom';

import countries from '../../countries.json';
import { Link } from 'react-router-dom';

export function CountriesDetails() {
  /*   const [details, setDetails] = useState([]) */

  const alpha3Code = useParams();

  /*  function pesquisaPais(){
    countries.filter((currenntElement) => {
      console.log(currenntElement)
      return currenntElement.alpha3Code === useParams.alpha3Code
        setDetails(currenntElement) 
        
    })
    } */

  let searchCountry = countries.filter((currentCountry) => {
    return currentCountry.alpha3Code === alpha3Code.alpha3Code;
  });

  return (
    <>
      <div className="col-7">
        <img
          src={`https://flagpedia.net/data/flags/icon/72x54/${searchCountry[0].alpha2Code.toLowerCase()}.png`}
          alt={`${searchCountry[0].name.common} country flag`}
          className={styles.img}
        />

        <h1>{searchCountry[0].name.common}</h1>

        <table className="table">
          <thead></thead>

          <tbody>
            <tr>
              <td className={styles.td}>Capital</td>

              <td>{searchCountry[0].capital}</td>
            </tr>

            <tr>
              <td>Area</td>

              <td>
                {searchCountry[0].area} km <sup>2</sup>
              </td>
            </tr>

            <tr>
              <td>Borders</td>

              <td>
                <ul>
                  {searchCountry[0].borders.map((borders, index) => (
                    <li key={index}>
                      <Link to={`/${borders}`}>{borders}</Link>
                    </li>
                  ))}

                  {/*  <li><a href="/AND">Andorra</a></li>
                    <li><a href="/BEL">Belgium</a></li>
                    <li><a href="/DEU">Germany</a></li>
                    <li><a href="/ITA">Italy</a></li>
                    <li><a href="/MCO">Monaco</a></li>
                    <li><a href="/ESP">Spain</a></li>
                    <li><a href="/CHE">Switzerland</a></li>
  */}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
