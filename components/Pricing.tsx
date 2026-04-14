'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Brain, FileText, Linkedin, Mail, Check, Zap, ArrowRight, Star } from 'lucide-react';

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
  }),
};

const plans = [
  {
    id: 'mastery',
    icon: Brain,
    name: 'AI Mastery',
    gradient: 'from-amber-500 to-orange-500',
    border: 'border-amber-800/50',
    glow: 'shadow-amber-500/20',
    monthlyPrice: 49,
    annualPrice: 39,
    label: 'VIP',
    description: 'Master AI skills with prompts, templates and strategies',
    features: [
      '500+ expert AI prompts',
      'Ready-to-use templates library',
      'Weekly AI tips & strategies',
      'Private community access',
      'New content every week',
    ],
    cta: 'Get AI Mastery',
    href: 'https://mastery.opsiflo.com',
    freeFeatures: 'Basic prompts • 10 templates',
  },
  {
    id: 'resume',
    icon: FileText,
    name: 'Resume Optimizer',
    gradient: 'from-blue-500 to-cyan-500',
    border: 'border-blue-800/50',
    glow: 'shadow-blue-500/20',
    monthlyPrice: 29,
    annualPrice: 23,
    label: 'Pro',
    description: 'Beat ATS filters and land more interviews',
    features: [
      'Unlimited resume optimization',
      'ATS keyword analysis',
      'Industry-specific formatting',
      'Achievement quantification AI',
      'Priority support',
    ],
    cta: 'Get Resume Pro',
    href: 'https://resume.opsiflo.com',
    freeFeatures: 'Basic analysis • 1 resume',
  },
  {
    id: 'linkedin',
    icon: Linkedin,
    name: 'LinkedIn Growth',
    gradient: 'from-violet-500 to-purple-600',
    border: 'border-violet-800/50',
    glow: 'shadow-violet-500/20',
    monthlyPrice: 49,
    annualPrice: 39,
    label: 'VIP',
    description: 'Grow your LinkedIn presence with AI content',
    features: [
      'Unlimited AI post generation',
      'Profile score & optimization',
      'AI content calendar',
      'Connection strategy engine',
      'Analytics & DM templates',
    ],
    cta: 'Get LinkedIn VIP',
    href: 'https://linkedin.opsiflo.com',
    freeFeatures: 'Profile audit • 5 posts',
  },
  {
    id: 'email',
    icon: Mail,
    name: 'Email Campaign',
    gradient: 'from-pink-500 to-rose-500',
    border: 'border-pink-800/50',
    glow: 'shadow-pink-500/20',
    monthlyPrice: 39,
    annualPrice: 31,
    label: 'Pro',
    description: 'AI email sequences that get replies',
    features: [
      'Unlimited email campaigns',
      'Personalized cold emails at scale',
      'Follow-up sequence automation',
      'A/B testing & analytics',
      'Custom domains • CRM sync',
    ],
    cta: 'Get Email Pro',
    href: 'https://email.opsiflo.com',
    freeFeatures: '50 emails/mo • Basic templates',
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const bundleMonthly = 99;
  const bundleAnnual = 79;
  const bundlePrice = annual ? bundleAnnual : bundleMonthly;
  const totalIndividual = annual
    ? plans.reduce((s, p) => s + p.annualPrice, 0)
    : plans.reduce((s, p) => s + p.monthlyPrice, 0);
  const savings = totalIndividual - bundlePrice;

  return (
    <section id="pricing" className="section-padding bg-gray-950">
      <div className="container-max" ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-950/50 border border-brand-800/50 text-brand-300 text-sm font-medium mb-4">
            <Zap className="w-4 h-4" />
            Simple, transparent pricing
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 tracking-tight">
            Invest in your{' '}
            <span className="gradient-text">professional future</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Start free on any tool. Upgrade when you're ready. Save big with the bundle.
          </p>

          {/* Monthly / Annual toggle */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <span className={`text-sm font-medium ${!annual ? 'text-white' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setAnnual(!annual)}
              className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${annual ? 'bg-brand-500' : 'bg-gray-700'}`}
            >
              <span
                className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform duration-300 ${annual ? 'translate-x-7' : 'translate-x-1'}`}
              />
            </button>
            <span className={`text-sm font-medium ${annual ? 'text-white' : 'text-gray-500'}`}>
              Annual
              <span className="ml-2 px-2 py-0.5 text-xs font-bold rounded-full bg-green-500/20 text-green-400 border border-green-500/30">
                Save 20%
              </span>
            </span>
          </div>
        </motion.div>

        {/* Bundle card — featured at top */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-10"
        >
          <div className="relative rounded-2xl border-2 border-brand-500/60 bg-gradient-to-br from-brand-950/60 via-gray-900 to-accent-950/40 overflow-hidden shadow-2xl shadow-brand-500/10">
            {/* Top banner */}
            <div className="bg-gradient-to-r from-brand-500 to-accent-600 px-6 py-2.5 flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-white fill-white" />
                <span className="text-sm font-bold text-white">All Access Bundle — Best Value</span>
              </div>
              <span className="text-xs font-semibold text-white/90 bg-white/20 px-3 py-1 rounded-full">
                Save ${savings}/mo vs buying separately
              </span>
            </div>

            <div className="p-8">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
                {/* Left: what's included */}
                <div className="flex-1">
                  <h3 className="text-2xl font-black text-white mb-2">All 4 Opsiflo Tools</h3>
                  <p className="text-gray-400 text-sm mb-6">
                    One login. Four powerful AI tools. Everything a professional needs.
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {plans.map((p) => (
                      <div
                        key={p.id}
                        className="flex items-center gap-2 px-3 py-2 rounded-xl bg-gray-900/60 border border-gray-800"
                      >
                        <div className={`p-1.5 rounded-lg bg-gradient-to-br ${p.gradient}`}>
                          <p.icon className="w-3.5 h-3.5 text-white" />
                        </div>
                        <span className="text-xs font-medium text-gray-300">{p.name}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {[
                      'All prompts & templates',
                      'Unlimited resumes',
                      'Unlimited LinkedIn posts',
                      'Unlimited email campaigns',
                      'Priority support',
                      'All future tools included',
                    ].map((f) => (
                      <div key={f} className="flex items-center gap-1.5 text-xs text-gray-300">
                        <div className="w-4 h-4 rounded-full bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center flex-shrink-0">
                          <Check className="w-2.5 h-2.5 text-white" />
                        </div>
                        {f}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: price + CTA */}
                <div className="lg:w-64 flex-shrink-0">
                  <div className="text-center lg:text-right">
                    <div className="text-sm text-gray-500 line-through mb-1">
                      ${totalIndividual}/mo individually
                    </div>
                    <div className="flex items-baseline gap-1 justify-center lg:justify-end">
                      <span className="text-5xl font-black text-white">${bundlePrice}</span>
                      <span className="text-gray-400 text-sm">/mo</span>
                    </div>
                    {annual && (
                      <div className="text-xs text-green-400 font-medium mt-1">
                        Billed ${bundleAnnual * 12}/year
                      </div>
                    )}
                    <a
                      href="https://opsiflo.com"
                      className="mt-4 flex items-center justify-center gap-2 w-full py-4 px-6 rounded-xl font-bold text-sm bg-gradient-to-r from-brand-500 to-accent-600 text-white hover:opacity-90 transition-all duration-200 shadow-lg shadow-brand-500/30 hover:scale-105"
                    >
                      Get All Access
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    <p className="text-xs text-gray-500 mt-2 text-center">
                      Free tier on all tools • Cancel anytime
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex items-center gap-4 mb-10"
        >
          <div className="flex-1 h-px bg-gray-800" />
          <span className="text-xs text-gray-600 font-medium uppercase tracking-widest">
            Or pick individual tools
          </span>
          <div className="flex-1 h-px bg-gray-800" />
        </motion.div>

        {/* Individual plans grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.id}
              custom={i}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              variants={cardVariants}
              className="group"
            >
              <div className={`h-full rounded-2xl border ${plan.border} bg-gray-900/60 overflow-hidden hover:shadow-xl hover:${plan.glow} transition-all duration-300 hover:-translate-y-1`}>

                {/* Header */}
                <div className="p-6 pb-4">
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`p-2.5 rounded-xl bg-gradient-to-br ${plan.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <plan.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                        {plan.label}
                      </div>
                      <div className="text-sm font-bold text-white">{plan.name}</div>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mb-1">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-black text-white">
                        ${annual ? plan.annualPrice : plan.monthlyPrice}
                      </span>
                      <span className="text-gray-500 text-sm">/mo</span>
                    </div>
                    {annual && (
                      <div className="text-xs text-green-400 font-medium">
                        Billed ${plan.annualPrice * 12}/year
                      </div>
                    )}
                  </div>
                  <p className="text-gray-500 text-xs leading-relaxed mb-5">{plan.description}</p>

                  {/* Free tier note */}
                  <div className="px-3 py-2 rounded-lg bg-gray-800/60 border border-gray-700/50 mb-5">
                    <span className="text-xs text-gray-500">
                      <span className="text-gray-300 font-medium">Free: </span>
                      {plan.freeFeatures}
                    </span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2.5">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm text-gray-400">
                        <div className={`flex-shrink-0 w-4 h-4 rounded-full bg-gradient-to-br ${plan.gradient} flex items-center justify-center mt-0.5`}>
                          <Check className="w-2.5 h-2.5 text-white" />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="px-6 pb-6">
                  <a
                    href={plan.href}
                    className={`flex items-center justify-center gap-2 w-full py-3 px-5 rounded-xl font-semibold text-sm bg-gradient-to-r ${plan.gradient} text-white hover:opacity-90 hover:scale-105 transition-all duration-200 shadow-lg`}
                  >
                    {plan.cta}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom trust line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center mt-12"
        >
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-green-400" />
              No credit card required to start
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-green-400" />
              Cancel anytime
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-green-400" />
              Free tier on every tool forever
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-green-400" />
              INR pricing available for India
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
