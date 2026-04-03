import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
            <div className="navbar__inner">

                <ul className={`navbar__links ${open ? 'navbar__links--open' : ''}`}>
                    {navLinks.map((l) => (
                        <li key={l.href}>
                            <a href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
                        </li>
                    ))}
                </ul>
                <button className="navbar__toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu">
                    {open ? <FiX size={22} /> : <FiMenu size={22} />}
                </button>
            </div>
        </nav>
    );
}
