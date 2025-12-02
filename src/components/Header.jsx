import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faMagnifyingGlass, faSort } from '@fortawesome/free-solid-svg-icons';


export default function Header(props) {
  return (
    <header>
      <h1>THE SCHOLARSHIP HUB</h1>
      <section className="actions">
        <div>Find <FontAwesomeIcon icon={faMagnifyingGlass}/></div>
        <div>Filter <FontAwesomeIcon icon={faFilter} /></div>
        <div>Sort <FontAwesomeIcon icon={faSort} /></div>
      </section>
    </header>
    )
}