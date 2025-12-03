import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faMagnifyingGlass, faSort } from '@fortawesome/free-solid-svg-icons';


export default function Header(props) {
  return (
    <header>
      <h1>THE SCHOLARSHIP HUB</h1>
      <section className="actions">
        <button type="button">Find <FontAwesomeIcon icon={faMagnifyingGlass}/></button>
        <button type="button">Filter <FontAwesomeIcon icon={faFilter} /></button>
        <button type="button">Sort <FontAwesomeIcon icon={faSort} /></button>
      </section>
    </header>
    )
}