import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import { portfolioProjects } from '../data/portfolio';

const skills = [
  { name: 'HTML5', icon: 'html5' },
  { name: 'CSS3', icon: 'css3' },
  { name: 'JavaScript', icon: 'javascript' },
  { name: 'React.js', icon: 'react' },
  { name: 'Next.js', icon: 'nextjs' },
  { name: 'Tailwind CSS', icon: 'tailwindcss' },
  { name: 'Bootstrap', icon: 'bootstrap' },
  { name: 'Node.js', icon: 'nodejs' },
  { name: 'Python', icon: 'python' },
  { name: 'Flask', icon: 'flask' },
  { name: 'MySQL', icon: 'mysql' },
  { name: 'MongoDB', icon: 'mongodb' },
  { name: 'Git', icon: 'git' },
  { name: 'GitHub', icon: 'github' },
  { name: 'Figma', icon: 'figma' },
  { name: 'Linux', icon: 'linux' },
];

const stats = [
  { label: 'Projects Completed', value: '15+' },
  { label: 'Happy Clients', value: '10+' },
  { label: 'Technologies', value: '20+' },
];

export function HomePage() {
  return (
    <div className="portfolio-container bg-white text-surface-900 dark:bg-surface-950 dark:text-white">
      <style>{`
        /* Custom styles matching original portfolio */
        .portfolio-container {
          background: 'var(--bg)',
          color: 'var(--text)',
        }

        .project-demo-btn {
          background: linear-gradient(135deg, #7c5cff 0%, #22d3ee 100%);
          transition: all 0.3s ease;
        }

        .project-demo-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(124, 92, 255, 0.4);
        }

        .view-demo-badge {
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20" id="home">
        {/* Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary-600/20 rounded-full blur-[120px] animate-pulse-slow" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] animate-pulse-slow" />
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
              backgroundSize: '64px 64px',
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-100 dark:bg-surface-800/50 border border-surface-200 dark:border-surface-700 mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-sm text-surface-600 dark:text-surface-300">Available for opportunities</span>
              </div>

              <p className="font-mono text-cyan-600 dark:text-cyan-400 text-sm tracking-widest mb-4">HELLO, I'M</p>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                <span className="bg-gradient-to-r from-surface-900 via-primary-600 to-cyan-500 dark:from-white dark:via-primary-200 dark:to-cyan-400 bg-clip-text text-transparent">
                  Vishnu Vaishnav
                </span>
              </h1>

              <h2 className="text-xl sm:text-2xl text-surface-700 dark:text-surface-300 mb-6">
                I'm a <TypewriterText />
              </h2>

              <p className="text-surface-600 dark:text-surface-400 text-lg max-w-xl mb-8 mx-auto lg:mx-0">
                Passionate Web Developer crafting modern, responsive, and visually engaging web experiences with clean code and seamless user experience.
              </p>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
                <a href="#projects" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary-600 to-cyan-500 text-white font-semibold hover:shadow-lg hover:shadow-primary-500/30 hover:-translate-y-0.5 transition-all">
                  View Projects <ArrowRight className="w-4 h-4" />
                </a>
                <a href="/images/Vishnu_Vaishnav_Resume.pdf" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-surface-300 dark:border-surface-600 text-surface-900 dark:text-white font-semibold hover:bg-surface-100 dark:hover:bg-surface-800 hover:border-surface-400 dark:hover:border-surface-500 transition-all">
                  <Download className="w-4 h-4" /> Download CV
                </a>
              </div>

              <div className="flex gap-4 justify-center lg:justify-start">
                {[Github, Linkedin, Twitter, Instagram].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 rounded-lg bg-surface-100 dark:bg-surface-800 flex items-center justify-center text-surface-600 dark:text-surface-400 hover:text-white hover:bg-primary-600 transition-all"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Profile Image */}
            <div className="relative flex justify-center lg:block">
              <div className="relative">
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary-500/30 animate-spin-slow" />
                <div className="absolute inset-4 rounded-full border-2 border-dashed border-cyan-500/30 animate-spin-slow" style={{ animationDirection: 'reverse' }} />
                <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-primary-600 to-cyan-500 p-1">
                  <div className="w-full h-full rounded-full bg-surface-100 dark:bg-surface-900 flex items-center justify-center overflow-hidden">
                    <img
                      src="/images/vishnu.png"
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Floating Tags */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-white dark:bg-surface-800 border border-surface-200 dark:border-surface-700 shadow-xl animate-float">
                  <span className="text-sm font-medium text-surface-900 dark:text-white">React Developer</span>
                </div>
                <div className="absolute top-1/3 -right-4 px-4 py-2 rounded-full bg-white dark:bg-surface-800 border border-surface-200 dark:border-surface-700 shadow-xl animate-float" style={{ animationDelay: '1s' }}>
                  <span className="text-sm font-medium text-surface-900 dark:text-white">Full Stack</span>
                </div>
                <div className="absolute bottom-4 -left-4 px-4 py-2 rounded-full bg-white dark:bg-surface-800 border border-surface-200 dark:border-surface-700 shadow-xl animate-float" style={{ animationDelay: '2s' }}>
                  <span className="text-sm font-medium text-surface-900 dark:text-white">Web Apps</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-surface-200 dark:border-surface-800 bg-surface-50 dark:bg-surface-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-3 gap-6 text-center">
            {stats.map(({ label, value }) => (
              <div key={label}>
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-surface-900 to-primary-600 dark:from-white dark:to-primary-200 bg-clip-text text-transparent">
                  {value}
                </div>
                <p className="text-surface-600 dark:text-surface-400 text-sm sm:text-base mt-2">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24" id="about">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative flex justify-center">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&auto=format&fit=crop"
                  alt="About"
                  className="rounded-2xl w-full max-w-md"
                />
                <div className="absolute -bottom-6 -right-6 p-4 rounded-xl bg-gradient-to-r from-primary-600 to-cyan-500 text-white">
                  <div className="text-3xl font-bold">1+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
              </div>
            </div>

            <div>
              <p className="font-mono text-cyan-600 dark:text-cyan-400 text-sm tracking-widest mb-4">ABOUT ME</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 dark:text-white mb-6">Get to Know Me</h2>

              <p className="text-surface-600 dark:text-surface-400 mb-4">
                Hi, I'm Vishnu Vaishnav — a passionate Web Developer crafting modern, responsive, and visually engaging web experiences. Proficient in HTML5, CSS3, JavaScript (ES6+), React.js, Bootstrap, and Tailwind CSS.
              </p>
              <p className="text-surface-600 dark:text-surface-400 mb-6">
                Dedicated to building fast, accessible, and scalable web applications while continuously expanding my technical expertise and contributing to impactful projects.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                {stats.map(({ label, value }) => (
                  <div key={label} className="p-4 rounded-xl bg-surface-100 dark:bg-surface-800/50 border border-surface-200 dark:border-surface-700">
                    <div className="text-2xl font-bold text-surface-900 dark:text-white">{value}</div>
                    <div className="text-sm text-surface-600 dark:text-surface-400">{label}</div>
                  </div>
                ))}
              </div>

              <a href="/images/Vishnu_Vaishnav_Resume.pdf" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary-600 to-cyan-500 text-white font-semibold hover:shadow-lg hover:shadow-primary-500/30 transition-all">
                <Download className="w-4 h-4" /> Download CV
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 bg-surface-50 dark:bg-surface-900/50" id="skills">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="font-mono text-cyan-600 dark:text-cyan-400 text-sm tracking-widest mb-4">SKILLS</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 dark:text-white mb-4">Tools & Technologies</h2>
          </div>

          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="aspect-square rounded-xl bg-surface-100 dark:bg-surface-800/50 border border-surface-200 dark:border-surface-700 flex items-center justify-center p-3 hover:border-primary-500 hover:bg-surface-200 dark:hover:bg-surface-700/50 transition-all"
              >
                <img
                  src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}/${skill.icon}-original.svg`}
                  alt={skill.name}
                  className="w-8 h-8 grayscale hover:grayscale-0 transition-all"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section - UPDATED WITH DEMO LINKS */}
      <section className="py-24" id="projects">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="font-mono text-cyan-600 dark:text-cyan-400 text-sm tracking-widest mb-4">PORTFOLIO</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 dark:text-white mb-4">Featured Projects</h2>
            <p className="text-surface-600 dark:text-surface-400 max-w-2xl mx-auto">
              Explore my latest full-stack projects. Click "Live Demo" to interact with each project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioProjects.map((project) => (
              <div
                key={project.id}
                className="group relative rounded-2xl overflow-hidden bg-white dark:bg-surface-800/50 border border-surface-200 dark:border-surface-700 hover:border-primary-500/50 transition-all shadow-sm dark:shadow-none"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={
                      project.slug === 'ecommerce' ? 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&auto=format&fit=crop' :
                      project.slug === 'dashboard' ? 'https://images.unsplash.com/photo-1686061593213-98dad7c599b9?w=600&auto=format&fit=crop' :
                      project.slug === 'social' ? 'https://images.unsplash.com/photo-1759215524472-1b0686fdbd87?w=600&auto=format&fit=crop' :
                      project.slug === 'taskmanager' ? 'https://images.unsplash.com/photo-1746729798021-129315426424?w=600&auto=format&fit=crop' :
                      project.slug === 'realestate' ? 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=600&auto=format&fit=crop' :
                      'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&auto=format&fit=crop'
                    }
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-950/90 via-surface-950/50 to-transparent" />
                  <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${project.color} text-white`}>
                    {project.category}
                  </div>

                  {/* Live Demo Badge */}
                  <div className="absolute top-4 right-4 view-demo-badge">
                    <span className="px-2 py-1 rounded-full bg-emerald-500/90 text-white text-xs font-medium">
                      Live Demo Available
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-surface-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-surface-600 dark:text-surface-400 text-sm mb-4 line-clamp-2">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span key={tag} className="text-xs px-2 py-1 rounded-md bg-surface-100 dark:bg-surface-700/50 text-surface-700 dark:text-surface-300">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions - LIVE DEMO BUTTON */}
                  <div className="flex gap-3">
                    <Link
                      to={project.demoUrl}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl project-demo-btn text-white font-semibold text-sm"
                    >
                      Live Demo <ArrowRight className="w-4 h-4" />
                    </Link>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 rounded-xl border border-surface-300 dark:border-surface-600 text-surface-600 dark:text-surface-300 hover:text-surface-900 dark:hover:text-white hover:border-primary-500 transition-all"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-surface-50 dark:bg-surface-900/50" id="services">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="font-mono text-cyan-600 dark:text-cyan-400 text-sm tracking-widest mb-4">SERVICES</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 dark:text-white mb-4">What I Offer</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Web Development', desc: 'Responsive websites with modern UI, clean code, and pixel-perfect design.' },
              { title: 'Frontend Development', desc: 'Fast, interactive user interfaces with smooth animations.' },
              { title: 'UI/UX Design', desc: 'Beautiful, intuitive designs focused on excellent user experience.' },
              { title: 'Support & Maintenance', desc: 'Ongoing support, updates and maintenance for your projects.' },
            ].map((service) => (
              <div key={service.title} className="p-6 rounded-2xl bg-white dark:bg-surface-800/50 border border-surface-200 dark:border-surface-700 hover:border-primary-500/50 hover:-translate-y-1 transition-all shadow-sm dark:shadow-none">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-600 to-cyan-500 flex items-center justify-center mb-4">
                  <ArrowRight className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-surface-900 dark:text-white mb-2">{service.title}</h3>
                <p className="text-surface-600 dark:text-surface-400 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24" id="contact">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="font-mono text-cyan-600 dark:text-cyan-400 text-sm tracking-widest mb-4">CONTACT</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 dark:text-white mb-4">Get In Touch</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-4">
              {[
                { label: 'Email', value: 'vishnuvaishnav253@gmail.com', icon: 'email' },
                { label: 'Phone', value: '+91 8875717771', icon: 'phone' },
                { label: 'Location', value: 'India', icon: 'location' },
              ].map(({ label, value }) => (
                <div key={label} className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-surface-800/50 border border-surface-200 dark:border-surface-700 shadow-sm dark:shadow-none">
                  <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-600/20 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-primary-500 dark:bg-primary-400" />
                  </div>
                  <div>
                    <p className="text-sm text-surface-600 dark:text-surface-400">{label}</p>
                    <p className="text-surface-900 dark:text-white font-medium">{value}</p>
                  </div>
                </div>
              ))}

              <div className="flex gap-3 pt-4">
                {[Github, Linkedin, Twitter, Instagram].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-12 h-12 rounded-xl bg-white dark:bg-surface-800 border border-surface-200 dark:border-surface-700 flex items-center justify-center text-surface-600 dark:text-surface-400 hover:text-white hover:bg-primary-600 hover:border-transparent transition-all shadow-sm dark:shadow-none"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <form className="p-6 rounded-2xl bg-white dark:bg-surface-800/50 border border-surface-200 dark:border-surface-700 space-y-4 shadow-sm dark:shadow-none">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-surface-600 dark:text-surface-400 mb-2">Name</label>
                  <input type="text" placeholder="Your name" className="w-full px-4 py-3 rounded-xl bg-surface-50 dark:bg-surface-700/50 border border-surface-200 dark:border-surface-600 text-surface-900 dark:text-white placeholder-surface-400 focus:outline-none focus:border-primary-500" />
                </div>
                <div>
                  <label className="block text-sm text-surface-600 dark:text-surface-400 mb-2">Email</label>
                  <input type="email" placeholder="you@email.com" className="w-full px-4 py-3 rounded-xl bg-surface-50 dark:bg-surface-700/50 border border-surface-200 dark:border-surface-600 text-surface-900 dark:text-white placeholder-surface-400 focus:outline-none focus:border-primary-500" />
                </div>
              </div>
              <div>
                <label className="block text-sm text-surface-600 dark:text-surface-400 mb-2">Subject</label>
                <input type="text" placeholder="Project subject" className="w-full px-4 py-3 rounded-xl bg-surface-50 dark:bg-surface-700/50 border border-surface-200 dark:border-surface-600 text-surface-900 dark:text-white placeholder-surface-400 focus:outline-none focus:border-primary-500" />
              </div>
              <div>
                <label className="block text-sm text-surface-600 dark:text-surface-400 mb-2">Message</label>
                <textarea rows={4} placeholder="Tell me about your project..." className="w-full px-4 py-3 rounded-xl bg-surface-50 dark:bg-surface-700/50 border border-surface-200 dark:border-surface-600 text-surface-900 dark:text-white placeholder-surface-400 focus:outline-none focus:border-primary-500 resize-none" />
              </div>
              <button type="submit" className="w-full py-3 rounded-xl bg-gradient-to-r from-primary-600 to-cyan-500 text-white font-semibold hover:shadow-lg hover:shadow-primary-500/30 transition-all">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-surface-200 dark:border-surface-800 bg-surface-50 dark:bg-surface-900/50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-surface-600 dark:text-surface-400">
            &copy; {new Date().getFullYear()} Vishnu Vaishnav. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

// Typewriter Component
function TypewriterText() {
  const roles = ['Web Developer', 'Frontend Developer', 'React Developer', 'UI/UX Enthusiast', 'Problem Solver'];
  const [textIndex, setTextIndex] = React.useState(0);
  const [charIndex, setCharIndex] = React.useState(0);
  const [isDeleting, setIsDeleting] = React.useState(false);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      const currentText = roles[textIndex];

      if (!isDeleting) {
        if (charIndex < currentText.length) {
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        if (charIndex > 0) {
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setTextIndex((textIndex + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, roles]);

  return (
    <span>
      {roles[textIndex].substring(0, charIndex)}
      <span className="animate-pulse text-primary-400">|</span>
    </span>
  );
}
