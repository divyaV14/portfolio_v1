function Experience() {
  return (
    <section id="experience">
        <h2>Experience</h2>

        <div className="experience-timeline">
            {/* Exafluence */}
            <article className="experience-item current">
                <div className="experience-date">
                    JUL 2025 — PRESENT
                </div>

                <div className="experience-content">
                    <h3>Software Engineer · Exafluence <a href="https://exafluence.com/">↗</a></h3>

                    <p>
                        Building backend and full-stack systems with a focus on LLM
                        integrations, data-source workflows, authentication, and
                        scalable APIs. Improved customer workflows, expanded
                        data-source integrations, and worked with Keycloak, Docker,
                        and CI/CD.
                    </p>

                    <div className="experience-tags">
                        <span>Python</span>
                        <span>FastAPI</span>
                        <span>React</span>
                        <span>Keycloak</span>
                        <span>PostgreSQL</span>
                        <span>Docker</span>
                        <span>LLMs</span>
                    </div>
                </div>
            </article>

            {/* L&T - Live Tracking */}
            <article className="experience-item">
                <div className="experience-date">
                    APR 2023 — OCT 2024
                </div>

                <div className="experience-content">
                    <h3>Software Engineer · L&T Technology Services <a href="https://www.ltts.com/">↗</a></h3>
                    <h4>Web-based Live Tracking Application</h4>

                    <p>
                        Developed a healthcare-focused real-time tracking platform for
                        medical delivery vehicles using IoT data, React, FastAPI,
                        WebSockets, and Google Maps. Built configurable alerts,
                        analytics dashboards, and dynamic IoT settings, with
                        Docker-based deployment on GCP.
                    </p>

                    <div className="experience-tags">
                        <span>React</span>
                        <span>FastAPI</span>
                        <span>MongoDB</span>
                        <span>WebSockets</span>
                        <span>Google Maps</span>
                        <span>Docker</span>
                        <span>GCP</span>
                        <span>Jest</span>
                        <span>Pytest</span>
                    </div>
                </div>
            </article>

            {/* L&T - BRSR */}
            <article className="experience-item">
                <div className="experience-date">
                    OCT 2022 — APR 2023
                </div>

                <div className="experience-content">
                    <h3>Graduate Engineer Trainee · Larson & Toubro <a href="https://www.larsentoubro.com/">↗</a></h3>
                    <h4>Sustainability (BRSR) Web Application</h4>

                    <p>
                    Developed an ESG reporting platform aligned with BRSR standards,
                    consolidating 50+ environmental indicators across business
                    units. Built dynamic forms, optimized reporting APIs, RBAC,
                    and interactive analytics, reducing submission errors by 65%
                    and report generation time from days to minutes.
                    </p>

                    <div className="experience-tags">
                        <span>React</span>
                        <span>Node.js</span>
                        <span>PostgreSQL</span>
                        <span>React Hook Form</span>
                        <span>Chart.js</span>
                        <span>JWT</span>
                        <span>RBAC</span>
                    </div>
                </div>
            </article>
        </div>
    </section>
  );
}

export default Experience;