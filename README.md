# Apoorva Raman: Portfolio

Static, dependency-free personal portfolio built with HTML, CSS and vanilla JavaScript. Sections: About, Skills, Projects, Research, Achievements, Leadership and Contact, plus an interactive command terminal.

## Local preview
`python -m http.server 8000`, then open http://localhost:8000

## Structure
`index.html` · `styles.css` · `script.js` · `assets/`

## Interactive terminal
Click **Open terminal** or **Explore terminal**.

Commands: `help`, `about`, `skills`, `projects`, `research`, `achievements`, `leadership`, `contact`, `clear`.

- Enter runs a command. Up and Down arrows recall history. The suggestion buttons are clickable.
- Esc or the ✕ button closes the terminal.
- `help` hints that a hidden command exists. It is revealed by exploring.

Everything runs client-side. There is no backend, database or API, and no analytics or data collection.

## Hosting (Cloudflare Pages)
Deployed through Git-based deployment from GitHub on Cloudflare Pages.
The two project demos (TRAFFIC/PATTERN.DASH and The Lost Memories of Maveli) are separate Cloudflare Pages deployments.
