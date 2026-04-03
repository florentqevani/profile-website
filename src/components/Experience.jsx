import { FiBriefcase } from 'react-icons/fi';

export default function Experience({ experience }) {
    return (
        <section id="experience" className="section section--alt">
            <div className="container">
                <h2 className="section__title">Experience</h2>
                <div className="timeline">
                    {experience.map((job) => (
                        <div className="timeline__item" key={job.company}>
                            <div className="timeline__marker">
                                <FiBriefcase />
                            </div>
                            <div className="timeline__content">
                                <span className="timeline__period">{job.period}</span>
                                <h3 className="timeline__role">{job.role}</h3>
                                <p className="timeline__company">{job.company}</p>
                                <ul className="timeline__points">
                                    {job.points.map((p) => (
                                        <li key={p}>{p}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
