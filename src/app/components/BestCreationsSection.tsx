import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

const creations = Array.from({ length: 6 }).map((_, i) => ({
  title: `Best Creation ${i + 1}`,
  highlight: i % 3 === 0 ? 'Campaign' : 'Design',
  image: `https://source.unsplash.com/1600x900/?creative,${i}`,
}));

export function BestCreationsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="best-creations" className="relative py-32 bg-slate-900 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Our Best Creations
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Showcasing standout work delivering measurable business impact
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {creations.map((c, index) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group rounded-2xl overflow-hidden border border-slate-700 bg-slate-800/50 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20"
            >
              <div
                className="aspect-[16/9] relative bg-cover bg-center"
                style={{ backgroundImage: `url(${c.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-purple-600 opacity-30" />
              </div>
              <div className="p-8">
                <div className="text-sm text-gray-400">{c.highlight}</div>
                <h3 className="text-xl font-bold text-white">{c.title}</h3>
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br from-cyan-500 to-purple-600 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
