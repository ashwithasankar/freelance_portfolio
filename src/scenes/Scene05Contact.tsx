import { useState } from 'react';
import { Mail, Send, CheckCircle2, AlertCircle, ArrowUpRight, Github, Linkedin, MessageSquare, Loader2 } from 'lucide-react';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';
import { siteConfig } from '../data/siteConfig';

interface Scene05ContactProps {
  isDark: boolean;
}

export function Scene05Contact({ isDark }: Scene05ContactProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    projectType: 'Business website',
    projectDetails: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [submittedData, setSubmittedData] = useState<typeof formData | null>(null);

  const projectTypes = [
    'Business website',
    'E-commerce website',
    'Landing page',
    'Website redesign',
    'Custom web application',
    'Other',
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email format (e.g. name@domain.com).';
    }

    if (!formData.projectDetails.trim()) {
      newErrors.projectDetails = 'Please share a brief summary of your project or requirements.';
    } else if (formData.projectDetails.trim().length < 15) {
      newErrors.projectDetails = 'Please provide at least 15 characters of detail.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');

    setTimeout(() => {
      setStatus('success');
      setSubmittedData({ ...formData });

      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.8 },
          colors: isDark ? ['#B7F36B', '#1D2821', '#F3F5F1'] : ['#2E6B10', '#EDF2EA', '#111713'],
        });
      } catch {
        // Confetti optional
      }
    }, 900);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      projectType: 'Business website',
      projectDetails: '',
    });
    setErrors({});
    setStatus('idle');
    setSubmittedData(null);
  };

  return (
    <section
      id="contact"
      className="relative py-24 md:py-36 px-6 md:px-12 overflow-hidden bg-gradient-to-b from-transparent to-[var(--bg-surface-subtle)]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-2 h-2 rounded-full bg-[var(--accent-lime)] animate-pulse" />
              <span className="font-mono text-xs text-[var(--accent-lime)] tracking-widest uppercase">
                SCENE 05 &mdash; CONTACT
              </span>
              <div className="h-[1px] w-12 bg-[var(--border-subtle)]" />
              <span className="text-xs font-mono text-[var(--text-faint)] tracking-widest">
                FINAL SCENE &middot; INITIATION
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--text-primary)]">
              {siteConfig.contact.headline}
            </h2>
          </div>
          <p className="text-sm text-[var(--text-muted)] max-w-md font-light">
            {siteConfig.contact.subheadline}
          </p>
        </motion.div>

        {/* Form and Direct Contact Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Inquiries & Social Profiles */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-8 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] shadow-lg">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[var(--accent-lime)] block mb-3">
                DIRECT INQUIRY
              </span>
              <h3 className="font-serif text-2xl font-bold text-[var(--text-primary)]">
                Let's discuss your next milestone
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] font-light mt-3 leading-relaxed">
                Whether you have a finalized specification or an early-stage concept, I welcome deliberate conversations on architecture, technical feasibility, and timelines.
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href={siteConfig.links.email}
                  className="flex items-center gap-3 p-3.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)] hover:border-[var(--accent-lime)] transition-all duration-300 group"
                >
                  <div className="p-2 rounded-lg bg-[var(--accent-lime-dim)] text-[var(--accent-lime)] group-hover:scale-110 transition-transform">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[10px] font-mono text-[var(--text-faint)] block uppercase">
                      Primary Email
                    </span>
                    <span className="text-xs font-mono font-medium text-[var(--text-primary)] group-hover:text-[var(--accent-lime)] transition-colors truncate block">
                      {siteConfig.contact.email}
                    </span>
                  </div>
                </a>

                <div className="p-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)] text-xs font-mono text-[var(--text-muted)] space-y-2">
                  <div className="flex justify-between">
                    <span className="text-[var(--text-faint)]">Response Time:</span>
                    <span className="text-[var(--text-primary)]">{siteConfig.contact.responseTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--text-faint)]">Status:</span>
                    <span className="text-[var(--accent-lime)] font-semibold">Open to Contracts</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--text-faint)]">Location:</span>
                    <span className="text-[var(--text-primary)]">{siteConfig.contact.location}</span>
                  </div>
                </div>
              </div>

              {/* Personal Social Profile Links (GitHub & LinkedIn) */}
              <div className="mt-8 pt-6 border-t border-[var(--border-subtle)] flex items-center justify-between">
                <span className="text-xs font-mono text-[var(--text-faint)] uppercase tracking-wider">
                  PROFESSIONAL PROFILES
                </span>
                <div className="flex items-center gap-2.5">
                  <a
                    href={siteConfig.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full border border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--accent-lime)] hover:border-[var(--accent-lime)] hover:bg-[var(--accent-lime-dim)] transition-all duration-200 active:scale-95"
                    aria-label="Ashwitha's GitHub Profile"
                    title="Visit GitHub Profile"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={siteConfig.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full border border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--accent-lime)] hover:border-[var(--accent-lime)] hover:bg-[var(--accent-lime-dim)] transition-all duration-200 active:scale-95"
                    aria-label="Ashwitha's LinkedIn Profile"
                    title="Visit LinkedIn Profile"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="p-8 sm:p-10 rounded-2xl border border-[var(--border-prominent)] bg-[var(--bg-surface)] shadow-2xl relative">
              {status === 'success' && submittedData ? (
                <div className="py-8 text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-[var(--accent-lime-dim)] flex items-center justify-center text-[var(--accent-lime)] mb-5 animate-bounce">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
                    Inquiry Prepared Successfully
                  </h3>
                  <p className="mt-3 text-sm text-[var(--text-muted)] max-w-md font-light leading-relaxed">
                    Thank you, <strong className="text-[var(--text-primary)]">{submittedData.fullName}</strong>. Your inquiry for a <em>{submittedData.projectType}</em> has been compiled.
                  </p>

                  <div className="mt-6 p-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)] w-full text-left font-mono text-xs text-[var(--text-muted)] space-y-2">
                    <p><strong>From:</strong> {submittedData.fullName} ({submittedData.email})</p>
                    <p><strong>Scope:</strong> {submittedData.projectType}</p>
                    <p className="truncate"><strong>Details:</strong> {submittedData.projectDetails}</p>
                  </div>

                  <div className="mt-8 flex flex-col sm:flex-row gap-3 w-full">
                    <a
                      href={`mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(
                        `Project Inquiry: ${submittedData.projectType} from ${submittedData.fullName}`
                      )}&body=${encodeURIComponent(
                        `Hello Ashwitha,\n\nName: ${submittedData.fullName}\nEmail: ${submittedData.email}\nProject Type: ${submittedData.projectType}\n\nProject Details:\n${submittedData.projectDetails}`
                      )}`}
                      className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-mono text-xs uppercase tracking-widest font-semibold bg-[var(--accent-lime)] text-[#111713] hover:opacity-95 transition-opacity active:scale-95"
                    >
                      <span>Open in Email App</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="py-3.5 px-6 rounded-xl font-mono text-xs uppercase tracking-widest font-medium border border-[var(--border-subtle)] text-[var(--text-primary)] hover:border-[var(--accent-lime)] transition-colors cursor-pointer active:scale-95"
                    >
                      Submit Another
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-xs font-mono uppercase tracking-wider text-[var(--text-primary)] mb-2"
                    >
                      Full Name <span className="text-[var(--accent-lime)]">*</span>
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Alex Henderson"
                      className={`w-full px-4 py-3 rounded-xl border bg-[var(--bg-surface-elevated)] text-[var(--text-primary)] placeholder-[var(--text-faint)] focus:outline-none focus:border-[var(--accent-lime)] focus:ring-1 focus:ring-[var(--accent-lime)] transition-all duration-200 text-sm ${
                        errors.fullName ? 'border-red-500' : 'border-[var(--border-subtle)]'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  {/* Email Address */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-mono uppercase tracking-wider text-[var(--text-primary)] mb-2"
                    >
                      Email Address <span className="text-[var(--accent-lime)]">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@company.com"
                      className={`w-full px-4 py-3 rounded-xl border bg-[var(--bg-surface-elevated)] text-[var(--text-primary)] placeholder-[var(--text-faint)] focus:outline-none focus:border-[var(--accent-lime)] focus:ring-1 focus:ring-[var(--accent-lime)] transition-all duration-200 text-sm ${
                        errors.email ? 'border-red-500' : 'border-[var(--border-subtle)]'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  {/* Project Type */}
                  <div>
                    <label
                      htmlFor="projectType"
                      className="block text-xs font-mono uppercase tracking-wider text-[var(--text-primary)] mb-2"
                    >
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)] text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-lime)] focus:ring-1 focus:ring-[var(--accent-lime)] transition-all duration-200 text-sm cursor-pointer"
                    >
                      {projectTypes.map((type) => (
                        <option key={type} value={type} className="bg-[var(--bg-primary)]">
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label
                      htmlFor="projectDetails"
                      className="block text-xs font-mono uppercase tracking-wider text-[var(--text-primary)] mb-2"
                    >
                      Project Details <span className="text-[var(--accent-lime)]">*</span>
                    </label>
                    <textarea
                      id="projectDetails"
                      rows={4}
                      value={formData.projectDetails}
                      onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                      placeholder="Tell me about your goals, audience, target timeline, or desired deliverables..."
                      className={`w-full px-4 py-3 rounded-xl border bg-[var(--bg-surface-elevated)] text-[var(--text-primary)] placeholder-[var(--text-faint)] focus:outline-none focus:border-[var(--accent-lime)] focus:ring-1 focus:ring-[var(--accent-lime)] transition-all duration-200 text-sm resize-y min-h-[120px] ${
                        errors.projectDetails ? 'border-red-500' : 'border-[var(--border-subtle)]'
                      }`}
                    />
                    {errors.projectDetails && (
                      <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.projectDetails}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full py-4 px-6 rounded-xl font-mono text-xs uppercase tracking-[0.2em] font-semibold bg-[var(--accent-lime)] text-[#111713] hover:shadow-[0_0_25px_rgba(183,243,107,0.3)] hover:opacity-95 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50 active:scale-98"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Processing Inquiry...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Inquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        {/* Cinematic Clean Footer with Verified Profile Links */}
        <footer className="mt-24 pt-12 border-t border-[var(--border-subtle)] flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-mono text-[var(--text-faint)]">
          <div className="flex items-center gap-2">
            <span className="font-serif text-sm font-bold text-[var(--text-primary)]">
              ASHWITHA<span className="text-[var(--accent-lime)]">.</span>
            </span>
            <span>&middot;</span>
            <span>MERN STACK &middot; FREELANCE DEVELOPER</span>
          </div>

          {/* Social Profiles in Footer */}
          <div className="flex items-center gap-5">
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ashwitha's GitHub Profile"
              className="hover:text-[var(--accent-lime)] transition-colors flex items-center gap-1.5"
            >
              <Github className="w-3.5 h-3.5 text-[var(--accent-lime)]" />
              <span>GitHub</span>
            </a>
            <span>&middot;</span>
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ashwitha's LinkedIn Profile"
              className="hover:text-[var(--accent-lime)] transition-colors flex items-center gap-1.5"
            >
              <Linkedin className="w-3.5 h-3.5 text-[var(--accent-lime)]" />
              <span>LinkedIn</span>
            </a>
          </div>

          <div className="text-center md:text-right">
            <span>&copy; {new Date().getFullYear()} ASHWITHA. ALL RIGHTS RESERVED.</span>
          </div>
        </footer>
      </div>
    </section>
  );
}
