'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Calendar, Sparkles, Zap } from 'lucide-react';

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-padding bg-white dark:bg-gray-950 overflow-hidden">
      <div className="container-max" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-600 via-brand-700 to-accent-700" />
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl" />
          </div>

          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }} />

          {/* Floating orbs */}
          {[
            { size: 80, top: '10%', left: '5%', delay: '0s' },
            { size: 60, top: '70%', right: '10%', delay: '1s' },
            { size: 100, bottom: '15%', left: '20%', delay: '2s' },
          ].map((orb, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/10 animate-float"
              style={{
                width: orb.size,
                height: orb.size,
                top: orb.top,
                left: orb.left,
                right: (orb as any).right,
                bottom: (orb as any).bottom,
                animationDelay: orb.delay,
              }}
            />
          ))}

          {/* Content */}
          <div className="relative text-center py-20 px-6 lg:px-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 border border-white/25 text-white text-sm font-medium mb-8"
            >
              <Sparkles className="w-4 h-4" />
              Join 60,000+ professionals
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight tracking-tight"
            >
              Ready to Transform
              <br />
              Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                Career?
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10"
            >
              Start with our free tools today, or book a personalized demo to see how Opsiflo can work for your specific goals.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <a
                href="#products"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-brand-700 bg-white hover:bg-gray-50 transition-all duration-200 hover:scale-105 shadow-2xl text-base"
              >
                <Zap className="w-5 h-5" />
                Start Free — No Card Needed
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white bg-white/15 border border-white/30 hover:bg-white/20 transition-all duration-200 hover:scale-105 backdrop-blur text-base"
              >
                <Calendar className="w-5 h-5" />
                Book a Demo
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap justify-center gap-6 mt-12 text-white/60 text-sm"
            >
              {[
                'No credit card required',
                'Cancel anytime',
                '7-day money-back guarantee',
                'GDPR compliant',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  {item}
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
