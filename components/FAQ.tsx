'use client';

import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    q: 'What is Opsiflo and how does it work?',
    a: 'Opsiflo is an AI-powered professional platform that helps you optimize your resume, grow your LinkedIn presence, and scale your email campaigns. Our AI analyzes your content, compares it against industry benchmarks, and provides optimized outputs in minutes. Simply upload your content, let the AI analyze it, and download your enhanced results.',
  },
  {
    q: 'Is there a free plan available?',
    a: 'Yes! All three of our tools — Resume Optimizer, LinkedIn Growth, and Email Campaign — offer a free tier. The free plans include basic features to help you get started. You can upgrade to Pro or VIP plans for unlimited access, priority support, and advanced features.',
  },
  {
    q: 'How does the AI resume optimization work?',
    a: 'Our AI scans your resume against 50+ ATS (Applicant Tracking System) patterns, analyzes keyword density for your target role, checks formatting compliance, and suggests achievement-based language improvements. The optimized resume is tailored to your specific industry and job target, dramatically increasing your chances of getting past automated screening.',
  },
  {
    q: 'What results can I expect from the LinkedIn tool?',
    a: 'Results vary, but our users typically see 2-5x more profile views within 30 days, significant follower growth (average 200-500+ new followers/month on the Pro plan), and increased connection acceptance rates. The AI generates content optimized for LinkedIn\'s algorithm, maximizing organic reach.',
  },
  {
    q: 'What is the Done-For-You service and how is it different from the tools?',
    a: 'Our Done-For-You services are handled by human experts (career coaches, professional writers, LinkedIn strategists) who use our AI tools plus their expertise to deliver premium results. Unlike the self-service tools, DFY services include strategy calls, multiple revisions, and a completely done-for-you experience. They\'re ideal for busy professionals who want guaranteed results without the time investment.',
  },
  {
    q: 'How long does the Done-For-You service take?',
    a: 'Resume Optimization takes approximately 2 weeks (including the discovery call, 2 writing rounds, and revisions). LinkedIn Content delivers 30 days of content within the first week. Email Campaign delivers 5 templates within 5 business days. Rush delivery is available for an additional fee.',
  },
  {
    q: 'Is my data secure? Do you store my resume or personal information?',
    a: 'We take data security very seriously. Your documents are encrypted in transit and at rest. We do not sell or share your personal information with third parties. You can request deletion of your data at any time. We comply with GDPR, CCPA, and industry-standard security practices.',
  },
  {
    q: 'Can I cancel my subscription at any time?',
    a: 'Absolutely. All Pro and VIP subscriptions are month-to-month with no long-term contracts. You can cancel anytime from your account settings, and you\'ll retain access until the end of your billing period. We don\'t believe in trapping customers — if Opsiflo isn\'t delivering value, you should be free to leave.',
  },
  {
    q: 'Do you offer refunds?',
    a: 'For subscription plans, we offer a 7-day money-back guarantee if you\'re not satisfied. For Done-For-You services, we offer unlimited revisions until you\'re happy with the deliverable. If we genuinely cannot meet your expectations after revisions, we\'ll issue a partial or full refund at our discretion.',
  },
  {
    q: 'How do I get started?',
    a: 'Getting started is easy! Click "Start Free Trial" at the top of the page, create your free account, and choose the tool you want to use first. No credit card required for the free tier. If you\'d like a personalized demo or have questions about which plan is right for you, click "Book Demo" and our team will be happy to help.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="section-padding bg-gray-50 dark:bg-gray-900/50">
      <div className="container-max" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 dark:bg-brand-950/50 border border-brand-200 dark:border-brand-800/50 text-brand-700 dark:text-brand-300 text-sm font-medium mb-4">
            <HelpCircle className="w-4 h-4" />
            Common Questions
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">
            Frequently Asked{' '}
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Everything you need to know about Opsiflo. Can&apos;t find your answer? Chat with our team.
          </p>
        </motion.div>

        {/* FAQ list */}
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="card overflow-hidden"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between p-6 text-left group"
                aria-expanded={openIndex === i}
              >
                <span className="font-semibold text-gray-900 dark:text-white pr-4 text-sm sm:text-base leading-snug group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors duration-200">
                  {faq.q}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center group-hover:bg-brand-100 dark:group-hover:bg-brand-900/30 transition-colors duration-200"
                >
                  <ChevronDown className="w-4 h-4 text-gray-500 dark:text-gray-400 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors duration-200" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <div className="pt-2 border-t border-gray-100 dark:border-gray-800">
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mt-4">{faq.a}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Still have questions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <div className="inline-block card-glass p-8 rounded-2xl">
            <HelpCircle className="w-10 h-10 text-brand-500 mx-auto mb-3" />
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">Still have questions?</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-5">Our team is here to help you succeed.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="mailto:hello@opsiflo.com" className="btn-primary text-sm py-2.5 px-6">
                Email Us
              </a>
              <a href="#" className="btn-secondary text-sm py-2.5 px-6">
                Live Chat
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
