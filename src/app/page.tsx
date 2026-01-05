'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Code, Briefcase, Award, GraduationCap, Terminal, FileText, Download, X, ChevronDown, Menu, Zap, Database, Layout, Server } from 'lucide-react';
import { animate, stagger } from 'animejs';
import Image from "next/image";

interface Skill {
  [key: string]: string[];
}

interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  achievements: string[];
  technologies: string[];
}

interface Project {
  name: string;
  tech: string;
  icon: string;
  description: string;
  highlights: string[];
  impact: string;
}

interface Education {
  degree: string;
  university: string;
  location: string;
  expected: string;
}

const Portfolio: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const [showCV, setShowCV] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  const githubURL = "https://github.com/SHASHANKJHAA";
  const linkedinURL = "https://linkedin.com/in/shashank-jha-63877a2a9";

  useEffect(() => {
    animate('.hero-title span', {
      translateY: [-100, 0],
      opacity: [0, 1],
      delay: stagger(100),
      duration: 1500,
      easing: 'easeOutExpo'
    });

    animate('.hero-subtitle', {
      translateY: [50, 0],
      opacity: [0, 1],
      delay: 800,
      duration: 1200,
      easing: 'easeOutExpo'
    });

    animate('.hero-description', {
      translateY: [30, 0],
      opacity: [0, 1],
      delay: 1200,
      duration: 1000,
      easing: 'easeOutExpo'
    });

    animate('.hero-buttons', {
      scale: [0.8, 1],
      opacity: [0, 1],
      delay: 1600,
      duration: 800,
      easing: 'easeOutElastic(1, .6)'
    });

    animate('.hero-stats', {
      translateY: [50, 0],
      opacity: [0, 1],
      delay: stagger(150, { start: 1800 }),
      duration: 1000,
      easing: 'easeOutExpo'
    });

    animate('.hero-avatar', {
      translateY: [-10, 10],
      duration: 2000,
      loop: true,
      direction: 'alternate',
      easing: 'easeInOutSine'
    });

    const observerOptions: IntersectionObserverInit = {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
    };

    const animateOnScroll = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target;

          if (target.classList.contains('skill-card')) {
            const parent = target.parentElement;
            const delay = parent ? Array.from(parent.children).indexOf(target) * 100 : 0;
            animate(target, {
              translateY: [60, 0],
              opacity: [0, 1],
              scale: [0.9, 1],
              duration: 800,
              easing: 'easeOutExpo',
              delay
            });
          }

          if (target.classList.contains('experience-card')) {
            const parent = target.parentElement;
            const delay = parent ? Array.from(parent.children).indexOf(target) * 200 : 0;
            animate(target, {
              translateX: [-100, 0],
              opacity: [0, 1],
              duration: 1000,
              easing: 'easeOutExpo',
              delay
            });
          }

          if (target.classList.contains('project-card')) {
            const parent = target.parentElement;
            const delay = parent ? Array.from(parent.children).indexOf(target) * 150 : 0;
            animate(target, {
              translateY: [80, 0],
              opacity: [0, 1],
              scale: [0.95, 1],
              duration: 1000,
              easing: 'easeOutExpo',
              delay
            });
          }

          if (target.classList.contains('section-title')) {
            animate(target.querySelectorAll('.title-word'), {
              translateY: [-50, 0],
              opacity: [0, 1],
              delay: stagger(100),
              duration: 800,
              easing: 'easeOutExpo'
            });
          }

          if (target.classList.contains('education-card')) {
            animate(target, {
              translateY: [60, 0],
              opacity: [0, 1],
              duration: 1000,
              easing: 'easeOutExpo'
            });
          }
        }
      });
    };

    const observer = new IntersectionObserver(animateOnScroll, observerOptions);

    document.querySelectorAll('.skill-card, .experience-card, .project-card, .section-title, .education-card').forEach(el => {
      observer.observe(el);
    });

    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);

      const sections = ['hero', 'skills', 'experience', 'projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const skills: Skill = {
    Languages: ['JavaScript', 'TypeScript', 'Python', 'Java'],
    'Web Technologies': ['HTML5', 'CSS', 'SASS', 'Tailwind'],
    Frontend: ['ReactJS', 'React Redux', 'NextJS'],
    Backend: ['Node.js', 'Express.js', 'NestJS', 'RESTful API', 'GraphQL'],
    Database: ['MongoDB', 'SQL', 'PL/SQL', 'PostgreSQL', 'Redis'],
    'Tools & Others': ['Git', 'GitHub', 'Postman']
  };

  const experience: Experience[] = [
    {
      role: 'Full Stack Developer (GET)',
      company: 'Kalyani Technoforge Limited',
      location: 'Pune',
      period: '06/2025 - Current',
      achievements: [
        'Developed multiple comprehensive dashboards for customer receivables management, streamlining the entire reporting workflow and reducing report generation time from hours to instant one-click insights. These dashboards provide real-time visibility into payment status, aging analysis, and collection trends, enabling faster decision-making for the finance team.',
        'Built an enterprise-grade TPM (Total Productive Maintenance) based maintenance management system with integrated live inventory tracking capabilities. The system enables proactive equipment maintenance scheduling, tracks spare parts inventory in real-time, and provides comprehensive maintenance history for all machinery.',
        'Implemented intelligent automated maintenance task scheduling algorithms that analyze equipment usage patterns and predict potential failures. This automation has significantly minimized unplanned equipment downtime, enhanced operational reliability across production lines, and extended machinery lifespan through timely preventive maintenance.',
        'Achieved remarkable performance improvements with a 95-98% reduction in page rendering and data loading times through advanced optimization techniques. Implemented code splitting, lazy loading, memoization strategies, and optimized component rendering lifecycles. Enhanced data handling by implementing efficient caching mechanisms and optimizing database queries for faster data retrieval.'
      ],
      technologies: ['ReactJS', 'Node.js', 'Express.js', 'MongoDB', 'Redux']
    },
    {
      role: 'Full Stack Developer Intern',
      company: 'Kalyani Technoforge Limited',
      location: 'Pune',
      period: '01/2025 - 06/2025',
      achievements: [
        'Created, implemented, and managed various sophisticated data-driven dashboards for comprehensive monitoring and real-time analysis of manufacturing products across all stages of the production lifecycle. These dashboards utilized full-stack technologies including Python for backend data processing, React for interactive frontend visualizations, and implemented real-time data synchronization.',
        'Achieved breakthrough performance optimization by engineering solutions that reduced dashboard rendering latency from an unworkable 30 minutes to near-instantaneous sub-second execution. This was accomplished through implementing efficient data aggregation pipelines, optimizing database queries with proper indexing, utilizing caching strategies, and restructuring the application architecture for better performance.'
      ],
      technologies: ['Python', 'ReactJS', 'MongoDB', 'Express.js']
    }
  ];

  const projects: Project[] = [
    {
      name: 'Social Media App',
      tech: 'MERN Stack',
      icon: '🌐',
      description: 'A comprehensive full-stack social media application built with the MERN (MongoDB, Express.js, React, Node.js) stack, providing a complete social networking experience with modern features.',
      highlights: [
        'Developed core social media functionalities including post creation with rich text and media support, real-time post updates, like/unlike system, nested commenting with threaded replies, and user following/unfollowing capabilities with personalized feed generation',
        'Implemented robust authentication system using JWT (JSON Web Tokens) for secure stateless authentication and bcrypt for password hashing with salt rounds, ensuring user credentials are encrypted and protected against common security vulnerabilities',
        'Designed and developed comprehensive RESTful APIs using Express.js for seamless CRUD operations on user profiles, posts, comments, likes, and follows. Implemented proper HTTP methods, status codes, and error handling for reliable client-server communication',
        'Administered efficient data storage and management using MongoDB Atlas cloud database with Mongoose ODM for schema validation. Optimized complex database queries for feed generation using aggregation pipelines, implemented pagination for large datasets, designed notification systems, and built efficient search functionality with text indexes'
      ],
      impact: 'Full-featured social platform enabling user interaction and content sharing'
    },
    {
      name: 'Chat Server',
      tech: 'Java',
      icon: '💬',
      description: 'A robust real-time chat server application built in Java, leveraging multithreading capabilities to support multiple concurrent client connections and enable seamless communication.',
      highlights: [
        'Developed a scalable real-time chat server using core Java networking concepts, implementing multithreading with Thread Pool Executor to efficiently manage concurrent client connections and ensure responsive message delivery without blocking operations',
        'Implemented client-server architecture using Java Socket programming with TCP/IP protocol, establishing reliable bidirectional communication channels between server and multiple clients with proper connection handling and graceful disconnection procedures',
        'Managed concurrent client connections through a robust multi-threaded server architecture utilizing synchronized methods and thread-safe data structures, ensuring thread safety and preventing race conditions while efficiently handling simultaneous user communications',
        'Facilitated real-time bidirectional messaging between clients by implementing asynchronous input/output streams using BufferedReader and PrintWriter, enabling non-blocking message exchange with proper message queuing and delivery confirmation mechanisms'
      ],
      impact: 'Scalable chat system supporting multiple concurrent users with low-latency messaging'
    }
  ];

  const education: Education = {
    degree: 'BTech: ECE-AIML',
    university: 'MIT World Peace University',
    location: 'Pune',
    expected: '06/2026'
  };

  const certifications: string[] = [
    'National Academic Immersion Programme in Full Stack Development, IIT Jodhpur (07/01/24)',
    'Full Stack Development With React And Node JS, GeeksforGeeks (08/01/24)'
  ];

  const awards: string[] = [
    'Secured 3rd place at Hack MIT WPU-24 hackathon among 85 competing teams at MIT World Peace University',
    'Built an innovative AI system with voice command capabilities (e.g., opening YouTube, web browsing) using advanced speech recognition and Natural Language Processing (NLP) techniques',
    'Collaborated effectively with team members on implementing real-time response generation and showcased the project\'s innovation and technical excellence to panel of judges'
  ];

  const handleSkillHover = (e: React.MouseEvent<HTMLDivElement>) => {
    animate(e.currentTarget, {
      scale: 1.05,
      duration: 300,
      easing: 'easeOutQuad'
    });
  };

  const handleSkillLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    animate(e.currentTarget, {
      scale: 1,
      duration: 300,
      easing: 'easeOutQuad'
    });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-50 bg-slate-900/50">
        <div
          className="h-full bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute w-96 h-96 bg-blue-600/10 rounded-full blur-3xl top-0 -left-20 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl top-0 right-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute w-96 h-96 bg-blue-600/10 rounded-full blur-3xl bottom-20 left-1/2 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-slate-950/90 border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent cursor-pointer" onClick={() => scrollToSection('hero')}>
              SSJ.DEV
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
              {['Skills', 'Experience', 'Projects', 'Education', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-gray-300 hover:text-blue-400 transition-all duration-300 relative group text-sm font-medium ${activeSection === item.toLowerCase() ? 'text-blue-400' : ''
                    }`}
                >
                  {item}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-300 ${activeSection === item.toLowerCase() ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-blue-400"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu size={24} />
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3">
              {['Skills', 'Experience', 'Projects', 'Education', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left text-gray-300 hover:text-blue-400 transition-all duration-300 py-2"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" ref={heroRef} className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          {/* Avatar with professional icon */}
          <div className="hero-avatar w-48 h-48 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-500 via-cyan-500 to-blue-600 p-1 shadow-2xl shadow-blue-500/30">
            <div className="hero-avatar w-48 h-48 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-500 via-cyan-500 to-blue-600 p-1 shadow-2xl shadow-blue-500/30">
              <div className="relative w-full h-full rounded-full bg-slate-900 overflow-hidden">
                <Image
                  src="/profile.jpg"
                  alt="Shashank Shekhar Jha"
                  fill
                  priority
                  className="object-cover rounded-full"
                />
              </div>
            </div>
          </div>

          <h1 className="hero-title text-5xl sm:text-6xl md:text-8xl font-black mb-6 tracking-tight">
            <span className="inline-block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">Shashank</span>{' '}
            <span className="inline-block bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">Shekhar</span>{' '}
            <span className="inline-block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">Jha</span>
          </h1>

          <p className="hero-subtitle text-xl sm:text-2xl md:text-4xl text-blue-300 font-semibold mb-6">
            Full Stack Web Developer
          </p>

          <p className="hero-description text-base sm:text-lg text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed px-4">
            Full Stack Web Developer with proven track record in enhancing productivity and efficiency.
            Expertise in JavaScript, React, and Node.js drives robust web application development.
            Strong problem-solving abilities and teamwork skills contribute to successful project outcomes
            and collaborative environments.
          </p>

          <div className="hero-buttons flex gap-4 sm:gap-6 justify-center items-center flex-wrap px-4">
            <a
              href="mailto:shashanksj.dev@gmail.com"
              className="group flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 font-semibold text-sm sm:text-base"
            >
              <Mail size={20} />
              Get in Touch
              <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <button
              onClick={() => setShowCV(true)}
              className="group flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-slate-800/80 backdrop-blur rounded-full border border-slate-700 hover:border-blue-500/60 transition-all duration-300 hover:scale-105 font-semibold text-sm sm:text-base"
            >
              <FileText size={20} />
              View Resume
            </button>
          </div>

          <div className="mt-12 flex gap-6 justify-center">
            <a
              href={githubURL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-slate-800/50 backdrop-blur rounded-full hover:bg-blue-600/20 transition-all duration-300 hover:scale-110 cursor-pointer border border-slate-700 hover:border-blue-500/50"
            >
              <Github size={24} />
            </a>
            <a
              href={linkedinURL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-slate-800/50 backdrop-blur rounded-full hover:bg-blue-600/20 transition-all duration-300 hover:scale-110 cursor-pointer border border-slate-700 hover:border-blue-500/50"
            >
              <Linkedin size={24} />
            </a>
          </div>

          <div className="mt-16">
            <ChevronDown className="animate-bounce text-blue-400 mx-auto" size={32} />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" ref={skillsRef} className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="section-title text-center mb-20">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Code className="text-blue-400" size={48} />
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4">
              <span className="title-word inline-block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Technical</span>{' '}
              <span className="title-word inline-block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items]) => {
              const icons: { [key: string]: React.ReactNode } = {
                Languages: <Code size={24} className="text-cyan-400" />,
                'Web Technologies': <Layout size={24} className="text-cyan-400" />,
                Frontend: <Layout size={24} className="text-cyan-400" />,
                Backend: <Server size={24} className="text-cyan-400" />,
                Database: <Database size={24} className="text-cyan-400" />,
                'Tools & Others': <Zap size={24} className="text-cyan-400" />
              };

              return (
                <div
                  key={category}
                  className="skill-card opacity-0 group p-8 rounded-3xl bg-gradient-to-br from-slate-900/90 to-slate-800/50 backdrop-blur-xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20"
                  onMouseEnter={handleSkillHover}
                  onMouseLeave={handleSkillLeave}
                >
                  <h3 className="text-2xl font-bold mb-6 text-blue-300 flex items-center gap-3">
                    {icons[category]}
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-slate-800/60 rounded-full text-sm font-medium hover:bg-blue-600/30 transition-all duration-300 border border-slate-700 hover:border-blue-500/50 hover:scale-105 cursor-default text-gray-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" ref={experienceRef} className="relative py-32 px-6 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="section-title text-center mb-20">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Briefcase className="text-blue-400" size={48} />
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4">
              <span className="title-word inline-block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Work</span>{' '}
              <span className="title-word inline-block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-8 relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full hidden md:block"></div>

            {experience.map((exp, idx) => (
              <div
                key={idx}
                className={`experience-card opacity-0 relative ${idx % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:ml-auto'} md:w-1/2`}
              >
                <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-900/90 to-slate-800/50 backdrop-blur-xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20">
                  <div className={`absolute top-8 ${idx % 2 === 0 ? 'md:right-0' : 'md:left-0'} md:transform md:translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-950 hidden md:block`}></div>

                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-blue-300 mb-2">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-cyan-400 font-semibold mb-2">
                      <Briefcase size={18} />
                      {exp.company}
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm">
                      <span className="flex items-center gap-1">
                        <MapPin size={16} />
                        {exp.location}
                      </span>
                      <span className="px-3 py-1 bg-slate-800/60 rounded-full border border-slate-700">{exp.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-6">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex gap-3 text-gray-300 leading-relaxed text-sm sm:text-base">
                        <span className="text-blue-400 mt-1 flex-shrink-0">▹</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-slate-700/50">
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-xs font-medium border border-blue-700/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" ref={projectsRef} className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="section-title text-center mb-20">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Terminal className="text-blue-400" size={48} />
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4">
              <span className="title-word inline-block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Featured</span>{' '}
              <span className="title-word inline-block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="project-card opacity-0 group p-8 rounded-3xl bg-gradient-to-br from-slate-900/90 to-slate-800/50 backdrop-blur-xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20"
              >
                <div className="text-5xl mb-6">{project.icon}</div>
                <h3 className="text-3xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  {project.name}
                </h3>
                <div className="inline-block px-4 py-1 bg-blue-900/30 rounded-full text-sm text-blue-300 mb-6 font-semibold border border-blue-700/30">
                  {project.tech}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                <ul className="space-y-3 mb-6">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex gap-3 text-gray-400 text-sm leading-relaxed">
                      <span className="text-cyan-400 flex-shrink-0">✓</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-slate-700/50">
                  <p className="text-sm text-blue-300 font-medium">
                    <span className="text-gray-400">Impact:</span> {project.impact}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section id="education" className="relative py-32 px-6 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="section-title text-center mb-20">
            <div className="flex items-center justify-center gap-4 mb-4">
              <GraduationCap className="text-blue-400" size={48} />
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4">
              <span className="title-word inline-block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Education</span>{' '}
              <span className="title-word inline-block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">&</span>{' '}
              <span className="title-word inline-block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Training</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Education */}
            <div className="education-card opacity-0 p-8 rounded-3xl bg-gradient-to-br from-slate-900/90 to-slate-800/50 backdrop-blur-xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500">
              <h3 className="text-2xl font-bold text-blue-300 mb-2">{education.degree}</h3>
              <div className="text-cyan-400 font-semibold mb-2">{education.university}</div>
              <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm">
                <span className="flex items-center gap-1">
                  <MapPin size={16} />
                  {education.location}
                </span>
                <span className="px-3 py-1 bg-slate-800/60 rounded-full border border-slate-700">Expected: {education.expected}</span>
              </div>
            </div>

            {/* Certifications */}
            <div className="education-card opacity-0 p-8 rounded-3xl bg-gradient-to-br from-slate-900/90 to-slate-800/50 backdrop-blur-xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500">
              <h3 className="text-2xl font-bold text-blue-300 mb-6 flex items-center gap-3">
                <Award className="text-cyan-400" size={24} />
                Certifications
              </h3>
              <ul className="space-y-4">
                {certifications.map((cert, idx) => (
                  <li key={idx} className="flex gap-3 text-gray-300 text-sm sm:text-base leading-relaxed">
                    <span className="text-cyan-400 mt-1 flex-shrink-0">✓</span>
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Awards */}
            <div className="education-card opacity-0 p-8 rounded-3xl bg-gradient-to-br from-slate-900/90 to-slate-800/50 backdrop-blur-xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500">
              <h3 className="text-2xl font-bold text-blue-300 mb-6 flex items-center gap-3">
                <Award className="text-cyan-400" size={24} />
                Awards & Recognition
              </h3>
              <ul className="space-y-4">
                {awards.map((award, idx) => (
                  <li key={idx} className="flex gap-3 text-gray-300 text-sm sm:text-base leading-relaxed">
                    <span className="text-cyan-400 mt-1 flex-shrink-0">🏆</span>
                    <span>{award}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" ref={contactRef} className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-8">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Let&apos;s Build Something Amazing
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-12 px-4">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities.
          </p>

          <div className="flex flex-wrap gap-4 sm:gap-6 justify-center mb-12 px-4">
            <a
              href="mailto:shashanksj.dev@gmail.com"
              className="flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 font-semibold text-sm sm:text-base"
            >
              <Mail size={20} />
              <span className="hidden sm:inline">shashanksj.dev@gmail.com</span>
              <span className="sm:hidden">Email</span>
            </a>
            <a
              href="tel:8130049299"
              className="flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-slate-800/80 backdrop-blur rounded-full border border-slate-700 hover:border-blue-500/60 transition-all duration-300 hover:scale-105 font-semibold text-sm sm:text-base"
            >
              <Phone size={20} />
              <span className="hidden sm:inline">8130049299</span>
              <span className="sm:hidden">Call</span>
            </a>
          </div>

          <div className="flex gap-6 justify-center">
            <a
              href={githubURL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-slate-800/80 backdrop-blur rounded-full hover:bg-blue-600/20 transition-all duration-300 hover:scale-110 cursor-pointer border border-slate-700 hover:border-blue-500/60"
            >
              <Github size={28} />
            </a>
            <a
              href={linkedinURL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-slate-800/80 backdrop-blur rounded-full hover:bg-blue-600/20 transition-all duration-300 hover:scale-110 cursor-pointer border border-slate-700 hover:border-blue-500/60"
            >
              <Linkedin size={28} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 px-6 border-t border-slate-800/50">
        <div className="max-w-7xl mx-auto text-center text-gray-400 text-sm">
          <p className="mb-2">Pune, Maharashtra 411036</p>
          <p>© 2026 Shashank Shekhar Jha. Built with React & Tailwind CSS</p>
        </div>
      </footer>

      {/* CV Modal */}
      {showCV && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl max-h-[90vh] bg-slate-900 rounded-3xl border border-slate-700/50 overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b border-slate-800/50">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Resume
              </h3>
              <button
                onClick={() => setShowCV(false)}
                className="p-2 hover:bg-blue-600/20 rounded-full transition-all duration-300"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-8 overflow-y-auto max-h-[calc(90vh-140px)]">
              <div className="space-y-8 text-gray-300">
                {/* Summary */}
                <div>
                  <h4 className="text-xl font-bold text-blue-300 mb-4">Summary</h4>
                  <p className="leading-relaxed">
                    Full Stack Web Developer with proven track record in enhancing productivity and efficiency.
                    Expertise in JavaScript, React, and Node.js drives robust web application development.
                    Strong problem-solving abilities and teamwork skills contribute to successful project outcomes
                    and collaborative environments.
                  </p>
                </div>

                {/* Contact Info */}
                <div>
                  <h4 className="text-xl font-bold text-blue-300 mb-4">Contact Information</h4>
                  <div className="space-y-2">
                    <p className="flex items-center gap-2"><Mail size={16} /> shashanksj.dev@gmail.com</p>
                    <p className="flex items-center gap-2"><Phone size={16} /> 8130049299</p>
                    <p className="flex items-center gap-2"><MapPin size={16} /> Pune, Maharashtra 411036</p>
                  </div>
                </div>

                {/* Experience */}
                <div>
                  <h4 className="text-xl font-bold text-blue-300 mb-4">Experience</h4>
                  {experience.map((exp, idx) => (
                    <div key={idx} className="mb-6">
                      <h5 className="text-lg font-semibold text-cyan-400">{exp.role}</h5>
                      <p className="text-gray-400 mb-2">{exp.company} • {exp.location} • {exp.period}</p>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex gap-2 text-sm">
                            <span className="text-blue-400">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Education */}
                <div>
                  <h4 className="text-xl font-bold text-blue-300 mb-4">Education</h4>
                  <div>
                    <h5 className="text-lg font-semibold text-cyan-400">{education.degree}</h5>
                    <p className="text-gray-400">{education.university} • {education.location} • Expected: {education.expected}</p>
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <h4 className="text-xl font-bold text-blue-300 mb-4">Technical Skills</h4>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {Object.entries(skills).map(([category, items]) => (
                      <div key={category}>
                        <h5 className="text-cyan-400 font-semibold mb-2">{category}</h5>
                        <p className="text-sm">{items.join(', ')}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Certifications */}
                <div>
                  <h4 className="text-xl font-bold text-blue-300 mb-4">Certifications</h4>
                  <ul className="space-y-2">
                    {certifications.map((cert, idx) => (
                      <li key={idx} className="flex gap-2 text-sm">
                        <span className="text-blue-400">•</span>
                        <span>{cert}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Awards */}
                <div>
                  <h4 className="text-xl font-bold text-blue-300 mb-4">Awards</h4>
                  <ul className="space-y-2">
                    {awards.map((award, idx) => (
                      <li key={idx} className="flex gap-2 text-sm">
                        <span className="text-blue-400">🏆</span>
                        <span>{award}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 p-6 border-t border-slate-800/50">
              <a
                href="/Resume_.pdf"
                download
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full transition-all duration-300 hover:scale-105 font-semibold"
              >
                <Download size={20} />
                Download PDF Resume
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;