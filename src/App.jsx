import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true); // Default dark mode
  const navbarRef = useRef(null);

  useEffect(() => {
    // Typing animation
    const texts = [
      'Full stack daveloper',
      'Devops engineer',
      'AI/ML Learner',
    ];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingElement = document.getElementById('typing-text');

    function typeText() {
      const currentText = texts[textIndex];
      if (isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
      } else {
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
      }

      let typeSpeed = isDeleting ? 150 : 250; // Increased for slower animation
      if (window.innerWidth < 768) {
        typeSpeed *= 1.5; // Further slow down by 50% in mobile view
      }
      if (!isDeleting && charIndex === currentText.length) {
        typeSpeed = 4000; // Increased pause to 4000ms
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        typeSpeed = 1500; // Increased delay to 1500ms
      }
      setTimeout(typeText, typeSpeed);
    }
    typeText();

    // Scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          if (entry.target.classList.contains('skill-item')) {
            const skillBar = entry.target.querySelector('.skill-bar');
            const width = skillBar.getAttribute('data-width');
            setTimeout(() => {
              skillBar.style.width = width + '%';
            }, 200);
          }
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
    document.querySelectorAll('.skill-item').forEach(el => observer.observe(el));
    document.querySelectorAll('.education-step').forEach(el => observer.observe(el));

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          if (window.innerWidth < 768) {
            setIsMobileMenuOpen(false); // Reset mobile menu on click
          }
        }
      });
    });

    // Add active navigation highlighting
    window.addEventListener('scroll', () => {
      const sections = document.querySelectorAll('section[id]');
      const navLinks = document.querySelectorAll('nav a[href^="#"]');
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute('id');
        }
      });
      navLinks.forEach(link => {
        link.classList.remove('border-b-2', 'border-green-500');
        if (link.getAttribute('href') === '#' + current) {
          link.classList.add('border-b-2', 'border-green-500');
        }
      });
    });

    // Form submission
    const form = document.querySelector('form');
    if (form) {
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const subject = this.querySelector('input[placeholder="Project Discussion"]').value;
        const message = this.querySelector('textarea').value;
        if (!name || !email || !message) {
          alert('Please fill in all required fields.');
          return;
        }
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        setTimeout(() => {
          alert('Thank you for your message! I\'ll get back to you soon.');
          this.reset();
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
        }, 2000);
      });
    }
  }, [isMobileMenuOpen]);

  const navbarHeight = navbarRef.current ? Math.min(navbarRef.current.offsetHeight, 64) : 64; // Cap height at 64px

  return (
    <div className={`app relative ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'}`}>
      <Navbar ref={navbarRef} isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <section id="intro" className="min-h-screen flex items-center justify-center relative overflow-hidden" style={{
        paddingTop: `${navbarHeight}px`,
        backgroundImage: `url(${isDarkMode ? `${import.meta.env.BASE_URL}dark.png` : `${import.meta.env.BASE_URL}bglight.png`})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <style>
          {`
            @media (max-width: 767px) {
              #intro {
                background-position: left;
              }
            }
          `}
        </style>
        <div className="absolute inset-0 bg-black/10"></div>
        <Intro isDarkMode={isDarkMode} />
      </section>
      <section id="skills" className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <Skills isDarkMode={isDarkMode} />
      </section>
      <section id="experience" className={`py-20 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
        <Experience isDarkMode={isDarkMode} />
      </section>
      <section id="education" className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} relative overflow-hidden`}>
        <Education isDarkMode={isDarkMode} />
      </section>
      <section id="projects" className={`py-20 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
        <Projects isDarkMode={isDarkMode} />
      </section>
      <section id="blogs" className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <Blogs isDarkMode={isDarkMode} />
      </section>
      <section id="contact" className={`py-20 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
        <Contact isDarkMode={isDarkMode} />
      </section>
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;