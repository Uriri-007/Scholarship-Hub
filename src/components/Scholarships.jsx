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
            "Authorization": `Bearer ${AIRTABLE_PAT}`,
        },
    })
    .then(response => {
        setData(response)
        alert(`data ${data}`)
        return
    })
    .catch(err => {
        setError(err)
        alert(`error ${error}`)
        return
    });
}, []);

}