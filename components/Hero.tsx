'use client';

import { motion } from 'framer-motion';
import { ArrowRight, FileText, Linkedin, Mail, Sparkles, TrendingUp, Users } from 'lucide-react';
import { useEffect, useRef } from 'react';

const stats = [
  { icon: FileText, value: '10K+', label: 'Resumes Optimized', color: 'from-blue-500 to-cyan-500' },
  { icon: TrendingUp, value: '50K+', label: 'Profiles Grown', color: 'from-violet-500 to-purple-500' },
  { icon: Mail, value: '100K+', label: 'Emails Sent', color: 'from-pink-500 to-rose-500' },
];

const products = [
  { label: 'Resume Tool', href: '#products', icon: FileText, color: 'from-blue-500 to-cyan-500' },
  { label: 'LinkedIn Tool', href: '#products', icon: Linkedin, color: 'from-violet-500 to-purple-500' },
  { label: 'Email Tool', href: '#products', icon: Mail, color: 'from-pink-500 to-rose-500' },
];

function Particle({ style }: { style: React.CSSProperties }) {
  return (
    <div
      className="absolute rounded-full opacity-20 dark:opacity-30 animate-float"
      style={style}
    />
  );
}

export default function Hero() {
  const particles = [
    { width: 80, height: 80, top: '10%', left: '5%', background: 'radial-gradient(circle, #6272f1, transparent)', animationDelay: '0s' },
    { width: 60, height: 60, top: '20%', right: '10%', background: 'radial-gradient(circle, #d946ef, transparent)', animationDelay: '1s' },
    { width: 100, height: 100, bottom: '30%', left: '15%', background: 'radial-gradient(circle, #6272f1, transparent)', animationDelay: '2s' },
    { width: 50, height: 50, top: '60%', right: '20%', background: 'radial-gradient(circle, #e879f9, transparent)', animationDelay: '1.5s' },
    { width: 120, height: 120, bottom: '10%', right: '5%', background: 'radial-gradient(circle, #8196f8, transparent)', animationDelay: '0.5s' },
    { width: 40, height: 40, top: '40%', left: '8%', background: 'radial-gradient(circle, #f0abfc, transparent)', animationDelay: '3s' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-gray-950 pt-16">
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-white to-accent-50 dark:from-gray-950 dark:via-gray-900 dark:to-brand-950/30" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-brand-500/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-accent-500/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tl from-brand-500/10 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Particles */}
      {particles.map((p, i) => (
        <Particle key={i} style={{ ...p, position: 'absolute' } as React.CSSProperties} />
      ))}

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.02] dark:opacity-[0.05]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 dark:bg-brand-950/50 border border-brand-200 dark:border-brand-800/50 text-brand-700 dark:text-brand-300 text-sm font-medium mb-8"
        >
          <Sparkles className="w-4 h-4" />
          AI-Powered Professional Tools
          <span className="px-2 py-0.5 bg-brand-100 dark:bg-brand-900 rounded-full text-xs">New</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight text-gray-900 dark:text-white text-balance leading-[1.05] mb-6"
        >
          The AI{' '}
          <span className="gradient-text">Operating System</span>
          <br />
          for Professionals
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-10 text-balance"
        >
          Optimize your <span className="text-gray-900 dark:text-white font-semibold">Resume</span>.{' '}
          Grow your <span className="text-gray-900 dark:text-white font-semibold">LinkedIn</span>.{' '}
          Scale your <span className="text-gray-900 dark:text-white font-semibold">Hiring</span>.
        </motion.p>

        {/* Product buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {products.map((product) => (
            <a
              key={product.label}
              href={product.href}
              className="group flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-brand-400 dark:hover:border-brand-600 hover:text-brand-600 dark:hover:text-brand-400 transition-all duration-200 hover:shadow-lg hover:scale-105 shadow-sm"
            >
              <product.icon className="w-4 h-4" />
              {product.label}
            </a>
          ))}
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          <a href="#products" className="btn-primary text-base px-8 py-4 shadow-2xl shadow-brand-500/30">
            Start Free Trial
            <ArrowRight className="w-5 h-5" />
          </a>
          <a href="#services" className="btn-secondary text-base px-8 py-4">
            View Services
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
              className="card-glass p-6 rounded-2xl text-center group hover:scale-105 transition-all duration-300"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.color} mb-3 group-hover:scale-110 transition-transform duration-200`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-black text-gray-900 dark:text-white">{stat.value}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Live users badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-10 inline-flex items-center gap-2 px-5 py-2.5 bg-white/80 dark:bg-gray-900/80 backdrop-blur border border-gray-200 dark:border-gray-700 rounded-full shadow-lg"
        >
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-7 h-7 rounded-full border-2 border-white dark:border-gray-900 bg-gradient-to-br from-brand-400 to-accent-400"
              />
            ))}
          </div>
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            <span className="font-bold text-gray-900 dark:text-white">10,456</span> professionals using Opsiflo
          </span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-400 dark:text-gray-600 font-medium uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-5 h-8 border-2 border-gray-300 dark:border-gray-700 rounded-full flex justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-gray-400 dark:bg-gray-600 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
