export default function Experience() {
  return (
    <section className="experience-section mobile-fade-slide" style={{ padding: '40px' }}>
      <h1>Experience</h1>
      <div className="timeline">
        <div className="timeline-item" style={{ animationDelay: '0.1s' }}>
          <div className="timeline-date">2023 — Present</div>
          <div className="timeline-text">Frontend Developer — Next.js, React</div>
        </div>

        <div className="timeline-item" style={{ animationDelay: '0.25s' }}>
          <div className="timeline-date">2021 — 2023</div>
          <div className="timeline-text">Web Developer — Node.js, Express</div>
        </div>

        <div className="timeline-item" style={{ animationDelay: '0.4s' }}>
          <div className="timeline-date">2019 — 2021</div>
          <div className="timeline-text">Junior Developer / Intern</div>
        </div>
      </div>
    </section>
  );
}
