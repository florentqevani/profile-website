export default function About({ profile }) {
    return (
        <section id="about" className="section">
            <div className="container">
                <h2 className="section__title">About Me</h2>
                <p className="about__text">{profile}</p>
            </div>
        </section>
    );
}
