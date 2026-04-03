export default function Skills({ skills }) {
    const categories = [
        { label: 'Languages', items: skills.languages },
        { label: 'Frameworks', items: skills.frameworks },
        { label: 'Tools & Platforms', items: skills.tools },
    ];

    return (
        <section id="skills" className="section section--alt">
            <div className="container">
                <h2 className="section__title">Skills</h2>
                <div className="skills__grid">
                    {categories.map((cat) => (
                        <div className="skills__category" key={cat.label}>
                            <h3 className="skills__label">{cat.label}</h3>
                            <div className="skills__tags">
                                {cat.items.map((item) => (
                                    <span className="tag" key={item}>{item}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
