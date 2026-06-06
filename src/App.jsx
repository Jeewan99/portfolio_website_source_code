import { useState } from 'react'
import image from './assets/profile.jpeg'
import bluetick from './assets/downloadt.png'
import { MdLocationOn } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
import { Briefcase } from 'lucide-react';
import { Hammer } from 'lucide-react';
import { GraduationCap } from 'lucide-react';
import { Award, Copy, BadgeCheck, MapPin } from 'lucide-react';
import { Layers, ExternalLink, ChevronRight } from 'lucide-react';
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
import { Share2 } from 'lucide-react';
import './App.css'

function App() {
 const experiences = [
  {
    title: " Full-Stack Developer",
    company: "working ...",
    year: "2025",
    current: true,
  },
  {
    title: "Junior Full-Stack Developer",
    company: "unknown International compny, Inc.",
    year: "2023",
    current: false,
  },
  {
    title: "React Developer Intern",
    company: "unknown , Inc.",
    year: "2022",
    current: false,
  },
];
const techData = [
  {
    category: "Programming Languages",
    skills: [
      { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/007ACC" },
      { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
      { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
    ]
  },
  {
    category: "Frontend Development",
    skills: [
      { name: "React.js", icon: "https://cdn.simpleicons.org/react/61DAFB" },
      { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/000000" },
      { name: "Nuxt.js", icon: "https://cdn.simpleicons.org/nuxtdotjs/00DC82" },
      { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
    ]
  },
  {
    category: "Backend Development",
    skills: [
      { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
      { name: "Express.js", icon: "https://cdn.simpleicons.org/express/000000" },
      { name: "Flask", icon: "https://cdn.simpleicons.org/flask/000000" },
    ]
  },
  {
    category: "DevOps & Cloud",
    skills: [
      { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED" },
      { name: "CI/CD", icon: "https://img.icons8.com/ios-filled/50/000000/settings.png" },
      { name: "DigitalOcean", icon: "https://cdn.simpleicons.org/digitalocean/0080FF" },
    ]
  }
];

const eduData = [
  {
    degree: "BSC. Computer Science And IT",
    school: "TRIBHUVAN UNIVERSITY",
    year: "2020",
  },
  {
    degree: "(Mobile App & Web Development)",
    school: "Udemy",
    year: "2018",
  },
];

const certs = [
  { title: "Prompting Essentials", issuer: "Coursera - Google", year: "2026" },
  { title: "Software Engineer", issuer: "HackerRank", year: "2024" },
  { title: "Frontend Developer (React)", issuer: "HackerRank", year: "2024" },
  { title: "Rest API (Intermediate)", issuer: "HackerRank", year: "2022" },
];
const projectData = [
  {
    title: "Web Portfolio v1",
    year: "2024",
    desc: "A responsive personal portfolio built with React.js to showcase professional and creative projects, with 50+ stars on GitHub.",
    links: [{ type: 'project', url: '#' }, { type: 'github', url: '#' }]
  },
  {
    title: "Sudoku Solver",
    year: "2023",
    desc: "An intelligent solver utilizing Simulated Annealing algorithm to generate and solve Sudoku puzzles.",
    links: [{ type: 'project', url: '#' }, { type: 'github', url: '#' }]
  },
  {
    title: "Clockify Report Generator",
    year: "2024",
    desc: "An automation tool that transforms raw Clockify time logs into structured sheet reports.",
    links: [{ type: 'github', url: '#' }]
  },
  {
    title: "Draw & Classify",
    year: "2023",
    desc: "A web application to test the letter, digit, and shape classification model.",
    links: [{ type: 'project', url: '#' }, { type: 'github', url: '#' }]
  }
];
const socials = [
  { name: 'LinkedIn', handle: '@jibantajpuriya', icon: <FaLinkedin size={20} />, url: 'https://www.linkedin.com/in/jiban-tajpuriya-82815a3a8 ' },
  { name: 'GitHub', handle: '@jibantajpuriyaa', icon: <FaGithub size={20} />, url: 'https://github.com/jibantajpuriyaa' },
  { name: 'Instagram', handle: '@zeeone', icon: <IoLogoInstagram size={20} />, url: 'https://www.instagram.com/zeeeone11/' },
  { name: 'Facebook', handle: '@jibantajpuriya', icon: <FaFacebook size={20} />, url: 'https://www.facebook.com/jibantajpuriya.com.np' },
];

  return (
    <> 
    <div className="mainui">
<div class="parent">
    <div class="div1"><div className="profile-container">
      {/* Profile Image */}
      <div className="profile-image-wrapper">
        <img 
          src={image} 
          alt="jiban tajpuriya" 
          className="profile-image"
        />
      </div>

      {/* Main Content Area */}
      <div className="profile-content">
        <div className="profile-top-row">
          <div className="profile-info">
            <h1 className="profile-name">
              Jiban Tajpuriya 
              <span className="verify-badge"><img className='bluetick' src={bluetick}/></span>
            </h1>
            <p className="profile-location">
              <span className="geo-icon"><MdLocationOn /></span> Jhapa, Nepal
            </p>
          </div>
          
        
        </div>

        <h2 className="profile-title">Full-Stack Software Engineer</h2>

        <div className="profile-actions">
          <div className="action-group">
            <button className="btn-email">
              <span className="icon">✉</span> Send Email
            </button>
            <button className="btn-copy"></button>
          </div>

          <a href="#linkedin" className="linkedin-link">
            <span className="icon-li">in</span> LinkedIn 
            <span className="arrow">›</span>
          </a>

          <div className="focus-areas-container">
            <button className="focus-main">
              <span className="nodes-icon">⚯</span> Focus Areas
            </button>
            <button className="focus-chevron">⌵</button>
          </div>
        </div>
      </div>
</div></div>

   <div className="main_body">
     <div className="rigntside">
  

    <div class="div2"><section className="about-card">
      <div className="about-header">
        <IoPersonSharp size={20} className="about-icon" strokeWidth={3} />
        <h2>About</h2>
      </div>
      
      <div className="about-content">
        <p>
          I am a Full-Stack Software Engineer dedicated to crafting high-performance 
          digital solutions. With a core focus on the TypeScript/JavaScript and 
          Python ecosystems, I bridge the gap between robust back-end logic and 
          intuitive, SEO-optimized front-end experiences.
        </p>

        <p>
          My approach centers on building applications that aren’t just functional, but 
          scalable and secure. Whether I’m architecting a modern web platform or 
          fine-tuning search visibility, I prioritize technical debt reduction and long-
          term maintainability.
        </p>

        <p>
          Beyond writing code, I am an avid problem-solver who thrives on the 
          challenge of learning evolving technologies. I believe in a quality-first 
          mindset, consistently applying industry best practices and clean code 
          principles to every project I touch.
        </p>
      </div>
    </section></div>


        <div class="div5"><div className="tech-card">
      <div className="tech-header">
        <div className="header-left">
          <Hammer size={20} />
          <h2>Tech Stack</h2>
        </div>
        <button className="view-all">
          View All <ChevronRight size={16} />
        </button>
      </div>

      <div className="tech-groups">
        {techData.map((group, idx) => (
          <div key={idx} className="tech-group">
            <h3>{group.category}</h3>
            <div className="tags-container">
              {group.skills.map((skill, sIdx) => (
                <div key={sIdx} className="tech-tag">
                  <img src={skill.icon} alt={skill.name} />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div></div>


    
    <div class="div8"><div className="projects-card">
      <div className="projects-header">
        <div className="header-left">
          <Layers size={22} strokeWidth={2.5} />
          <h2>Projects</h2>
        </div>
        <button className="view-all">View All <ChevronRight size={16} /></button>
      </div>

      <div className="projects-grid">
        {projectData.map((project, idx) => (
          <div key={idx} className="project-item">
            <h3>{project.title}</h3>
            <p className="project-desc">
              <span className="year">({project.year})</span> {project.desc}
            </p>
            <div className="project-links">
              {project.links.map((link, lIdx) => (
                <a key={lIdx} href={link.url} className="link-item">
                  {link.type === 'project' ? <ExternalLink size={14} /> : <FaGithub size={14} />}
                  <span>View {link.type === 'project' ? 'Project' : 'GitHub'}</span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div></div>


      
     </div>
     <div className="leftside">


    <div class="div4"><div className="exp-card">
      <div className="exp-header">
        <Briefcase size={22} strokeWidth={2.5} />
        <h2>Experience</h2>
      </div>

      <div className="timeline-container">
        {experiences.map((item, index) => (
          <div className="timeline-item" key={index}>
            {/* The Dot */}
            <div className={`timeline-dot ${item.current ? 'active' : ''}`}></div>
            
            <div className="timeline-content">
              <div className="text-group">
                <h3>{item.title}</h3>
                <p className="company">{item.company}</p>
              </div>
              <span className="year">{item.year}</span>
            </div>
          </div>
        ))}
      </div>
    </div></div>


    
    <div class="div6"><div className="edu-card">
      <div className="edu-header">
        <GraduationCap size={22} strokeWidth={2.5} />
        <h2>Education</h2>
      </div>

      <div className="timeline-container">
        {eduData.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="text-group">
                <h3>{item.degree}</h3>
                <p className="school">{item.school}</p>
              </div>
              <span className="year">{item.year}</span>
            </div>
          </div>
        ))}
      </div>
    </div></div>




    <div class="div7"><div className="cert-card">
      <div className="cert-header">
        <div className="header-left">
          <Award size={22} strokeWidth={2.5} />
          <h2>Certifications</h2>
        </div>
        <button className="view-all">View All <ChevronRight size={16} /></button>
      </div>

      <div className="cert-list">
        {certs.map((cert, idx) => (
          <div key={idx} className="cert-item">
            <Award size={18} className="cert-icon" />
            <div className="cert-info">
              <h3>{cert.title}</h3>
              <p>{cert.issuer} ({cert.year})</p>
            </div>
          </div>
        ))}
      </div>
    </div></div>






    <div class="div9"><div className="social-card">
      <div className="social-header">
        <Share2 size={22} strokeWidth={2.5} />
        <h2>Social Links</h2>
      </div>

      <div className="social-list">
        {socials.map((link, idx) => (
          <a key={idx} href={link.url} className="social-item">
            <div className="social-left">
              <span className="social-icon-wrapper">{link.icon}</span>
              <p>
                <strong>{link.name}</strong> <span className="handle">({link.handle})</span>
              </p>
            </div>
            <ChevronRight size={18} className="arrow-icon" />
          </a>
        ))}
      </div>
    </div></div>


     </div>

   </div>














</div> </div>  </>
  )
}

export default App
