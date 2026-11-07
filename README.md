# Apoorva Raman: Portfolio

Static, dependency-free portfolio (HTML, CSS, vanilla JS) for the AWS Student Builder Challenge "Build Your Tech Superpower". Sections: About, Skills, Projects, Research, Achievements, Leadership, Contact, plus an interactive terminal.

## Local preview
`python -m http.server 8000`, then open http://localhost:8000

## Structure
`index.html` · `styles.css` · `script.js` · `amplify.yml` · `ASSET-PLACEHOLDERS.md` · `assets/`

## Terminal
Click **Open terminal** or **Explore terminal**. Commands: help, about, skills, projects, research, achievements, leadership, contact, clear. Enter runs a command, the Up and Down arrows recall history, and the suggestion buttons are clickable. Esc or ✕ closes it. `help` hints that a hidden command exists. The secret command is found by exploring; it reveals `assets/memeverse-poster.jpg` in a modal. If the file is missing, a labelled placeholder appears and the reveal still works. The secret is intentionally not mentioned anywhere else on the page.

## AWS
**Services used:** AWS Amplify Hosting only (Git-based CI/CD from GitHub, global CDN, HTTPS).
Flow: `git push` → Amplify detects the commit → runs `amplify.yml` (no build, publishes repo root) → serves the static files.
Everything, including the terminal, runs client-side. There is no backend, database or API, and no analytics or data collection.
Not yet deployed: the AWS URL will be `[ADD AMPLIFY URL]` once connected.
The two project demos stay on their own Cloudflare Pages URLs, not AWS.

## Challenge write-up (draft)
- **Idea:** a recruiter-friendly portfolio showing Python, data and frontend work, with a memorable terminal. [ADD PERSONAL INTRO]
- **Creative feature:** a client-side command terminal with a hidden achievement reveal.
- **Implementation:** vanilla JS, native `<dialog>` for accessible modals, CSS-only visuals, graceful image fallbacks, reduced-motion support, Amplify Hosting.
- **Learned:** [ADD REFLECTION]
- **Challenges and fixes:** [ADD CHALLENGES]

## Screenshot checklist
Live portfolio · mobile view · terminal in use · secret poster reveal · Amplify deployment page · GitHub-Amplify connection.
