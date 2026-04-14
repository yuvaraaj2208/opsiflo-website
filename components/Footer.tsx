'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Twitter, Linkedin, Github, Instagram, ArrowRight, Mail, CheckCircle } from 'lucide-react';

const links = {
  Products: [
    { label: 'AI Mastery', href: 'https://mastery.opsiflo.com' },
    { label: 'Resume Optimizer', href: 'https://resume.opsiflo.com' },
    { label: 'LinkedIn Growth', href: 'https://linkedin.opsiflo.com' },
    { label: 'Email Campaign', href: 'https://email.opsiflo.com' },
    { label: 'Pricing', href: '#pricing' },
  ],
  Services: [
    { label: 'Resume Optimization', href: '#services' },
    { label: 'LinkedIn Content', href: '#services' },
    { label: 'Email Campaign', href: '#services' },
    { label: 'Book a Demo', href: '#services' },
  ],
  Resources: [
    { label: 'Blog', href: '#blog' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Case Studies', href: '#social-proof' },
  ],
  Company: [
    { label: 'About Us', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
  ],
};

const social = [
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Github, label: 'GitHub', href: '#' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      {/* Newsletter strip */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-bold text-white mb-1">Stay ahead of the curve</h3>
              <p className="text-sm text-gray-400">Weekly AI career tips, product updates, and exclusive offers.</p>
            </div>
            {subscribed ? (
              <div className="flex items-center gap-2 text-green-400 font-medium">
                <CheckCircle className="w-5 h-5" />
                Thanks for subscribing!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2 w-full sm:w-auto">
                <div className="relative flex-1 sm:w-64">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-sm transition-all"
                  />
                </div>
                <button type="submit" className="btn-primary text-sm py-3 px-5 whitespace-nowrap">
                  Subscribe
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-accent-600 flex items-center justify-center shadow-lg">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                Opsi<span className="gradient-text">flo</span>
              </span>
            </a>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              The AI Operating System for Professionals. Optimize your career, scale your impact.
            </p>

            {/* Social links */}
            <div className="flex gap-3">
              {social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-500 hover:text-white hover:border-gray-600 hover:bg-gray-800 transition-all duration-200"
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="font-semibold text-white text-sm mb-4">{category}</h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Opsiflo. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <a href="#" className="hover:text-gray-300 transition-colors">Privacy</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Terms</a>
              <a href="mailto:hello@opsiflo.com" className="hover:text-gray-300 transition-colors">
                hello@opsiflo.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
