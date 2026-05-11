import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Contact() {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    emailjs
      .sendForm(
        'service_4i3u6zd',
        'template_dsfrseo',
        form.current,
        'W_g8xgkNLhgZITS77'
      )
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);

          setSubmitStatus('success');
          setIsSubmitting(false);
          form.current.reset();

          // Hide success message after 5 seconds
          setTimeout(() => setSubmitStatus(null), 5000);
        },
        (error) => {
          console.error('EmailJS Error:', error.text);

          setSubmitStatus('error');
          setIsSubmitting(false);

          // Hide error message after 5 seconds
          setTimeout(() => setSubmitStatus(null), 5000);
        }
      );
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Contact Info */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm tracking-widest text-[#F5A623] uppercase mb-4 font-semibold">
              Get In Touch
            </h2>

            <h3 className="text-4xl md:text-5xl font-heading font-bold text-glow mb-6 leading-tight">
              Let’s Build Something Extraordinary Together.
            </h3>

            <p className="text-gray-400 text-lg mb-10">
              I'm currently available for full-time roles and freelance
              projects. Whether you have a question or just want to say hi,
              I'll try my best to get back to you!
            </p>

            <div className="space-y-6 mb-10">
              <a
                href="mailto:parlakotigowrav@gmail.com"
                className="flex items-center gap-4 text-gray-300 hover:text-[#F5A623] transition-colors group"
              >
                <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center group-hover:bg-[#F5A623]/20 transition-colors">
                  <FaEnvelope size={20} />
                </div>
                <span className="text-lg">parlakotigowrav@gmail.com</span>
              </a>

              <a
                href="tel:+918618002667"
                className="flex items-center gap-4 text-gray-300 hover:text-[#F5A623] transition-colors group"
              >
                <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center group-hover:bg-[#F5A623]/20 transition-colors">
                  <FaPhoneAlt size={20} />
                </div>
                <span className="text-lg">+91 8618002667</span>
              </a>
            </div>

            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/gowrav-ganapathy/"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-white hover:text-[#F5A623] hover:bg-[#F5A623]/10 transition-all"
              >
                <FaLinkedin size={20} />
              </a>

              <a
                href="https://github.com/PMGowravGanapathy?tab=repositories"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-white hover:text-[#F5A623] hover:bg-[#F5A623]/10 transition-all"
              >
                <FaGithub size={20} />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass-card p-8 md:p-10">
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-400 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    id="name"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#F5A623] focus:bg-white/10 transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-400 mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    id="email"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#F5A623] focus:bg-white/10 transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-400 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#F5A623] focus:bg-white/10 transition-all"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-400 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows="4"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#F5A623] focus:bg-white/10 transition-all resize-none"
                    placeholder="Hello Gowrav, I would like to..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#F5A623] text-black font-bold rounded-xl hover:shadow-[0_0_20px_#F5A623] transition-all disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2"
                >
                  {isSubmitting ? (
                    <span className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
                  ) : (
                    'Send Message'
                  )}
                </button>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-green-400 text-center text-sm font-medium"
                  >
                    Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-center text-sm font-medium"
                  >
                    Failed to send message. Please try again.
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-24 border-t border-white/10 py-8 text-center text-gray-500 text-sm">
        <p>
          &copy; {new Date().getFullYear()} P M Gowrav Ganapathy. Designed and
          built with ❤️.
        </p>
      </footer>
    </section>
  );
}