import { FiMail, FiPhone, FiMapPin, FiGithub } from 'react-icons/fi';

export default function Contact({ email, phone, location, github }) {
    const items = [
        { icon: <FiMail />, label: email, href: `mailto:${email}` },
        { icon: <FiPhone />, label: phone, href: `tel:${phone.replaceAll(/\s/g, '')}` },
        { icon: <FiMapPin />, label: location },
        { icon: <FiGithub />, label: 'GitHub', href: github },
    ];

    return (
        <section id="contact" className="section">
            <div className="container">
                <h2 className="section__title">Get In Touch</h2>
                <div className="contact__grid">
                    {items.map((item) => (
                        <div className="contact-card" key={item.label}>
                            <span className="contact-card__icon">{item.icon}</span>
                            {item.href ? (
                                <a href={item.href} target="_blank" rel="noopener noreferrer" className="contact-card__label">
                                    {item.label}
                                </a>
                            ) : (
                                <span className="contact-card__label">{item.label}</span>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
