import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faClock,
    faGraduationCap,
    faCheckCircle,
    faCalendar
} from "@fortawesome/free-solid-svg-icons";

export default function ScholarshipUI({ fields }) {
  const classNames = {
    status: true,
    open: fields.Status === "Ongoing",
    closed: fields.Status === "Closed",
    upcoming: fields.Status === "Upcoming"
  }
  
  const processDate = () => {
    const date = new Date(fields.Date)
    return date.toLocaleDateString()
  }
  
    return (
        <div className="scholarship">
            <div className="title">
                <h2>
                    {fields["Scholarship Name"]}
                    <span className={clsx(classNames)}>{fields.Status}</span>
                </h2>
            </div>

            <p className="description">{fields.Description}</p>

            <div className="features">
                {fields.Eligibility.map((criterion, index) => (
                    <span key={index}>
                        {criterion} <FontAwesomeIcon icon={faCheckCircle} />
                    </span>
                ))}
                <span>
                    {fields.Value} <FontAwesomeIcon icon={faGraduationCap} />
                </span>
                <span>
                    { processDate() } <FontAwesomeIcon icon={fields.Status === "Ongoing" ? faClock : faCalendar} />
                </span>
            </div>

            <a
                className="apply"
                href={fields["Official Link"]}
                rel="noopener noreferrer"
                target="_blank"
            >
                Go to page
            </a>
        </div>
    );
}
