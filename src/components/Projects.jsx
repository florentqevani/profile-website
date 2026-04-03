import { useState, useEffect } from 'react';
import { FiGithub, FiExternalLink, FiStar, FiCode } from 'react-icons/fi';

// To add a project image, place it in src/assets/projects/ and add the repo name here.
// The key must match the repo name exactly from GitHub.
const projectImages = import.meta.glob('../assets/projects/*.{png,jpg,jpeg,webp}', { eager: true });

function getProjectImage(repoName) {
    for (const path in projectImages) {
        const filename = path.split('/').pop().split('.')[0].toLowerCase();
        if (filename === repoName.toLowerCase()) {
            return projectImages[path].default;
        }
    }
    return null;
}

export default function Projects() {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/github/repos')
            .then((res) => res.json())
            .then((data) => {
                setRepos(data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    return (
        <section id="projects" className="section">
            <div className="container">
                <h2 className="section__title">Projects</h2>
                {loading ? (
                    <p style={{ textAlign: 'center', color: 'var(--text-muted)' }}>Loading repositories...</p>
                ) : repos.length === 0 ? (
                    <p style={{ textAlign: 'center', color: 'var(--text-muted)' }}>No repositories found.</p>
                ) : (
                    <div className="projects__grid">
                        {repos.map((repo) => {
                            const image = getProjectImage(repo.name);
                            return (
                                <div className="project-card" key={repo.name}>
                                    <div className="project-card__image">
                                        {image ? (
                                            <img src={image} alt={repo.name} />
                                        ) : (
                                            <div className="project-card__placeholder">
                                                <FiCode size={32} />
                                            </div>
                                        )}
                                    </div>
                                    <div className="project-card__body">
                                        <div className="project-card__header">
                                            <h3 className="project-card__name">{repo.name}</h3>
                                            {repo.stars > 0 && (
                                                <span className="project-card__stars">
                                                    <FiStar /> {repo.stars}
                                                </span>
                                            )}
                                        </div>
                                        <p className="project-card__desc">{repo.description}</p>
                                        {repo.language && (
                                            <div className="project-card__tech">
                                                <span className="tag tag--sm">{repo.language}</span>
                                            </div>
                                        )}
                                        <div className="project-card__links">
                                            <a
                                                href={repo.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="project-card__link"
                                            >
                                                <FiGithub /> Source
                                            </a>
                                            {repo.homepage && (
                                                <a
                                                    href={repo.homepage}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="project-card__link"
                                                >
                                                    <FiExternalLink /> Live
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </section>
    );
}
