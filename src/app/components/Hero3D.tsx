import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';

export function Hero3D() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const pendingRef = useRef<{ x: number; y: number } | null>(null);
  const [allowMotion, setAllowMotion] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const applyPref = () => setAllowMotion(!mq.matches);
    applyPref();
    mq.addEventListener('change', applyPref);
    return () => {
      mq.removeEventListener('change', applyPref);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    pendingRef.current = { x: x * 20, y: y * 20 };
    if (rafRef.current == null) {
      rafRef.current = requestAnimationFrame(() => {
        if (pendingRef.current) setMousePosition(pendingRef.current);
        rafRef.current = null;
      });
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950"
      onMouseMove={handleMouseMove}
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={
              allowMotion
                ? {
                    y: [0, -30, 0],
                    opacity: [0.2, 0.5, 0.2],
                  }
                : undefined
            }
            transition={
              allowMotion
                ? {
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }
                : undefined
            }
          />
        ))}
      </div>

      {/* 3D Shape using CSS */}
      <div className="absolute inset-0 flex items-center justify-center perspective-[1000px]">
        <motion.div
          className="relative w-64 h-64 md:w-96 md:h-96"
          style={{
            transformStyle: 'preserve-3d',
          }}
          animate={
            allowMotion
              ? {
                  rotateX: mousePosition.y,
                  rotateY: mousePosition.x,
                }
              : undefined
          }
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        >
          {/* Animated 3D cube */}
          <div className="absolute inset-0" style={{ transformStyle: 'preserve-3d' }}>
            {/* Front */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 to-blue-600/30 backdrop-blur-sm border border-cyan-400/50 rounded-2xl"
              style={{ transform: 'translateZ(100px)' }}
              animate={allowMotion ? { opacity: [0.3, 0.6, 0.3] } : undefined}
              transition={allowMotion ? { duration: 3, repeat: Infinity } : undefined}
            />
            {/* Back */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-pink-600/30 backdrop-blur-sm border border-purple-400/50 rounded-2xl"
              style={{ transform: 'translateZ(-100px) rotateY(180deg)' }}
              animate={allowMotion ? { opacity: [0.3, 0.6, 0.3] } : undefined}
              transition={allowMotion ? { duration: 3, repeat: Infinity, delay: 0.5 } : undefined}
            />
            {/* Right */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-cyan-600/30 backdrop-blur-sm border border-blue-400/50 rounded-2xl"
              style={{ transform: 'rotateY(90deg) translateZ(100px)' }}
              animate={allowMotion ? { opacity: [0.3, 0.6, 0.3] } : undefined}
              transition={allowMotion ? { duration: 3, repeat: Infinity, delay: 1 } : undefined}
            />
            {/* Left */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-pink-500/30 to-purple-600/30 backdrop-blur-sm border border-pink-400/50 rounded-2xl"
              style={{ transform: 'rotateY(-90deg) translateZ(100px)' }}
              animate={allowMotion ? { opacity: [0.3, 0.6, 0.3] } : undefined}
              transition={allowMotion ? { duration: 3, repeat: Infinity, delay: 1.5 } : undefined}
            />
            {/* Top */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 to-purple-600/30 backdrop-blur-sm border border-cyan-400/50 rounded-2xl"
              style={{ transform: 'rotateX(90deg) translateZ(100px)' }}
              animate={allowMotion ? { opacity: [0.3, 0.6, 0.3] } : undefined}
              transition={allowMotion ? { duration: 3, repeat: Infinity, delay: 2 } : undefined}
            />
            {/* Bottom */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-blue-600/30 backdrop-blur-sm border border-purple-400/50 rounded-2xl"
              style={{ transform: 'rotateX(-90deg) translateZ(100px)' }}
              animate={allowMotion ? { opacity: [0.3, 0.6, 0.3] } : undefined}
              transition={allowMotion ? { duration: 3, repeat: Infinity, delay: 2.5 } : undefined}
            />
          </div>

          {/* Floating orbs around the cube */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-4 h-4 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500"
              style={{
                top: '50%',
                left: '50%',
              }}
              animate={
                allowMotion
                  ? {
                      x: Math.cos((i * Math.PI * 2) / 8) * 150,
                      y: Math.sin((i * Math.PI * 2) / 8) * 150,
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }
                  : undefined
              }
              transition={
                allowMotion
                  ? {
                      duration: 4,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }
                  : undefined
              }
            />
          ))}
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={allowMotion ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Future of Innovation
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Building tomorrow's technology with cutting-edge solutions that transform your vision into reality
          </p>
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 group"
            whileHover={allowMotion ? { scale: 1.05 } : undefined}
            whileTap={allowMotion ? { scale: 0.95 } : undefined}
          >
            <span className="flex items-center gap-2">
              Get Started
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={allowMotion ? { y: [0, 10, 0] } : undefined}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2 text-gray-400">
          <span className="text-sm">Scroll</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
