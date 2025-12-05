'use client';
import { useState } from 'react';
import '../../styles/contact.css';

export default function Contact() {
  const [status, setStatus] = useState('');
  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    // For demo: open mailto with subject/body filled.
    const email = 'dalaiochir0410@gmail.com';
    const subject = encodeURIComponent('Website contact from ' + data.get('name'));
    const body = encodeURIComponent('Name: ' + data.get('name') + '\nEmail: ' + data.get('email') + '\n\n' + data.get('message'));
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    setStatus('Opening your mail app...');
  }

  return (
    <section className="contact-section mobile-fade-slide" style={{ padding: '40px' }}>
      <h1>Contact Me</h1>
      <p>Send me a message — I'll reply as soon as I can.</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Name
          <input name="name" required />
        </label>

        <label>
          Email
          <input name="email" type="email" required />
        </label>

        <label>
          Message
          <textarea name="message" rows="6" required></textarea>
        </label>

        <div className="form-actions">
          <button type="submit" className="btn primary">Send Message</button>
        </div>

        <div className="form-status">{status}</div>
      </form>
    </section>
  );
}
