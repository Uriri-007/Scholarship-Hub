import { useState, useEffect} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faGraduationCap, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import clsx from "clsx";
import axios from "axios"

export default function Scholarships(props) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  
  const BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID
  const AIRTABLE_PAT = import.meta.env.VITE_AIRTABLE_PAT
  const TABLE_ID = import.meta.env.VITE_AIRTABLE_TABLE_ID
  const API_URL = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_ID}`
  
  useEffect(() => {
    axios.get(API_URL, {
        headers: {
            Authorization: `Bearer ${AIRTABLE_PAT}`,
        },
    })
    .then(response => {
        setData(response[0].fields.Sponsor)
        alert("true")
        return
    })
    .catch(err => {
        setError(err)
        return
    });
}, []);

  return (
    <main>
      <div className="scholarship">
        <div className="title">
          <h2>Jim Ovia Foundation Scholarship 2025 <span className="status open">Ongoing</span></h2>
        </div>
        
        <p className="description">Provides comprehensive financial support for brilliant, indigent Nigerian students throughout their undergraduate studies.</p>
        
        <div className="features">
          <span>Undergraduate <FontAwesomeIcon icon={faCheckCircle}/></span>
          <span>NGN250,000 <FontAwesomeIcon icon={faGraduationCap}/></span>
          <span>2nd Dec, 2025 <FontAwesomeIcon icon={faClock}/></span>
        </div>
        
        <a className="apply" href="https://jimoviafoundation.org/2025-jim-ovia-scholarship-application-new-applicants/" rel="noopener noreferrer" target="_blank">Go to page</a>
      </div>
    </main>
    )

}