'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, X, Minus } from 'lucide-react';

const features = [
  { name: 'AI-Powered Optimization', opsiflo: true, competitor1: false, competitor2: 'partial' },
  { name: 'ATS Resume Scanning', opsiflo: true, competitor1: true, competitor2: false },
  { name: 'LinkedIn AI Content', opsiflo: true, competitor1: false, competitor2: false },
  { name: 'Email Campaign Builder', opsiflo: true, competitor1: false, competitor2: true },
  { name: 'Done-For-You Services', opsiflo: true, competitor1: false, competitor2: false },
  { name: 'Real-time Analytics', opsiflo: true, competitor1: 'partial', competitor2: 'partial' },
  { name: 'Free Tier Available', opsiflo: true, competitor1: true, competitor2: false },
  { name: 'Multi-product Platform', opsiflo: true, competitor1: false, competitor2: false },
  { name: 'Priority Support', opsiflo: true, competitor1: false, competitor2: true },
  { name: 'Custom Integrations', opsiflo: true, competitor1: false, competitor2: false },
];

const columns = [
  { key: 'opsiflo', label: 'Opsiflo', highlight: true, price: 'From $0' },
  { key: 'competitor1', label: 'Competitor A', highlight: false, price: '$49/mo' },
  { key: 'competitor2', label: 'Competitor B', highlight: false, price: '$79/mo' },
];

function FeatureCell({ value }: { value: boolean | string }) {
  if (value === true) {
    return (
      <div className="flex justify-center">
        <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
          <Check className="w-3.5 h-3.5 text-white" />
        </div>
      </div>
    );
  }
  if (value === false) {
    return (
      <div className="flex justify-center">
        <div className="w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
          <X className="w-3.5 h-3.5 text-gray-400" />
        </div>
      </div>
    );
  }
  return (
    <div className="flex justify-center">
      <div className="w-6 h-6 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center">
        <Minus className="w-3.5 h-3.5 text-yellow-500" />
      </div>
    </div>
  );
}

export default function ComparisonTable() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="comparison" className="section-padding bg-gray-50 dark:bg-gray-900/50">
      <div className="container-max" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 dark:bg-brand-950/50 border border-brand-200 dark:border-brand-800/50 text-brand-700 dark:text-brand-300 text-sm font-medium mb-4">
            Competitive Analysis
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">
            Why Choose{' '}
            <span className="gradient-text">Opsiflo?</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            See how Opsiflo compares to alternatives. One platform, all the tools you need.
          </p>
        </motion.div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="overflow-x-auto rounded-2xl border border-gray-200 dark:border-gray-800 shadow-xl"
        >
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left p-6 bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400 font-medium text-sm w-1/2">
                  Feature
                </th>
                {columns.map((col) => (
                  <th
                    key={col.key}
                    className={`p-6 text-center ${
                      col.highlight
                        ? 'bg-gradient-to-b from-brand-600 to-brand-700 text-white'
                        : 'bg-white dark:bg-gray-900 text-gray-900 dark:text-white'
                    }`}
                  >
                    <div className="font-bold text-base mb-1">{col.label}</div>
                    <div className={`text-sm ${col.highlight ? 'text-brand-200' : 'text-gray-500 dark:text-gray-400'}`}>
                      {col.price}
                    </div>
                    {col.highlight && (
                      <div className="mt-2 inline-block px-2 py-0.5 bg-white/20 rounded-full text-xs font-medium">
                        Best Value
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature, i) => (
                <tr
                  key={feature.name}
                  className={`border-t border-gray-100 dark:border-gray-800 ${
                    i % 2 === 0 ? 'bg-white dark:bg-gray-900' : 'bg-gray-50/50 dark:bg-gray-900/50'
                  }`}
                >
                  <td className="p-5 text-sm font-medium text-gray-700 dark:text-gray-300">{feature.name}</td>
                  {columns.map((col) => (
                    <td
                      key={col.key}
                      className={`p-5 ${col.highlight ? 'bg-brand-50 dark:bg-brand-950/20' : ''}`}
                    >
                      <FeatureCell value={feature[col.key as keyof typeof feature] as boolean | string} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t border-gray-200 dark:border-gray-700">
                <td className="p-6 bg-white dark:bg-gray-900" />
                {columns.map((col) => (
                  <td
                    key={col.key}
                    className={`p-6 text-center ${
                      col.highlight ? 'bg-brand-50 dark:bg-brand-950/20' : 'bg-white dark:bg-gray-900'
                    }`}
                  >
                    <a
                      href="#products"
                      className={
                        col.highlight
                          ? 'btn-primary text-sm py-2.5 px-5'
                          : 'btn-secondary text-sm py-2.5 px-5 opacity-50 cursor-not-allowed pointer-events-none'
                      }
                    >
                      {col.highlight ? 'Get Started Free' : 'N/A'}
                    </a>
                  </td>
                ))}
              </tr>
            </tfoot>
          </table>
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-6 mt-8"
        >
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
              <Check className="w-3 h-3 text-white" />
            </div>
            Available
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <div className="w-5 h-5 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center">
              <Minus className="w-3 h-3 text-yellow-500" />
            </div>
            Partial / Limited
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <div className="w-5 h-5 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
              <X className="w-3 h-3 text-gray-400" />
            </div>
            Not Available
          </div>
        </motion.div>
      </div>
    </section>
  );
}
