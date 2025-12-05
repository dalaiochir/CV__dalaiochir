export default function Projects() {
  return (
    <section className="projects-section mobile-fade-slide" style={{ padding: '40px' }}>
      <h1>Projects</h1>
      <div className="project-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', marginTop: '20px' }}>
        <article className="project-card">
          <h3>Portfolio Website</h3>
          <p>Personal portfolio built with Next.js and modern CSS (this site).</p>
          <div className="proj-actions">
            <a className="btn ghost" href="#">View</a>
          </div>
        </article>

        <article className="project-card">
          <h3>Task Manager</h3>
          <p>Todo app with client & server components.</p>
        </article>

        <article className="project-card">
          <h3>Game Dashboard</h3>
          <p>API dashboard that visualizes game stats.</p>
        </article>
      </div>
    </section>
  );
}
