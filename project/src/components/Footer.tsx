import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Instagram, ArrowUp, Heart } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
];

const footerLinks = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/#projects' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-surface-200 dark:bg-surface-900 dark:border-surface-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand */}
            <div>
              <Link to="/" className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-cyan flex items-center justify-center">
                  <span className="text-white font-mono text-sm">&lt;/&gt;</span>
                </div>
                <span className="font-bold text-lg text-surface-900 dark:text-white">Vishnu Vaishnav</span>
              </Link>
              <p className="text-surface-600 dark:text-surface-400 text-sm leading-relaxed">
                Full Stack Developer crafting modern web experiences with passion and precision.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-surface-900 dark:text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {footerLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-surface-600 hover:text-surface-900 dark:text-surface-400 dark:hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div>
              <h3 className="font-semibold text-surface-900 dark:text-white mb-4">Connect</h3>
              <div className="flex gap-3">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-surface-100 dark:bg-surface-800 flex items-center justify-center text-surface-600 dark:text-surface-400 hover:text-white hover:bg-primary-600 transition-all"
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-6 border-t border-surface-200 dark:border-surface-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-surface-600 dark:text-surface-400 text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-accent-rose fill-accent-rose" /> by Vishnu Vaishnav
          </p>
          <p className="text-surface-500 text-sm">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>

      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-gradient-to-r from-primary-600 to-accent-cyan text-white flex items-center justify-center shadow-lg shadow-primary-500/30 hover:shadow-xl hover:-translate-y-1 transition-all z-40"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
}
