import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    const [cv, setCv] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/cv')
            .then((res) => res.json())
            .then((data) => {
                setCv(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error('Failed to load CV data:', err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="loader">
                <div className="spinner" />
            </div>
        );
    }

    if (!cv) {
        return <div className="loader">Failed to load data.</div>;
    }

    return (
        <div className="app">
            <Navbar />
            <Hero name={cv.name} title={cv.title} github={cv.github} email={cv.email} />
            <About profile={cv.profile} />
            <Experience experience={cv.experience} />
            <Education education={cv.education} />
            <Skills skills={cv.skills} />
            <Projects />
            <Certifications certifications={cv.certifications} />
            <Contact
                email={cv.email}
                phone={cv.phone}
                location={cv.location}
                github={cv.github}
            />
            <Footer name={cv.name} />
        </div>
    );
}

export default App;
