# Apoorva Raman: Portfolio

Static, dependency-free personal portfolio built with HTML, CSS and vanilla JavaScript. Sections: About, Skills, Projects, Research, Achievements, Leadership and Contact, plus an interactive command terminal.

## Local preview
`python -m http.server 8000`, then open http://localhost:8000

## Structure
`index.html` · `styles.css` · `script.js` · `ASSET-PLACEHOLDERS.md` · `assets/`

## Interactive terminal
Click **Open terminal** or **Explore terminal**.

Commands: `help`, `about`, `skills`, `projects`, `research`, `achievements`, `leadership`, `contact`, `clear`.

- Enter runs a command. Up and Down arrows recall history. The suggestion buttons are clickable.
- Esc or the ✕ button closes the terminal.
- `help` hints that a hidden command exists. It is revealed by exploring, and shows an original poster from `assets/memeverse-poster.jpg` in a modal. If the file is missing, a labelled placeholder appears and the reveal still works.

Everything runs client-side. There is no backend, database or API, and no analytics or data collection.

## Hosting (Cloudflare Pages)
Deployed through Git-based deployment from GitHub:

1. Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git.
2. Select this repository.
3. Framework preset: **None**. Build command: leave empty. Build output directory: `/` (or leave blank).
4. Save and deploy. Every push to the production branch redeploys automatically.

No configuration file is needed. The two project demos (TRAFFIC/PATTERN.DASH and The Lost Memories of Maveli) are separate Cloudflare Pages deployments.

## Image checklist
See `ASSET-PLACEHOLDERS.md` for exact filenames, paths and the text still to be filled in.
