'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '/projects' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '#contact' },
];

export function Nav() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    // Only observe sections if we're on the home page
    if (pathname !== '/') {
      setActiveSection('');
      return;
    }

    const observerOptions = {
      threshold: 0.3,
      rootMargin: '-100px 0px -66% 0px',
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id || 'home');
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, [pathname]);

  const isActive = (href: string) => {
    // If we're on a non-home page
    if (pathname !== '/') {
      return pathname === href;
    }
    // If we're on home page
    if (href.startsWith('#')) {
      return activeSection === href.slice(1);
    }
    return false;
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // If it's a hash link from a non-home page, navigate to home first then scroll
    if (href.startsWith('#') && pathname !== '/') {
      e.preventDefault();
      router.push('/' + href);
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 z-40 w-full border-b border-white/5 bg-black/60 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="#home"
            className="font-mono text-sm font-medium text-accent-blue transition-colors hover:text-accent-blue/80"
          >
            yuval.mehta
          </Link>

          {/* Desktop Nav */}
          <div className="hidden gap-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`group relative font-sans text-sm transition-colors ${
                  isActive(item.href)
                    ? 'text-text-primary'
                    : 'text-text-muted hover:text-text-primary'
                }`}
              >
                {item.label}
                {/* Hover underline (always present, opacity-driven) */}
                <span
                  className={`absolute -bottom-1 left-0 h-px w-full origin-left bg-accent-blue transition-transform duration-300 ${
                    isActive(item.href)
                      ? 'scale-x-100'
                      : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  mobileMenuOpen
                    ? 'M6 18L18 6M6 6l12 12'
                    : 'M4 6h16M4 12h16M4 18h16'
                }
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t border-border bg-surface"
            >
              <div className="flex flex-col gap-4 px-4 py-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="font-sans text-sm text-text-muted transition-colors hover:text-text-primary"
                    onClick={(e) => {
                      handleNavClick(e, item.href);
                      setMobileMenuOpen(false);
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
