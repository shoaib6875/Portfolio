// src/components/Home.jsx
import './Home.css';

function Home({ theme }) {
  return (
    <section className={`home ${theme}`}>
      <h1>Welcome to Shoaib Akhtar's Portfolio</h1>
      <p>Hi, I'm Shoaib Akhtar, a passionate [your profession, e.g., Web Developer]. Explore my work and skills!</p>
      <a href="/projects" className="cta-button">View My Projects</a>
    </section>
  );
}

export default Home;