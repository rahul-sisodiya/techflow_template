import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [status, setStatus] = useState<string | null>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Thanks, we will reach out shortly.');
  };

  return (
    <section id="contact-us" className="relative py-32 bg-slate-950 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Contact Us
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Tell us about your project. We love collaborating.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700">
              <div className="text-sm text-gray-400">Email</div>
              <div className="text-white font-bold">hello@techflow.studio</div>
            </div>
            <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700">
              <div className="text-sm text-gray-400">Phone</div>
              <div className="text-white font-bold">+91 8200748270</div>
            </div>
            <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700">
              <div className="text-sm text-gray-400">Address</div>
              <div className="text-white font-bold">Remote • India</div>
            </div>
          </div>

          <form onSubmit={onSubmit} className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700">
            <div className="grid gap-4">
              <input
                type="text"
                placeholder="Your name"
                className="px-4 py-3 rounded-lg bg-slate-900 text-white border border-slate-700 focus:border-cyan-500 outline-none"
                required
              />
              <input
                type="email"
                placeholder="Email address"
                className="px-4 py-3 rounded-lg bg-slate-900 text-white border border-slate-700 focus:border-cyan-500 outline-none"
                required
              />
              <textarea
                placeholder="Tell us about your project"
                className="px-4 py-3 h-32 rounded-lg bg-slate-900 text-white border border-slate-700 focus:border-cyan-500 outline-none"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
              >
                Send
              </button>
              {status && <div className="text-cyan-400">{status}</div>}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
