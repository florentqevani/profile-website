const cvData = {
    name: "Florent Qevani",
    title: "IT Specialist & Software Developer",
    location: "Rruga Pjeter Budi, Tirane 1001, Albania",
    phone: "+355 694901050",
    email: "florentqevani41@gmail.com",
    github: "https://github.com/florentqevani",

    profile:
        "Master's candidate in Information Systems and IT Specialist with experience in L1–L2 support, Windows administration, and web development (PHP, JavaScript, HTML/CSS). Diagnosed hardware/software issues, administered MySQL/PostgreSQL databases, and improved system reliability in academic and enterprise environments. Applied security best practices in vulnerability assessment and endpoint protection (Metasploit, Cisco). Clear communicator and fast learner who collaborates across teams to deliver efficient, user-focused solutions.",

    experience: [
        {
            role: "IT Specialist",
            company: "Eurosig sha",
            period: "Aug 2025 — Present",
            points: [
                "Installed, configured, and maintained hardware, operating systems, and enterprise software across the organization.",
                "Provided Level 1–2 IT support, diagnosing and resolving system, network, and application issues.",
                "Administered user accounts, access permissions, and system configurations in a Windows environment.",
                "Monitored system performance, performed routine maintenance, and documented technical procedures.",
                "Collaborated with cross-functional teams to improve IT infrastructure reliability and operational efficiency.",
            ],
        },
        {
            role: "Customer Service / Management",
            company: "Mado Tirana",
            period: "Mar 2023 — Aug 2025",
            points: [
                "Managed a small team to ensure the best customer experience.",
                "Resolved problems effectively with great communication skills and hospitality.",
            ],
        },
        {
            role: "Junior Web Developer",
            company: "Codveda Technologies",
            period: "Jan 2022 — Mar 2023",
            points: [
                "Assisted and maintained full web applications using HTML, CSS, JavaScript.",
                "Collaborated with team members to complete tasks.",
                "Used frameworks like React for frontend and Node JS for backend.",
                "Used REST APIs.",
            ],
        },
    ],

    education: [
        {
            degree: "Master's in Information Systems",
            school: "University of Tirana",
            period: "Oct 2024 — Jul 2026",
            details: [
                "Focus areas in web development, databases, and cybersecurity.",
                "Key coursework: Database Systems (MySQL/PostgreSQL), Computer Networks, Web Technologies (PHP, JavaScript, HTML/CSS), Information Security.",
                "Projects: Built and maintained full-stack web applications; set up a penetration testing lab using Metasploit; optimized SQL queries for performance and reliability.",
            ],
        },
        {
            degree: "Bachelor's in Business Administration",
            school: "University of Tirana",
            period: "Oct 2019 — Jul 2023",
            details: [
                "Studied business fundamentals with a focus on IT management and digital transformation.",
                "Key coursework: Principles of Management, Marketing, Financial Accounting, Information Systems for Business, E-commerce.",
                "Projects: Developed a business plan for a tech startup; analyzed the impact of digital transformation on traditional businesses.",
            ],
        },
    ],

    certifications: [
        { name: "Full Website Development", issuer: "Udemy", period: "Aug 2025 — Jan 2026" },
        { name: "PHP for Beginners", issuer: "Udemy", period: "Jan 2025 — Feb 2025" },
        { name: "End Point Security", issuer: "Cisco", period: "Nov 2024 — Dec 2024" },
        { name: "Ethical Hacking Methods", issuer: "Udemy", period: "Aug 2024 — Sept 2024" },
        { name: "Certified Ethical Hacking", issuer: "NYU School of Public Health", period: "Aug 2023 — Sept 2023" },
    ],

    skills: {
        languages: ["HTML", "CSS", "JavaScript", "PHP", "Dart"],
        frameworks: ["React", "EJS", "Node.js", "Laravel", "Flutter"],
        tools: ["MySQL", "PostgreSQL", "Git/GitHub", "Metasploit", "Cisco", "Windows Administration"],
    },

    languages: [
        { language: "Albanian", speaking: "Native", understanding: "Native" },
        { language: "English", speaking: "Fluent", understanding: "Fluent" },
        { language: "Italian", speaking: "A2", understanding: "B1" },
    ],

    projects: [
        {
            name: "Huda Beauty E-Commerce",
            description: "Full-stack beauty e-commerce application with product browsing, cart management, user authentication, and admin dashboard.",
            tech: ["React", "Node.js", "Express", "PostgreSQL"],
            github: "https://github.com/florentqevani",
        },
        {
            name: "Penetration Testing Lab",
            description: "Set up and configured a penetration testing environment using Metasploit for vulnerability assessment and security analysis.",
            tech: ["Metasploit", "Kali Linux", "Network Security"],
        },
        {
            name: "Database Optimization Project",
            description: "Optimized SQL queries for performance and reliability across MySQL and PostgreSQL databases in academic projects.",
            tech: ["MySQL", "PostgreSQL", "SQL Optimization"],
        },
    ],
};

export default cvData;
