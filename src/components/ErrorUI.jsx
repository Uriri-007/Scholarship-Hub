import "../styles/Error.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUnlink } from "@fortawesome/free-solid-svg-icons";


export default function ErrorUI() {
  return (
    <section className="error">
      <h2>weak or no connection</h2>
      <p>Check your network connection and try again</p>
      <span className="signal-icon"><FontAwesomeIcon icon={ faUnlink }/></span>
    </section>
    )
}