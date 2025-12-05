import Link from "next/link";
export default function Home() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-text">
          <h1 className="hero-title">Бямбасүрэн ДалайОчир</h1>
          <p className="hero-role">Full‑Stack Developer · CS Student</p>
          <p className="hero-desc">
            I build fast, accessible, and beautiful web apps. I enjoy learning new technologies,
            contributing to open-source, and solving real problems with clean code.
          </p>

          <div className="hero-actions">
            <Link href="/projects"><a className="btn primary">View Projects</a></Link>
            <Link href="/contact"><a className="btn ghost">Contact Me</a></Link>
          </div>

          <div className="hero-badges">
            <span className="badge">React</span>
            <span className="badge">Next.js</span>
            <span className="badge">Node.js</span>
          </div>
        </div>

        <div className="hero-media mobile-fade-slide">
          <div className="profile-wrap">
            <img src="/profile.png" alt="Profile" className="profile-img" />
            <div className="profile-card">
              <h3>Б. ДалайОчир</h3>
              <p>Full‑Stack Developer</p>
              <div className="socials">
                <a href="#" aria-label="github">GitHub</a>
                <a href="#" aria-label="linkedin">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-decor"></div>
    </section>
  );
}
