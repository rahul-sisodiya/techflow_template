import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

const steps = [
  {
    number: '01',
    title: 'Connect & Configure',
    description: 'Seamlessly integrate with your existing infrastructure in minutes with our intuitive setup process.',
  },
  {
    number: '02',
    title: 'Customize & Deploy',
    description: 'Tailor the platform to your specific needs using our powerful configuration tools and deploy instantly.',
  },
  {
    number: '03',
    title: 'Monitor & Scale',
    description: 'Track performance in real-time and scale effortlessly as your business grows with automated optimization.',
  },
  {
    number: '04',
    title: 'Optimize & Succeed',
    description: 'Leverage AI-driven insights to continuously improve and achieve exceptional results.',
  },
];

export function HowItWorksSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="how-it-works" className="relative py-32 bg-slate-950 overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600 bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Get started in four simple steps and transform your business in no time
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                {/* Step card */}
                <div className="relative p-8 rounded-2xl bg-slate-900/50 backdrop-blur-sm border border-slate-800 hover:border-purple-500/50 transition-all duration-300 group hover:shadow-xl hover:shadow-purple-500/20">
                  {/* Number badge */}
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                    <div className="relative w-16 h-16">
                      <motion.div
                        className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-purple-600"
                        animate={{
                          rotate: 360,
                        }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: 'linear',
                        }}
                      />
                      <div className="absolute inset-0.5 rounded-full bg-slate-950 flex items-center justify-center">
                        <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                          {step.number}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="mt-8 text-center">
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow indicator (except last item) */}
                  {index < steps.length - 1 && (
                    <motion.div
                      className="hidden lg:block absolute top-1/2 -right-4 w-8 h-8 -translate-y-1/2 text-purple-500/50"
                      animate={{
                        x: [0, 5, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                      }}
                    >
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <p className="text-gray-400 mb-6">Ready to collaborate?</p>
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const el = document.getElementById('contact-us');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Contact Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
