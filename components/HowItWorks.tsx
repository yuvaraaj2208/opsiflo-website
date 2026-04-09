'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Upload, Brain, Sparkles, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Upload,
    gradient: 'from-blue-500 to-cyan-500',
    title: 'Upload or Connect',
    description: 'Upload your resume, connect your LinkedIn profile, or paste your email list. Our platform accepts all formats.',
    details: ['PDF, DOCX, TXT formats', 'LinkedIn OAuth integration', 'CSV import for contacts'],
  },
  {
    number: '02',
    icon: Brain,
    gradient: 'from-violet-500 to-purple-600',
    title: 'AI Analyzes',
    description: 'Our AI engine scans your content against industry benchmarks, ATS patterns, and thousands of successful examples.',
    details: ['GPT-4 powered analysis', 'Industry-specific benchmarks', 'Real-time processing'],
  },
  {
    number: '03',
    icon: Sparkles,
    gradient: 'from-pink-500 to-rose-500',
    title: 'Get Results',
    description: 'Receive optimized content, actionable insights, and ready-to-use outputs — in minutes, not days.',
    details: ['Instant optimization', 'Downloadable outputs', 'Continuous improvement'],
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="how-it-works" className="section-padding bg-gray-50 dark:bg-gray-900/50 overflow-hidden">
      <div className="container-max" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 dark:bg-brand-950/50 border border-brand-200 dark:border-brand-800/50 text-brand-700 dark:text-brand-300 text-sm font-medium mb-4">
            Simple Process
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">
            How It{' '}
            <span className="gradient-text">Works</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            From raw input to polished output in three simple steps. No learning curve, no complexity.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-1/2 -translate-x-1/2 w-full max-w-3xl">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1, delay: 0.5, ease: 'easeInOut' }}
              className="h-0.5 bg-gradient-to-r from-blue-400 via-violet-400 to-pink-400 origin-left"
              style={{ marginLeft: '16.67%', width: '66.67%' }}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="relative text-center"
              >
                {/* Step number + icon */}
                <div className="relative inline-flex flex-col items-center mb-8">
                  {/* Animated ring */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                    className={`absolute inset-0 w-20 h-20 rounded-full border-2 border-dashed border-gradient-to-r ${step.gradient} opacity-30`}
                    style={{ borderColor: i === 0 ? '#6272f1' : i === 1 ? '#8b5cf6' : '#ec4899' }}
                  />
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-2xl`}>
                    <step.icon className="w-9 h-9 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gray-900 dark:bg-white flex items-center justify-center border-2 border-white dark:border-gray-900">
                    <span className="text-xs font-black text-white dark:text-gray-900">{i + 1}</span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm leading-relaxed max-w-xs mx-auto">{step.description}</p>

                {/* Detail chips */}
                <div className="flex flex-wrap justify-center gap-2">
                  {step.details.map((detail) => (
                    <span
                      key={detail}
                      className="px-3 py-1.5 text-xs font-medium bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 rounded-full"
                    >
                      {detail}
                    </span>
                  ))}
                </div>

                {/* Arrow (mobile) */}
                {i < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-8">
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center`}>
                      <ArrowRight className="w-4 h-4 text-white rotate-90" />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Demo CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="inline-block card-glass p-8 rounded-2xl max-w-2xl">
            <div className="flex justify-center gap-3 mb-4">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.9 + i * 0.1 }}
                  className="w-2 h-2 rounded-full bg-gradient-to-r from-brand-500 to-accent-500"
                />
              ))}
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Ready to try it yourself?</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">Start with the free tier — no credit card required.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="#products" className="btn-primary text-sm px-6 py-3">
                Get Started Free
              </a>
              <a href="#services" className="btn-secondary text-sm px-6 py-3">
                Book a Demo
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
