import { FiAward } from 'react-icons/fi';

export default function Certifications({ certifications }) {
    return (
        <section id="certifications" className="section section--alt">
            <div className="container">
                <h2 className="section__title">Certifications</h2>
                <div className="certs__grid">
                    {certifications.map((cert) => (
                        <div className="cert-card" key={cert.name}>
                            <FiAward className="cert-card__icon" />
                            <h3 className="cert-card__name">{cert.name}</h3>
                            <p className="cert-card__issuer">{cert.issuer}</p>
                            <span className="cert-card__period">{cert.period}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
