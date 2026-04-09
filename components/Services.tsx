'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FileText, Linkedin, Mail, Clock, ArrowRight, CheckCircle, Send, X } from 'lucide-react';

const services = [
  {
    icon: FileText,
    gradient: 'from-blue-500 to-cyan-500',
    title: 'Resume Optimization',
    price: '$399',
    turnaround: '2-week turnaround',
    description: 'Done-for-you professional resume written by our career experts, optimized for your target role and industry.',
    includes: [
      'Discovery call with career expert',
      'ATS-optimized resume (2 versions)',
      'Cover letter template',
      'LinkedIn headline & summary',
      '2 rounds of revisions',
    ],
  },
  {
    icon: Linkedin,
    gradient: 'from-violet-500 to-purple-600',
    title: 'LinkedIn Content',
    price: '$599',
    turnaround: '30 days of content',
    description: 'A full month of strategic LinkedIn content crafted by our experts to grow your audience and generate opportunities.',
    includes: [
      '30 posts written & scheduled',
      'Profile optimization audit',
      'Engagement strategy guide',
      'Hashtag research & strategy',
      'Monthly performance report',
    ],
  },
  {
    icon: Mail,
    gradient: 'from-pink-500 to-rose-500',
    title: 'Email Campaign',
    price: '$599',
    turnaround: '5 templates ready',
    description: 'High-converting email sequences written by our copywriters, ready to deploy for your outreach or marketing goals.',
    includes: [
      '5 custom email templates',
      'Subject line A/B variants',
      'Personalization variables setup',
      'Follow-up sequence (3 emails)',
      'Analytics tracking setup',
    ],
  },
];

export default function Services() {
  const [showForm, setShowForm] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Supabase integration would go here
    setSubmitted(true);
    setTimeout(() => {
      setShowForm(false);
      setSubmitted(false);
      setFormData({ name: '', email: '', service: '', message: '' });
    }, 3000);
  };

  const openForm = (service: string) => {
    setSelectedService(service);
    setFormData(d => ({ ...d, service }));
    setShowForm(true);
  };

  return (
    <section id="services" className="section-padding bg-white dark:bg-gray-950">
      <div className="container-max" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-50 dark:bg-accent-950/50 border border-accent-200 dark:border-accent-800/50 text-accent-700 dark:text-accent-300 text-sm font-medium mb-4">
            Done-For-You Services
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">
            Need{' '}
            <span className="gradient-text">Done-For-You</span>{' '}
            Service?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Let our experts handle it. Professional execution, guaranteed results, zero stress.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group card p-8 hover:-translate-y-2"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.gradient} mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{service.title}</h3>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl font-black text-gray-900 dark:text-white">{service.price}</span>
                <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                  <Clock className="w-4 h-4" />
                  {service.turnaround}
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">{service.description}</p>

              <ul className="space-y-2.5 mb-8">
                {service.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-gray-700 dark:text-gray-300">
                    <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-green-500" />
                    {item}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => openForm(service.title)}
                className={`w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-semibold text-sm text-white bg-gradient-to-r ${service.gradient} hover:opacity-90 hover:scale-105 transition-all duration-200 shadow-lg`}
              >
                Request Service
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* General CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <button
            onClick={() => openForm('')}
            className="btn-secondary text-base px-8 py-4"
          >
            Not sure which service? Contact us →
          </button>
        </motion.div>
      </div>

      {/* Contact Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setShowForm(false)} />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative w-full max-w-lg card-glass p-8 rounded-2xl z-10"
          >
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 p-2 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Request Received!</h3>
                <p className="text-gray-600 dark:text-gray-400">We&apos;ll get back to you within 24 hours.</p>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Request a Service</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm">
                  {selectedService ? `Requesting: ${selectedService}` : 'Tell us how we can help'}
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData(d => ({ ...d, name: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-sm transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData(d => ({ ...d, email: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-sm transition-all"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Service</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData(d => ({ ...d, service: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-sm transition-all"
                    >
                      <option value="">Select a service</option>
                      <option value="Resume Optimization">Resume Optimization — $399</option>
                      <option value="LinkedIn Content">LinkedIn Content — $599</option>
                      <option value="Email Campaign">Email Campaign — $599</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Message</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData(d => ({ ...d, message: e.target.value }))}
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-sm transition-all resize-none"
                      placeholder="Tell us about your goals..."
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full justify-center py-3.5">
                    <Send className="w-4 h-4" />
                    Send Request
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </section>
  );
}
