import { FiGithub, FiMail, FiArrowDown } from 'react-icons/fi';
import profileImg from '../assets/Profile.jpg';

export default function Hero({ name, title, github, email }) {
    return (
        <section className="hero">
            <div className="hero__content">
                <p className="hero__greeting">Hello, I'm</p>
                <h1 className="hero__name">{name}</h1>
                <img src={profileImg} alt={name} className="hero__avatar" />
                <p className="hero__title">{title}</p>
                <div className="hero__actions">
                    <a href={github} target="_blank" rel="noopener noreferrer" className="btn btn--outline">
                        <FiGithub /> GitHub
                    </a>
                    <a href={`mailto:${email}`} className="btn btn--primary">
                        <FiMail /> Contact Me
                    </a>
                </div>
            </div>
            <a href="#about" className="hero__scroll" aria-label="Scroll down">
                <FiArrowDown size={20} />
            </a>
        </section>
    );
}
