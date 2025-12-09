import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faMagnifyingGlass, faSort } from '@fortawesome/free-solid-svg-icons';
import { SearchBar } from "./utility"

export default function Header(props) {
  const handleSearch = () => {
    props.onSearch();
  }
  
  return (
    <header>
      <h1>THE SCHOLARSHIP HUB</h1>
      <section className="actions">
        <button type="button" onClick={handleSearch}>Find <FontAwesomeIcon icon={faMagnifyingGlass}/></button>
        <button type="button">Filter <FontAwesomeIcon icon={faFilter} /></button>
        <button type="button">Sort <FontAwesomeIcon icon={faSort} /></button>
      </section>
      <SearchBar />
    </header>
    )
}