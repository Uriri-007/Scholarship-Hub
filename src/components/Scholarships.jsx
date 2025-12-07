import { useState, useEffect } from "react";
import LoadingUI from "./LoadingUI";
import ScholarshipUI from "./ScholarshipUI";
import ErrorUI from "./ErrorUI"
import axios from "axios";

export default function Scholarships(props) {
    const [data, setData] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID;
    const AIRTABLE_PAT = import.meta.env.VITE_AIRTABLE_PAT;
    const TABLE_ID = import.meta.env.VITE_AIRTABLE_TABLE_ID;
    const API_URL = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_ID}`;

    useEffect(() => {
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
                return;
            })
            .catch(err => {
                setError(err);
                setLoading(false);
                return;
            });
    }, []);

    return (
        <main>
            {loading ? (
                <LoadingUI />
            ) : data ? (
                data.map(record => (
                    <ScholarshipUI key={record.id} fields={record.fields} />
                ))
            ) : error ? (
                <ErrorUI />
            ) : ""}
        </main>
    );
}
