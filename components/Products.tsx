'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FileText, Linkedin, Mail, Brain, Check, ArrowRight, Star, Zap, ChevronRight } from 'lucide-react';

const products = [
  {
    id: 'mastery',
    icon: Brain,
    gradient: 'from-amber-500 to-orange-500',
    bgGradient: 'from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30',
    borderColor: 'border-amber-200 dark:border-amber-800/50',
    badge: 'New',
    step: '01',
    stepLabel: 'Learn',
    title: 'AI Mastery',
    description: 'Master AI with curated prompts, templates, and strategies. Build the skills that power every other Opsiflo tool.',
    features: [
      '500+ expert AI prompts',
      'Ready-to-use templates library',
      'Weekly AI tips & strategies',
    ],
    metrics: '5K+ members learning',
    freeFeatures: 'Basic prompts • 10 templates',
    proPrice: '$49/mo',
    proLabel: 'VIP',
    proFeatures: 'All prompts • Templates • Community',
    cta: 'Launch AI Mastery',
    ctaHref: 'https://mastery.opsiflo.com',
  },
  {
    id: 'resume',
    icon: FileText,
    gradient: 'from-blue-500 to-cyan-500',
    bgGradient: 'from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30',
    borderColor: 'border-blue-200 dark:border-blue-800/50',
    badge: 'Most Popular',
    step: '02',
    stepLabel: 'Build',
    title: 'Resume Optimizer',
    description: 'AI-powered resume optimization that gets you past ATS filters and into interviews. Tailored to your industry and role.',
    features: [
      'ATS keyword optimization',
      'Industry-specific formatting',
      'Achievement quantification AI',
    ],
    metrics: '10K+ resumes optimized',
    freeFeatures: 'Basic analysis • 1 resume',
    proPrice: '$29/mo',
    proLabel: 'Pro',
    proFeatures: 'Unlimited • Priority support • Templates',
    cta: 'Launch Resume Tool',
    ctaHref: 'https://resume.opsiflo.com',
  },
  {
    id: 'linkedin',
    icon: Linkedin,
    gradient: 'from-violet-500 to-purple-600',
    bgGradient: 'from-violet-50 to-purple-50 dark:from-violet-950/30 dark:to-purple-950/30',
    borderColor: 'border-violet-200 dark:border-violet-800/50',
    badge: 'New',
    step: '03',
    stepLabel: 'Grow',
    title: 'LinkedIn Growth',
    description: 'Transform your LinkedIn presence with AI-generated content, optimized headlines, and a proven growth strategy.',
    features: [
      'Profile score & optimization',
      'AI content calendar',
      'Connection strategy engine',
    ],
    metrics: '50K+ profiles grown',
    freeFeatures: 'Profile audit • 5 posts',
    proPrice: '$49/mo',
    proLabel: 'VIP',
    proFeatures: 'Unlimited posts • Analytics • DM templates',
    cta: 'Launch LinkedIn Tool',
    ctaHref: 'https://linkedin.opsiflo.com',
  },
  {
    id: 'email',
    icon: Mail,
    gradient: 'from-pink-500 to-rose-500',
    bgGradient: 'from-pink-50 to-rose-50 dark:from-pink-950/30 dark:to-rose-950/30',
    borderColor: 'border-pink-200 dark:border-pink-800/50',
    badge: 'Beta',
    step: '04',
    stepLabel: 'Scale',
    title: 'Email Campaign',
    description: 'AI-written email sequences that convert. From cold outreach to warm follow-ups — built for results.',
    features: [
      'Personalized cold emails at scale',
      'Follow-up sequence automation',
      'A/B testing & analytics',
    ],
    metrics: '100K+ emails sent',
    freeFeatures: '50 emails/mo • Basic templates',
    proPrice: '$39/mo',
    proLabel: 'Pro',
    proFeatures: 'Unlimited • Custom domains • CRM sync',
    cta: 'Launch Email Tool',
    ctaHref: 'https://email.opsiflo.com',
  },
];

const journeySteps = [
  { label: 'Learn AI', color: 'text-amber-600 dark:text-amber-400' },
  { label: 'Build Resume', color: 'text-blue-600 dark:text-blue-400' },
  { label: 'Grow LinkedIn', color: 'text-violet-600 dark:text-violet-400' },
  { label: 'Scale Outreach', color: 'text-pink-600 dark:text-pink-400' },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15, ease: 'easeOut' },
  }),
};

export default function Products() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="products" className="section-padding bg-gray-50 dark:bg-gray-900/50">
      <div className="container-max" ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 dark:bg-brand-950/50 border border-brand-200 dark:border-brand-800/50 text-brand-700 dark:text-brand-300 text-sm font-medium mb-4">
            <Zap className="w-4 h-4" />
            AI-Powered Tools
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">
            Four tools.{' '}
            <span className="gradient-text">One platform.</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Everything you need to learn AI, build your career, and scale your professional impact — all under one roof.
          </p>
        </motion.div>

        {/* Journey flow indicator */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center gap-1 flex-wrap mb-12"
        >
          {journeySteps.map((step, i) => (
            <div key={step.label} className="flex items-center gap-1">
              <span className={`text-sm font-semibold ${step.color}`}>{step.label}</span>
              {i < journeySteps.length - 1 && (
                <ChevronRight className="w-4 h-4 text-gray-400 dark:text-gray-600" />
              )}
            </div>
          ))}
        </motion.div>

        {/* Products grid — 2 col on tablet, 4 col on xl desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              custom={i}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              variants={cardVariants}
              className="group relative"
            >
              <div className={`h-full rounded-2xl border ${product.borderColor} bg-gradient-to-br ${product.bgGradient} overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}>

                {/* Card header */}
                <div className="p-6 pb-4">

                  {/* Icon + step number + badge */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="flex items-center gap-2.5">
                      <div className={`p-2.5 rounded-xl bg-gradient-to-br ${product.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <product.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-xs font-bold text-gray-400 dark:text-gray-500 tracking-widest">
                        {product.step}
                      </span>
                    </div>
                    <span className={`px-2.5 py-1 text-xs font-bold rounded-full bg-gradient-to-r ${product.gradient} text-white`}>
                      {product.badge}
                    </span>
                  </div>

                  {/* Step label */}
                  <div className="mb-3">
                    <span className={`inline-block px-2.5 py-0.5 text-xs font-semibold rounded-full bg-gradient-to-r ${product.gradient} text-white/90 uppercase tracking-wide`}>
                      {product.stepLabel}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{product.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-5">{product.description}</p>

                  {/* Features */}
                  <ul className="space-y-2.5 mb-5">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2.5 text-sm text-gray-700 dark:text-gray-300">
                        <div className={`flex-shrink-0 w-4 h-4 rounded-full bg-gradient-to-br ${product.gradient} flex items-center justify-center`}>
                          <Check className="w-2.5 h-2.5 text-white" />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Metrics */}
                  <div className="flex items-center gap-2 px-3 py-2 bg-white/60 dark:bg-gray-900/40 rounded-lg border border-white/40 dark:border-gray-700/40">
                    <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                    <span className="text-xs font-semibold text-gray-900 dark:text-white">{product.metrics}</span>
                  </div>
                </div>

                {/* Pricing */}
                <div className="px-6 pb-6 space-y-2.5">

                  {/* Free tier */}
                  <div className="p-3.5 bg-white/50 dark:bg-gray-900/40 rounded-xl border border-white/60 dark:border-gray-700/30">
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="text-sm font-semibold text-gray-900 dark:text-white">Free</span>
                      <span className="text-base font-black text-gray-900 dark:text-white">$0</span>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{product.freeFeatures}</p>
                  </div>

                  {/* Pro tier */}
                  <div className={`p-3.5 bg-gradient-to-br ${product.gradient} rounded-xl`}>
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="text-sm font-semibold text-white">{product.proLabel}</span>
                      <span className="text-base font-black text-white">{product.proPrice}</span>
                    </div>
                    <p className="text-xs text-white/80">{product.proFeatures}</p>
                  </div>

                  {/* CTA */}
                  <a
                    href={product.ctaHref}
                    className="flex items-center justify-center gap-2 w-full py-3 px-5 rounded-xl font-semibold text-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 group/btn"
                  >
                    {product.cta}
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform duration-200" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bundle nudge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Want all four?{' '}
            <a
              href="#pricing"
              className="font-semibold text-gray-900 dark:text-white underline underline-offset-4 hover:no-underline transition-all duration-200"
            >
              See bundle pricing — save 40%
            </a>
          </p>
        </motion.div>

      </div>
    </section>
  );
}
