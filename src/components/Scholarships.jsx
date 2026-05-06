import { useState, useEffect } from "react";
import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faSearch } from "@fortawesome/free-solid-svg-icons";
import LoadingUI from "./LoadingUI";
import ScholarshipUI from "./ScholarshipUI";
import ErrorUI from "./ErrorUI"
import axios from "axios";

export default function Scholarships() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");

    const BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID;
    const AIRTABLE_PAT = import.meta.env.VITE_AIRTABLE_PAT;
    const TABLE_ID = import.meta.env.VITE_AIRTABLE_TABLE_ID;
    const API_URL = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_ID}`;

    useEffect(() => {
        if (!BASE_ID || !AIRTABLE_PAT || !TABLE_ID) {
            console.error("Airtable environment variables are missing.");
            setError(new Error("Configuration error"));
            setLoading(false);
            return;
        }

        setLoading(true);
        axios
            .get(API_URL, {
                headers: {
                    Authorization: `Bearer ${AIRTABLE_PAT}`
                }
            })
            .then(response => {
                setData(response.data.records);
                setLoading(false);
            })
            .catch(err => {
                setError(err);
                setLoading(false);
            });
    }, [API_URL, AIRTABLE_PAT, BASE_ID, TABLE_ID]);

    const filteredData = data?.filter(record => {
        const name = record.fields["Scholarship Name"]?.toLowerCase() || "";
        const desc = record.fields.Description?.toLowerCase() || "";
        return name.includes(searchQuery.toLowerCase()) || desc.includes(searchQuery.toLowerCase());
    });

    return (
      <>
        <header className="scholarship-header">
            <Link to="/" className="back-btn">
                <FontAwesomeIcon icon={faArrowLeft} />
            </Link>
            <h2>SCHOLARSHIPS</h2>
            <div className="search-container">
                <input 
                    type="text" 
                    placeholder="Search scholarships..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="search-input"
                />
                <FontAwesomeIcon icon={faSearch} className="search-icon" />
            </div>
        </header>
        <main>
            {loading ? (
                <LoadingUI />
            ) : error ? (
                <ErrorUI />
            ) : filteredData && filteredData.length > 0 ? (
                filteredData.map(record => (<ScholarshipUI key={record.id} fields={record.fields} />))
            ) : data ? (
                <div className="no-results">No scholarships found matching your search.</div>
            ) : null}
        </main>
      </>
    );
}
