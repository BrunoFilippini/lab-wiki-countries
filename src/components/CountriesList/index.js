import countries from '../../countries.json';
import styles from './styles.module.css';

import { Link } from 'react-router-dom';

export function CountriesList() {
  return (
    <>
      <div className={`col-5 ${styles.conteriesScroll}`}>
        {countries.map((country, index) => {
          return (
            <div key={index} className="list-group">
              <Link
                className="list-group-item list-group-item-action"
                to={`/${country.alpha3Code}`}
              >
                <img
                  src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                  alt={`${country.name.common} country flag`}
                />

                <p>{country.name.common}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
