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
        setData(response)
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
        <div>
          <h2>Jim Ovia Foundation Scholarship 2025</h2>
          <span>Ongoing</span>
        </div>
        
        <p>Provides comprehensive financial support for brilliant, indigent Nigerian students throughout their undergraduate studies.</p>
        
        <div className="features">
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        <a className="apply" href="https://jimoviafoundation.org/2025-jim-ovia-scholarship-application-new-applicants/" rel="noopener noreferrer" target="_blank">Go to page</a>
      </div>
    </main>
    )

}