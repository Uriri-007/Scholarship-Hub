import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faClock,
    faGraduationCap,
    faCheckCircle,
    faCalendar
} from "@fortawesome/free-solid-svg-icons";

export default function ScholarshipUI({ fields }) {
  if (!fields) return null;

  const classNames = {
    status: true,
    open: fields.Status === "Ongoing",
    closed: fields.Status === "Closed",
    upcoming: fields.Status === "Upcoming"
  }
  
  const processDate = () => {
    if (!fields.Date) return "N/A";
    try {
        const date = new Date(fields.Date)
        return date.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
    } catch (e) {
        return "Invalid Date";
    }
  }
  
    return (
        <div className="scholarship-card">
            <div className="card-header">
                <h2>{fields["Scholarship Name"] || "Untitled Scholarship"}</h2>
                <span className={clsx(classNames)}>{fields.Status || "Unknown"}</span>
            </div>

            <p className="description">{fields.Description || "No description available."}</p>

            <div className="features">
                {fields.Eligibility && Array.isArray(fields.Eligibility) ? fields.Eligibility.map((criterion, index) => (
                    <span key={index} className="feature-tag">
                        {criterion} <FontAwesomeIcon icon={faCheckCircle} />
                    </span>
                )) : null}
                {fields.Value && (
                    <span className="feature-tag value">
                        {fields.Value} <FontAwesomeIcon icon={faGraduationCap} />
                    </span>
                )}
                <span className="feature-tag date">
                    { processDate() } <FontAwesomeIcon icon={fields.Status === "Ongoing" ? faClock : faCalendar} />
                </span>
            </div>

            <a
                className="apply-btn"
                href={fields["Official Link"]}
                rel="noopener noreferrer"
                target="_blank"
            >
                Apply Now
            </a>
        </div>
    );
}
