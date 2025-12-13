import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router"
import {
    faFilter,
    faMagnifyingGlass,
    faSort
} from "@fortawesome/free-solid-svg-icons";

export default function Prepage(props) {
    const handleSearch = () => {
        props.onSearch();
    };

    return (
        <>
            <header>
                <h2>THE SCHOLARSHIP HUB</h2>
            </header>
            <section className="welcome-text">
                <h1>Your Gateway to Nigerian University Scholarships</h1>
                <p>
                    Finding funding shouldn't be a full-time job. Scholarship
                    Hub was built by a student, for students, to bridge the gap
                    between academic dreams and financial reality.
                </p>
                <p>
                    We do the heavy lifting—scouring official portals and
                    government announcements to bring you a verified, searchable
                    directory of scholarships specifically for Nigerian
                    undergraduates. No more endless searching or scams; just a
                    clean, fast list of the best opportunities available.
                </p>
                <p>
                    Whether you are in 100L or your final year, we ensure no
                    brilliant mind is held back by tuition costs. Your journey
                    to a debt-free education starts here. Browse, filter, and
                    apply today.
                </p>
    <Link to="scholarships" className="link">Find a Scholarship</Link>
            </section>
        </>
    );
}
