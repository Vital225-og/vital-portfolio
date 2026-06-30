const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const htmlPath = path.join(root, "index.html");

const html = fs.readFileSync(htmlPath, "utf8");

const requiredSnippets = [
  'section class="section section--timeline" id="journey"',
  "Data Analyst & Reporting",
  "Responsable jeunesse",
  "Développeur Web freelance",
  "Ambassadeur stagiaire",
  'href="https://github.com/Vital225-og/cinematch-ai-hackathon"',
  'href="https://github.com/Vital225-og/DI-Bootcamp"',
  'target="_blank"',
  'rel="noopener noreferrer"',
];

const missing = requiredSnippets.filter((snippet) => !html.includes(snippet));

if (missing.length > 0) {
  console.error("Build validation failed.");
  console.error("Missing snippets:");
  missing.forEach((snippet) => console.error(`- ${snippet}`));
  process.exit(1);
}

console.log("Build validation passed: experience section and GitHub links are present.");
