'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Search, ArrowRight, Clock, BookOpen } from 'lucide-react';

const categories = ['All', 'AI', 'Career', 'Hiring', 'LinkedIn', 'Resume', 'Email'];

const posts = [
  {
    id: 1,
    category: 'AI',
    title: 'How AI is Revolutionizing Resume Writing in 2025',
    excerpt: 'Discover how large language models are transforming the way job seekers craft compelling resumes that get past ATS filters.',
    readTime: '5 min read',
    date: 'Apr 8, 2025',
    gradient: 'from-blue-500 to-cyan-500',
    tag: 'Featured',
  },
  {
    id: 2,
    category: 'LinkedIn',
    title: '10 LinkedIn Post Templates That Get 10x More Engagement',
    excerpt: 'Stop guessing what to post on LinkedIn. These proven templates will dramatically increase your reach and connection requests.',
    readTime: '8 min read',
    date: 'Apr 5, 2025',
    gradient: 'from-violet-500 to-purple-600',
    tag: 'Popular',
  },
  {
    id: 3,
    category: 'Resume',
    title: 'The ATS Blacklist: 15 Words to Remove from Your Resume Today',
    excerpt: 'Many resumes get auto-rejected before a human ever sees them. Here are the exact words triggering ATS filters in 2025.',
    readTime: '6 min read',
    date: 'Apr 3, 2025',
    gradient: 'from-green-500 to-emerald-500',
    tag: 'Trending',
  },
  {
    id: 4,
    category: 'Email',
    title: 'Cold Email Subject Lines: 50 That Guaranteed 40%+ Open Rates',
    excerpt: 'A data-driven analysis of 100,000+ cold emails revealing exactly which subject lines get people to click open.',
    readTime: '10 min read',
    date: 'Apr 1, 2025',
    gradient: 'from-pink-500 to-rose-500',
    tag: null,
  },
  {
    id: 5,
    category: 'Hiring',
    title: 'How to Hire Top Talent in 2025: A Complete Framework',
    excerpt: 'The hiring landscape has changed dramatically. Here\'s how forward-thinking companies are building elite teams faster.',
    readTime: '12 min read',
    date: 'Mar 28, 2025',
    gradient: 'from-orange-500 to-amber-500',
    tag: null,
  },
  {
    id: 6,
    category: 'Career',
    title: 'From $60K to $150K: The Career Pivot Playbook',
    excerpt: 'Real stories and concrete strategies from professionals who dramatically increased their income through strategic career moves.',
    readTime: '9 min read',
    date: 'Mar 25, 2025',
    gradient: 'from-teal-500 to-cyan-500',
    tag: 'New',
  },
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const filteredPosts = posts.filter((post) => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch =
      searchQuery === '' ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="blog" className="section-padding bg-white dark:bg-gray-950">
      <div className="container-max" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 dark:bg-brand-950/50 border border-brand-200 dark:border-brand-800/50 text-brand-700 dark:text-brand-300 text-sm font-medium mb-4">
            <BookOpen className="w-4 h-4" />
            Learning Center
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">
            Insights &{' '}
            <span className="gradient-text">Resources</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Expert strategies, proven playbooks, and AI insights to accelerate your professional growth.
          </p>
        </motion.div>

        {/* Search + Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 mb-10"
        >
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-sm transition-all"
            />
          </div>

          {/* Categories */}
          <div className="flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-brand-600 to-accent-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Posts grid */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-20">
            <BookOpen className="w-12 h-12 text-gray-300 dark:text-gray-700 mx-auto mb-4" />
            <p className="text-gray-500 dark:text-gray-400">No articles found. Try a different search or category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="group card overflow-hidden hover:-translate-y-2 cursor-pointer"
              >
                {/* Color strip + category */}
                <div className={`h-1.5 bg-gradient-to-r ${post.gradient}`} />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 text-xs font-bold rounded-full bg-gradient-to-r ${post.gradient} text-white`}>
                      {post.category}
                    </span>
                    {post.tag && (
                      <span className="px-2 py-0.5 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full">
                        {post.tag}
                      </span>
                    )}
                  </div>

                  <h3 className="font-bold text-gray-900 dark:text-white mb-3 leading-snug group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors duration-200">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6 line-clamp-3">{post.excerpt}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs text-gray-400 dark:text-gray-500">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs font-medium text-brand-600 dark:text-brand-400 group-hover:gap-2 transition-all duration-200">
                      Read more
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        )}

        {/* View all */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-10"
        >
          <a href="#" className="btn-secondary text-sm px-8 py-3">
            View All Articles
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
