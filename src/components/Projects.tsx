function Projects() {
  return (
    <section id="projects">
      <h2>Featured Projects</h2>

        <div className="projects-grid">
            <article className="project-card">
                <h3>Data Visualization & Reports</h3>

                <p>
                    Data-driven reporting application with dynamic charts, KPI
                    analysis, filtering, and PDF/CSV report generation.
                </p>

                <a href="https://github.com/Sustainability-pro/brsr_tool" target="_blank">View Project →</a>

                <div className="project-tags">
                    <span>React</span>
                    <span>Chart.js</span>
                    <span>Node.js</span>
                    <span>SQL</span>
                    <span>Express</span>
                </div>
            </article>

            <article className="project-card">
                <h3>OpsVision — Operations Management Platform</h3>

                <p>
                    Full-stack operations dashboard for managing workflows, monitoring
                    KPIs, and automating reporting across teams in real time.
                </p>

                <div className="project-tags">
                    <span>React.js</span>
                    <span>Material UI</span>
                    <span>Node.js</span>
                    <span>Express</span>
                    <span>SQL</span>
                    <span>JWT</span>
                    <span>Chart.js</span>
                    <span>PDFKit</span>
                </div>
            </article>

            <article className="project-card">
                <h3>Basic 2048 Game</h3>

                <p>
                    Classic 2048 game built with vanilla JavaScript and CSS,
                    playable directly in the browser.
                </p>

                <a href="https://github.com/divyaV14/2048game" target="_blank">View Project →</a>

                <div className="project-tags">
                    <span>JavaScript</span>
                    <span>CSS</span>
                    <span>HTML</span>
                </div>
            </article>

            <article className="project-card">
                <h3>Email Archiving System</h3>
                <p>
                    This is a NestJS application that automatically archives emails from a G-Suite inbox into a PostgreSQL database, with attachments stored in Google Drive.
                </p>

                <a href="https://github.com/divyaV14/email-bid-system" target="_blank">View Project →</a>

                <div className="project-tags">
                    <span>Node.js </span>
                    <span>PostgreSQL </span>
                    <span>Google Cloud Platform</span>
                </div>
            </article>
      </div>
    </section>
  );
}

export default Projects;