
import React, { useState } from 'react';
function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: '', email: '', message: '' });
  };
  return (
    <div className="hero">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required /><br/>
        <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required /><br/>
        <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required /><br/>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}
export default Contact;
