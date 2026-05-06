import { Link } from "react-router"

export default function Prepage() {
    return (
        <div className="landing-page">
            <header>
                <h2>THE SCHOLARSHIP HUB</h2>
            </header>
            <section className="welcome-text">
                <h1>Unlock Your Academic Future</h1>
                <p>
                    Finding funding shouldn't be a full-time job. Scholarship
                    Hub was built by students, for students, to bridge the gap
                    between academic dreams and financial reality.
                </p>
                <p>
                    We do the heavy lifting—scouring official portals and
                    government announcements to bring you a verified, searchable
                    directory of scholarships specifically for Nigerian
                    undergraduates.
                </p>
                <p>
                    Whether you are in 100L or your final year, we ensure no
                    brilliant mind is held back by tuition costs. Your journey
                    to a debt-free education starts here.
                </p>
                <Link to="scholarships" className="link">Find a Scholarship</Link>
            </section>
        </div>
    );
}
