function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>
        <div className="skills-grid">
            <div className="skill-group">
                <h3>Frontend</h3>

                <div className="skill-list">
                    <span>React</span>
                    <span>TypeScript</span>
                    <span>JavaScript</span>
                    <span>HTML / CSS</span>
                    <span>Material UI</span>
                    <span>Chart.js</span>
                </div>
            </div>

            <div className="skill-group">
                <h3>Backend</h3>

                <div className="skill-list">
                    <span>Python</span>
                    <span>FastAPI</span>
                    <span>Django</span>
                    <span>Flask</span>
                    <span>Node.js</span>
                    <span>Express</span>
                    <span>REST APIs</span>
                    <span>WebSockets</span>
                </div>
            </div>

            <div className="skill-group">
                <h3>Data & Infrastructure</h3>

                <div className="skill-list">
                    <span>PostgreSQL</span>
                    <span>MongoDB</span>
                    <span>Docker</span>
                    <span>AWS</span>
                    <span>GCP</span>
                    <span>CI / CD</span>
                </div>
            </div>

            <div className="skill-group">
                <h3>Engineering</h3>

                <div className="skill-list">
                    <span>Git</span>
                    <span>Keycloak</span>
                    <span>RBAC</span>
                    <span>Jest</span>
                    <span>Pytest</span>
                    <span>React Testing Library</span>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Skills;