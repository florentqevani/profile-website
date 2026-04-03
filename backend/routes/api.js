import express from "express";
import cvData from "../data/cv.js";

const router = express.Router();

let reposCache = null;
let reposCacheTime = 0;
const CACHE_TTL = 5 * 60 * 1000;

router.get("/cv", (req, res) => {
    res.json(cvData);
});

router.get("/cv/experience", (req, res) => {
    res.json(cvData.experience);
});

router.get("/cv/education", (req, res) => {
    res.json(cvData.education);
});

router.get("/cv/skills", (req, res) => {
    res.json(cvData.skills);
});

router.get("/cv/certifications", (req, res) => {
    res.json(cvData.certifications);
});

router.get("/cv/projects", (req, res) => {
    res.json(cvData.projects);
});

router.get("/github/repos", async (req, res) => {
    try {
        if (reposCache && Date.now() - reposCacheTime < CACHE_TTL) {
            return res.json(reposCache);
        }

        const username = cvData.github.split("/").pop();
        const response = await fetch(
            `https://api.github.com/users/${encodeURIComponent(username)}/repos?sort=updated&per_page=100`,
            { headers: { "User-Agent": "cv-website" } }
        );

        if (!response.ok) {
            return res.status(response.status).json({ error: "GitHub API error" });
        }

        const repos = await response.json();
        const mapped = repos
            .filter((r) => !r.fork)
            .map((r) => ({
                name: r.name,
                description: r.description || "No description",
                language: r.language,
                stars: r.stargazers_count,
                url: r.html_url,
                homepage: r.homepage,
                updatedAt: r.updated_at,
            }));

        reposCache = mapped;
        reposCacheTime = Date.now();
        res.json(mapped);
    } catch (err) {
        console.error("GitHub fetch error:", err);
        res.status(500).json({ error: "Failed to fetch repos" });
    }
});

export default router;
