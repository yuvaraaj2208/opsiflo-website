'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Quote, TrendingUp, Users, Award } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Product Manager at Google',
    avatar: 'SC',
    avatarColor: 'from-blue-400 to-cyan-400',
    rating: 5,
    text: 'Opsiflo completely transformed my job search. The AI resume optimizer helped me get past ATS filters I\'d been failing for months. Landed 3 interviews in my first week!',
    product: 'Resume Optimizer',
    result: 'Landed role at Google',
  },
  {
    name: 'Marcus Johnson',
    role: 'Startup Founder',
    avatar: 'MJ',
    avatarColor: 'from-violet-400 to-purple-400',
    rating: 5,
    text: 'The LinkedIn content tool is absolutely incredible. My follower count went from 800 to 12,000 in 60 days. The AI-generated posts get more engagement than anything I\'ve written myself.',
    product: 'LinkedIn Growth',
    result: '+11,200 followers in 60 days',
  },
  {
    name: 'Priya Patel',
    role: 'Sales Director',
    avatar: 'PP',
    avatarColor: 'from-pink-400 to-rose-400',
    rating: 5,
    text: 'Our cold email response rate tripled after using Opsiflo\'s email campaign tool. The personalization at scale is something my team couldn\'t do manually. ROI is through the roof.',
    product: 'Email Campaign',
    result: '3x email response rate',
  },
  {
    name: 'David Kim',
    role: 'Tech Lead at Meta',
    avatar: 'DK',
    avatarColor: 'from-green-400 to-emerald-400',
    rating: 5,
    text: 'Switched careers from finance to tech with Opsiflo\'s help. The resume tool rewrote my experience in a way that resonated with tech recruiters. Got offers from 4 FAANG companies.',
    product: 'Resume Optimizer',
    result: '4 FAANG offers',
  },
  {
    name: 'Elena Rodriguez',
    role: 'Marketing Director',
    avatar: 'ER',
    avatarColor: 'from-orange-400 to-amber-400',
    rating: 5,
    text: 'The done-for-you LinkedIn service was worth every penny. 30 days of professional content, engagement strategy, and our company\'s LinkedIn followers grew by 40%. Exceptional quality.',
    product: 'LinkedIn Content Service',
    result: '+40% company followers',
  },
];

const metrics = [
  { icon: Users, value: '60K+', label: 'Happy Users', gradient: 'from-blue-500 to-cyan-500' },
  { icon: TrendingUp, value: '94%', label: 'Success Rate', gradient: 'from-violet-500 to-purple-500' },
  { icon: Star, value: '4.9/5', label: 'Average Rating', gradient: 'from-yellow-500 to-orange-500' },
  { icon: Award, value: '9/10', label: 'NPS Score', gradient: 'from-green-500 to-emerald-500' },
];

const logos = ['TechCorp', 'Nexus AI', 'CloudBase', 'ProHire', 'GrowthLab'];

export default function SocialProof() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="social-proof" className="section-padding bg-white dark:bg-gray-950 overflow-hidden">
      <div className="container-max" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-50 dark:bg-yellow-950/30 border border-yellow-200 dark:border-yellow-800/30 text-yellow-700 dark:text-yellow-400 text-sm font-medium mb-4">
            <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
            Real Results from Real Users
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">
            Trusted by{' '}
            <span className="gradient-text">60,000+</span>
            <br />Professionals
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Join thousands who&apos;ve transformed their careers and businesses with Opsiflo.
          </p>
        </motion.div>

        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
              className="card p-6 text-center group hover:-translate-y-1"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${metric.gradient} mb-3 group-hover:scale-110 transition-transform duration-300`}>
                <metric.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-black text-gray-900 dark:text-white mb-1">{metric.value}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">{metric.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {testimonials.slice(0, 3).map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              className="card p-6 hover:-translate-y-1 flex flex-col"
            >
              <Quote className="w-8 h-8 text-brand-400 mb-4 flex-shrink-0" />
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-6 flex-1">{testimonial.text}</p>

              {/* Product badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-50 dark:bg-brand-950/30 rounded-full text-xs font-medium text-brand-600 dark:text-brand-400 mb-4 w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
                {testimonial.product}
              </div>

              {/* Result */}
              <div className="px-3 py-2 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800/30 mb-4">
                <span className="text-xs font-bold text-green-700 dark:text-green-400">Result: {testimonial.result}</span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${testimonial.avatarColor} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-sm text-gray-900 dark:text-white">{testimonial.name}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{testimonial.role}</div>
                </div>
                <div className="ml-auto flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Remaining testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
          {testimonials.slice(3).map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
              className="card p-6 hover:-translate-y-1 flex flex-col"
            >
              <Quote className="w-7 h-7 text-brand-400 mb-3 flex-shrink-0" />
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-5 flex-1">{testimonial.text}</p>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-50 dark:bg-brand-950/30 rounded-full text-xs font-medium text-brand-600 dark:text-brand-400 mb-3 w-fit">
                {testimonial.product}
              </div>
              <div className="px-3 py-2 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800/30 mb-4">
                <span className="text-xs font-bold text-green-700 dark:text-green-400">Result: {testimonial.result}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${testimonial.avatarColor} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-sm text-gray-900 dark:text-white">{testimonial.name}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{testimonial.role}</div>
                </div>
                <div className="ml-auto flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Company logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-center"
        >
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-8 uppercase tracking-widest">
            Trusted by professionals at
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {logos.map((logo, i) => (
              <motion.div
                key={logo}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 1 + i * 0.1 }}
                className="px-6 py-3 bg-gray-100 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 font-bold text-sm hover:bg-gray-200 dark:hover:bg-gray-800 transition-all cursor-default"
              >
                {logo}
              </motion.div>
            ))}
          </div>

          {/* NPS badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="inline-flex items-center gap-3 mt-10 px-6 py-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border border-green-200 dark:border-green-800/30 rounded-2xl"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-lg">
              <span className="text-white font-black text-sm">9/10</span>
            </div>
            <div className="text-left">
              <div className="font-bold text-gray-900 dark:text-white text-sm">Net Promoter Score</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">World-class customer satisfaction</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
