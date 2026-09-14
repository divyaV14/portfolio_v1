function Navigation() {
  return (
    <div className="navigation">
        <div>
            <h1>Divya Verma</h1>
            <p>Software Engineer</p>
            <p>Building software and learning how systems work end-to-end.</p>
            <a href="https://drive.google.com/file/d/1sUVZ8gO9YoZe3oiTJWb28QWAzGoKihay/view?usp=sharing" className="resume-button">
                View Resume ↗
            </a>
        </div>

        <nav>
            <a href="#introduction">INTRODUCTION</a>
            <a href="#experience">EXPERIENCE</a>
            <a href="#projects">PROJECTS</a>
            <a href="#skills">SKILLS</a>
        </nav>

        <div className="social-links">
            <a href="https://github.com/divyaV14">GitHub</a>
            <a href="https://www.linkedin.com/in/divya-verma-swe/">LinkedIn</a>
        </div>
    </div>
  );
}

export default Navigation;