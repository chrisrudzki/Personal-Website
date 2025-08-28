// ContactForm.jsx
import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({ email: '', message: '' });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    if (res.ok) alert('Message sent!');
    else alert('Failed to send.');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        placeholder="Your email"
        onChange={handleChange}
        required
      />
      <textarea
        name="message"
        placeholder="Your message"
        onChange={handleChange}
        required
      />
      <button type="submit">Send</button>
    </form>
  );
}
