import { FiBookOpen } from 'react-icons/fi';

export default function Education({ education }) {
    return (
        <section id="education" className="section">
            <div className="container">
                <h2 className="section__title">Education</h2>
                <div className="timeline">
                    {education.map((edu) => (
                        <div className="timeline__item" key={edu.degree}>
                            <div className="timeline__marker">
                                <FiBookOpen />
                            </div>
                            <div className="timeline__content">
                                <span className="timeline__period">{edu.period}</span>
                                <h3 className="timeline__role">{edu.degree}</h3>
                                <p className="timeline__company">{edu.school}</p>
                                <ul className="timeline__points">
                                    {edu.details.map((d) => (
                                        <li key={d}>{d}</li>
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
