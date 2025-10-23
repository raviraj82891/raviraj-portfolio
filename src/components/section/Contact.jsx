import { useState } from 'react';
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from 'emailjs-com';  


export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

const SERVICE_ID = "service_zb40vlj";
const TEMPLATE_ID = "template_vbmn778";
const PUBLIC_KEY = "J0FNJ92QIkRVXK3BV";

    
const handleSubmit = (e) => {
  e.preventDefault();
  const form = e.target;

  emailjs.sendForm(
    SERVICE_ID,
    TEMPLATE_ID,
    form,
    PUBLIC_KEY
  )
  .then((result) => {
    console.log('Success:', result.text);
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  })
  .catch((error) => {
    console.error('EmailJS Error:', error.text);
    alert("An error occurred: " + error.text);
  });
};

    
    return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-lg w-full px-4">
          {/* Heading */}
          <h2 className="text-7xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Get In Touch
          </h2>

          {/* Contact Form */}
          <form className="space-y-6 glass rounded-xl p-8 border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_12px_rgba(59,130,246,0.3)] transition-all duration-500"
          onSubmit={handleSubmit}>
            
            {/* Name */}
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/30 hover:border-blue-400/30 transition-all duration-300"
                placeholder="Your Name"
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>

            {/* Email */}
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/30 hover:border-blue-400/30 transition-all duration-300"
                placeholder="Your Email"
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>

            {/* Message */}
            <div className="relative">
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                value={formData.message}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/30 hover:border-blue-400/30 transition-all duration-300 resize-none"
                placeholder="Your Message"
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold hover:opacity-90 hover:shadow-[0_4px_15px_rgba(59,130,246,0.3)] transition-all duration-300 hover:-translate-y-1"
            >
              Send Message 🚀
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};