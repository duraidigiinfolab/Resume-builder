"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, FileText, Sparkles, Target, Download, Star } from "lucide-react";
import Link from "next/link";

const features = [
  {
    title: "AI Resume Writer",
    description: "Instantly rewrite your experience into high-impact, results-driven bullet points using the XYZ formula.",
    icon: Sparkles,
  },
  {
    title: "ATS Score Checker",
    description: "Get real-time feedback on your keyword match, formatting, and overall ATS compatibility.",
    icon: Target,
  },
  {
    title: "Modern Templates",
    description: "Choose from multiple professional, minimal, and creative templates designed to stand out.",
    icon: FileText,
  },
  {
    title: "One-Click PDF Export",
    description: "Download a perfectly formatted, clean PDF ready to be uploaded to any job application.",
    icon: Download,
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center overflow-hidden">
      {/* Navigation */}
      <nav className="w-full max-w-7xl px-6 py-6 flex justify-between items-center z-10 relative">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-outfit font-bold tracking-tight">DuraCV</span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/login" className="text-sm font-medium hover:text-brand-600 transition-colors">
            Log in
          </Link>
          <Link
            href="/builder"
            className="text-sm font-medium bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-4 py-2 rounded-full hover:scale-105 transition-transform"
          >
            Start Free
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="w-full flex-1 flex flex-col items-center justify-center text-center px-6 relative z-10 pt-20 pb-32">
        {/* Background Gradients */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-brand-500/20 dark:bg-brand-500/10 rounded-full blur-[120px] -z-10" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50/50 dark:bg-brand-900/30 border border-brand-200 dark:border-brand-800 text-brand-700 dark:text-brand-300 text-sm font-medium mb-8 backdrop-blur-sm"
        >
          <Sparkles className="w-4 h-4" />
          <span>Powered by Advanced AI</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-outfit font-extrabold tracking-tight max-w-4xl leading-tight md:leading-[1.1]"
        >
          Create <span className="text-gradient">ATS-Optimized</span> Resume in Minutes
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl font-light leading-relaxed"
        >
          Get more interviews with AI-powered resumes. DuraCV transforms your raw experience into high-impact, keyword-rich achievements.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <Link
            href="/builder"
            className="group flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 rounded-full font-medium text-lg transition-all hover:shadow-[0_0_40px_rgba(79,70,229,0.4)] hover:-translate-y-1"
          >
            Build Resume Free
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-12 flex items-center gap-4 text-sm text-zinc-500"
        >
          <div className="flex -space-x-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className={`w-8 h-8 rounded-full border-2 border-white dark:border-zinc-950 bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center z-[${5-i}]`}>
                <Star className="w-3 h-3 text-brand-500 fill-brand-500" />
              </div>
            ))}
          </div>
          <p>Used by <span className="font-semibold text-zinc-900 dark:text-white">10,000+</span> job seekers</p>
        </motion.div>
      </main>

      {/* Features Section */}
      <section className="w-full max-w-7xl px-6 py-24 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-outfit font-bold mb-4">Everything you need to land the job</h2>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto">Our AI handles the heavy lifting so you can focus on preparing for the interview.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={feature.title}
              className="glass-panel p-6 rounded-2xl flex flex-col gap-4 hover:border-brand-500/50 transition-colors"
            >
              <div className="w-12 h-12 bg-brand-100 dark:bg-brand-900/50 text-brand-600 dark:text-brand-400 rounded-xl flex items-center justify-center">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold font-outfit">{feature.title}</h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="w-full max-w-4xl mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-outfit font-bold mb-12">Simple, transparent pricing</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto text-left">
          
          {/* Free Tier */}
          <div className="glass-panel p-8 rounded-3xl flex flex-col">
            <h3 className="text-2xl font-outfit font-semibold mb-2">Free</h3>
            <p className="text-zinc-500 dark:text-zinc-400 mb-6">Perfect for testing the waters.</p>
            <div className="text-4xl font-bold mb-8">₹0</div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0" /><span>Limited templates</span></li>
              <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0" /><span>Basic ATS check</span></li>
              <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0" /><span>1 PDF download</span></li>
            </ul>
            <Link href="/builder" className="w-full py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 font-medium text-center hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors">
              Get Started Free
            </Link>
          </div>

          {/* Pro Tier */}
          <div className="bg-brand-600 text-white p-8 rounded-3xl flex flex-col relative shadow-[0_0_40px_rgba(79,70,229,0.3)]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-amber-200 to-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Launch Offer
            </div>
            <h3 className="text-2xl font-outfit font-semibold mb-2">Pro</h3>
            <p className="text-brand-100 mb-6">Unlock the full power of AI.</p>
            <div className="flex items-end gap-2 mb-8">
              <span className="text-4xl font-bold">₹99</span>
              <span className="text-brand-200 line-through text-lg pb-1">₹500</span>
              <span className="text-brand-200 pb-1">/ resume</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1 text-brand-50">
              <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-white shrink-0" /><span>Full template library</span></li>
              <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-white shrink-0" /><span>Unlimited AI rewriting</span></li>
              <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-white shrink-0" /><span>Deep ATS optimization</span></li>
              <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-white shrink-0" /><span>Unlimited PDF downloads</span></li>
            </ul>
            <Link href="/builder" className="w-full py-3 rounded-xl bg-white text-brand-600 font-bold text-center hover:bg-brand-50 transition-colors shadow-lg">
              Start Building Now
            </Link>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="w-full max-w-7xl px-6 py-12 border-t border-zinc-200 dark:border-zinc-800 text-center text-zinc-500 text-sm">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Sparkles className="w-4 h-4" />
          <span className="font-outfit font-semibold">DuraCV</span>
        </div>
        <p>© {new Date().getFullYear()} DuraCV. All rights reserved.</p>
      </footer>
    </div>
  );
}
