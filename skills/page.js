'use client';
import { useEffect } from "react";
import '../../styles/skills.css';

export default function Skills() {
  useEffect(() => {
    const bars = document.querySelectorAll(".skill-progress");
    bars.forEach((bar) => {
      const v = bar.getAttribute('data-value') || '0%';
      bar.style.width = v;
    });
  }, []);

  return (
    <section className="skills-section mobile-fade-slide" style={{ padding: '40px' }}>
      <h1>Skills</h1>
      <div className="skill-wrapper">
        <div className="skill-name">JavaScript</div>
        <div className="skill-bar"><div className="skill-progress" data-value="90%"></div></div>
      </div>
      <div className="skill-wrapper">
        <div className="skill-name">Next.js</div>
        <div className="skill-bar"><div className="skill-progress" data-value="85%"></div></div>
      </div>
      <div className="skill-wrapper">
        <div className="skill-name">Node.js</div>
        <div className="skill-bar"><div className="skill-progress" data-value="80%"></div></div>
      </div>

      <div className="badges" style={{ marginTop: '20px' }}>
        <span className="badge">React</span>
        <span className="badge">Express</span>
        <span className="badge">MongoDB</span>
        <span className="badge">SQL</span>
      </div>
    </section>
  );
}
