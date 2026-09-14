import Navigation from "../components/Navigation";
import Introduction from "../components/Introduction"
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

function Home() {
  return (
    <div className="home">
        <aside className="sidebar">
            <Navigation />
        </aside>

        <main className="content">
            <Introduction />
            <Experience />
            <Projects />
            <Skills />
            <footer className="footer">
                © 2026 Divya Verma. All rights reserved.
            </footer>
        </main>
    </div>
  );
}

export default Home;