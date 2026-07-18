const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const htmlPath = path.join(root, "index.html");

const html = fs.readFileSync(htmlPath, "utf8");

const requiredSnippets = [
  'Data Analyst | Python, Dashboards & AI-Powered Decision Support',
  'section class="section" id="projects"',
  'section class="section section--soft" id="journey"',
  'Mobile Money Fraud Risk Analysis',
  'Dashboard & Recommendation System',
  'section class="section" id="awards"',
  'href="https://magnificent-genie-be22ca.netlify.app/"',
  'href="https://cinematch-ai-hackathon.streamlit.app/"',
  'href="assets/docs/Coulibaly_Vital_Data_Analyst_en.pdf"',
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

console.log("Build validation passed: portfolio structure and key links are present.");
