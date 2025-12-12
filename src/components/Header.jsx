import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFilter,
    faMagnifyingGlass,
    faSort
} from "@fortawesome/free-solid-svg-icons";
import { SearchBar } from "./utility";

export default function Header(props) {
    const handleSearch = () => {
        props.onSearch();
    };

    return (
        <header>
            <h1>THE SCHOLARSHIP HUB</h1>
            <section className="actions">
                <label htmlFor="find">
                    <input type="text" name="findOpportunity" />
                </label>
                <button type="button" onClick={handleSearch} id="find">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </section>
        </header>
    );
}
