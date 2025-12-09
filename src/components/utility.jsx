import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export function SearchBar(props) {
    return (
        <section className="search">
            <label htmlFor="find">
            <input type="search" name="findOpportunity" id="find" />
            </label>
            <button type="button"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
        </section>
    )
}

