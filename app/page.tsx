"use client";

import React from 'react'
import Hero from './components/Hero'
import { FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { HiAcademicCap, HiBriefcase, HiCode, HiLightBulb, HiOutlineMail } from 'react-icons/hi'

const skills = [
  'Statistics', 'Python', 'SQL', 'PL-SQL', 'Scikit-learn', 'TensorFlow', 'PyTorch',
  'MS Excel', 'Tableau', 'Jira', 'Java'
]

export default function Home() {
  return (
    <main>
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-white/70 backdrop-blur-md border-b border-secondary-100 shadow-sm">
        <div className="container-custom flex justify-between items-center py-4">
          <span className="text-2xl font-extrabold gradient-text tracking-tight">Jayesh</span>
          <div className="hidden md:flex gap-6">
            <a href="#about" className="nav-link">About</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#experience" className="nav-link">Experience</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#education" className="nav-link">Education</a>
            <a href="#leadership" className="nav-link">Leadership</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
        </div>
      </nav>

      <Hero />

      {/* About Section */}
      <section id="about" className="section">
        <div className="container-custom">
          <h2 className="heading-2 gradient-text">About Me</h2>
          <p className="text-lg text-secondary-700 mb-8">
            I specialize in bridging the gap between business strategy and technical execution. 
            My expertise spans advanced analytics, machine learning, NLP, and data visualization. 
            I thrive on solving complex business problems and optimizing processes for efficiency and impact.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section bg-gradient-to-r from-primary-50 via-white to-secondary-100">
        <div className="container-custom">
          <h2 className="heading-2">Technical Skills</h2>
          <div className="flex flex-wrap gap-3 mt-6">
            {skills.map(skill => (
              <span key={skill} className="pill">{skill}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section">
        <div className="container-custom">
          <h2 className="heading-2 gradient-text">Professional Experience</h2>
          <div className="grid md:grid-cols-2 gap-8 mt-10">
            {/* Capgemini */}
            <div className="glass-card">
              <div className="flex items-center gap-3 mb-2">
                <HiBriefcase className="w-7 h-7 text-primary-600" />
                <span className="font-bold text-lg">Capgemini Technology Services India Limited</span>
              </div>
              <div className="text-secondary-600 mb-2">Mumbai, India</div>
              <div className="mb-4">
                <span className="font-semibold">Associate Consultant</span> 
                <span className="text-secondary-500">(Apr 2022 - Aug 2023)</span>
                <ul className="list-disc list-inside text-secondary-700 mt-2 space-y-1">
                  <li>Streamlined backend policy drafting for multi-line insurance, contributing $10M in annual revenue</li>
                  <li>Led daily standups for a 37-member team, improving delivery efficiency by 15%</li>
                  <li>Reduced delivery delays by 10% via strategic milestone sequencing</li>
                  <li>Converted $100,000+ business requirements into technical solutions</li>
                </ul>
              </div>
              <div>
                <span className="font-semibold">Senior Software Engineer</span> 
                <span className="text-secondary-500">(Sep 2020 - Mar 2022)</span>
                <ul className="list-disc list-inside text-secondary-700 mt-2 space-y-1">
                  <li>Led a 9-member team, delivering a $300,000 client module 40% ahead of schedule</li>
                  <li>Implemented quality checks, reducing rework by 60% and saving $20,000</li>
                  <li>Coordinated cross-functional efforts for seamless project execution</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section bg-gradient-to-r from-secondary-50 via-white to-primary-100">
        <div className="container-custom">
          <h2 className="heading-2">Academic Projects</h2>
          <div className="grid md:grid-cols-2 gap-8 mt-10">
            {/* Prediction Guard */}
            <div className="glass-card">
              <div className="flex items-center gap-3 mb-2">
                <HiCode className="w-7 h-7 text-primary-600" />
                <span className="font-bold text-lg">Prediction Guard</span>
              </div>
              <div className="text-secondary-600 mb-2">AI Consultant | West Lafayette, IN | Jan 2024 - Apr 2024</div>
              <ul className="list-disc list-inside text-secondary-700 mt-2 space-y-1">
                <li>Designed AI risk benchmarking for open-source LLMs (LLaMA-3, Hermes)</li>
                <li>Engineered novel evaluation metrics and built an enterprise-grade leaderboard</li>
              </ul>
            </div>

            {/* CorpusKey */}
            <div className="glass-card">
              <div className="flex items-center gap-3 mb-2">
                <HiLightBulb className="w-7 h-7 text-primary-600" />
                <span className="font-bold text-lg">CorpusKey Inc.</span>
              </div>
              <div className="text-secondary-600 mb-2">Consultant | West Lafayette, IN | Aug 2024 - Dec 2024</div>
              <ul className="list-disc list-inside text-secondary-700 mt-2 space-y-1">
                <li>Applied dimensionality reduction and clustering on text embeddings</li>
                <li>Built automated semantic labeling pipelines using SentenceTransformer and GPT-3.5</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section">
        <div className="container-custom">
          <h2 className="heading-2 gradient-text">Education</h2>
          <div className="grid md:grid-cols-2 gap-8 mt-10">
            {/* Purdue */}
            <div className="glass-card">
              <div className="flex items-center gap-3 mb-2">
                <HiAcademicCap className="w-7 h-7 text-primary-600" />
                <span className="font-bold text-lg">Purdue University, Daniels School of Business</span>
              </div>
              <div className="text-secondary-600 mb-2">MS in Business Analytics and Information Management</div>
              <div className="text-secondary-500 mb-2">West Lafayette, IN | Expected Aug 2025</div>
              <div className="mt-2">
                <span className="font-semibold">Relevant Coursework:</span>
                <ul className="list-disc list-inside text-secondary-700 mt-1">
                  <li>Data Mining</li>
                  <li>Business Analytics</li>
                  <li>Data and AI Driven Marketing</li>
                  <li>AI for Business Decision Making</li>
                </ul>
              </div>
            </div>

            {/* NIT Warangal */}
            <div className="glass-card">
              <div className="flex items-center gap-3 mb-2">
                <HiAcademicCap className="w-7 h-7 text-primary-600" />
                <span className="font-bold text-lg">National Institute of Technology, Warangal</span>
              </div>
              <div className="text-secondary-600 mb-2">BTech in Metallurgical and Materials Engineering</div>
              <div className="text-secondary-500 mb-2">Warangal, India | Aug 2020</div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="section bg-gradient-to-r from-primary-50 via-white to-secondary-100">
        <div className="container-custom">
          <h2 className="heading-2">Leadership, Certifications & Honors</h2>
          <ul className="list-disc list-inside text-secondary-700 mt-6 space-y-2">
            <li>Certifications: MS Azure AI-900, AZ-900; Management Consulting</li>
            <li>Received highest employee rating and "Going above and beyond" award at Capgemini (Apr 2023)</li>
            <li>Represented project team at Capgemini as a success story and hosted a Business Unit event</li>
            <li>Additional Secretary of Painting Club, NIT Warangal; conducted various campus events</li>
          </ul>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container-custom">
          <h2 className="heading-2 gradient-text">Get in Touch</h2>
          <p className="text-lg text-secondary-700 mb-8">
            Interested in collaborating or have a question? Feel free to reach out!
          </p>
          <form className="glass-card max-w-xl mx-auto flex flex-col gap-6">
            <div>
              <label htmlFor="name" className="block text-secondary-700 font-semibold mb-2">Name</label>
              <input 
                id="name" 
                name="name" 
                type="text" 
                required 
                className="w-full px-4 py-3 rounded-xl border border-secondary-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-primary-200" 
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-secondary-700 font-semibold mb-2">Email</label>
              <input 
                id="email" 
                name="email" 
                type="email" 
                required 
                className="w-full px-4 py-3 rounded-xl border border-secondary-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-primary-200" 
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-secondary-700 font-semibold mb-2">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows={4} 
                required 
                className="w-full px-4 py-3 rounded-xl border border-secondary-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-primary-200" 
              />
            </div>
            <button 
              type="submit" 
              className="btn-primary flex items-center gap-2 justify-center"
            >
              <HiOutlineMail className="w-5 h-5" /> Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary-900 text-white py-8 mt-10">
        <div className="container-custom flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-xl font-bold">Jayesh Chaudhari</span>
            <span className="block text-secondary-300">Business Analytics & Software Engineering Professional</span>
          </div>
          <div className="flex gap-6">
            <a 
              href={process.env.NEXT_PUBLIC_LINKEDIN_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-secondary-300 hover:text-white transition-colors"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a 
              href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`} 
              className="text-secondary-300 hover:text-white transition-colors"
            >
              <FaEnvelope className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
} 