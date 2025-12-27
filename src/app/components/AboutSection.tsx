import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about-us" className="relative py-32 bg-slate-950 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950/20 via-transparent to-cyan-950/20" />
      
      <div className="relative max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            About Our Vision
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We're pioneering the future of technology with innovative solutions that empower businesses to thrive in the digital age
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-white">
                Building the Future, Today
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Our mission is to deliver cutting-edge technology solutions that transform businesses and create lasting impact. 
                We combine innovation with reliability to build products that matter.
              </p>
              <p className="text-gray-400 leading-relaxed">
                With a team of world-class engineers and designers, we're committed to pushing the boundaries of what's possible 
                and delivering exceptional value to our clients.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="p-6 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 backdrop-blur-sm">
                <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                  500+
                </div>
                <div className="text-gray-400">Projects Completed</div>
              </div>
              <div className="p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 backdrop-blur-sm">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-2">
                  98%
                </div>
                <div className="text-gray-400">Client Satisfaction</div>
              </div>
            </div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-cyan-500/20">
              {/* Animated grid pattern */}
              <div className="absolute inset-0">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"
                    style={{ top: `${(i + 1) * 16.66}%` }}
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute h-full w-px bg-gradient-to-b from-transparent via-purple-500/30 to-transparent"
                    style={{ left: `${(i + 1) * 16.66}%` }}
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </div>

              {/* Floating elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500/40 to-purple-500/40 backdrop-blur-sm"
                    style={{
                      top: `${30 + i * 15}%`,
                      left: `${20 + i * 20}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.5,
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
