import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from './ui/dialog';

const items = Array.from({ length: 8 }).map((_, i) => ({
  title: `Project ${i + 1}`,
  category: i % 2 === 0 ? 'Design' : 'Development',
  image: `https://source.unsplash.com/1200x800/?project,${i}`,
  description:
    'A showcase of our work highlighting design craft, engineering quality, and measurable outcomes.',
}));

export function PortfolioSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="portfolio" className="relative py-32 bg-slate-950 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10" />
      <div className="relative max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            Portfolio
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A curated selection of our recent work across industries
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, index) => (
            <Dialog key={it.title}>
              <DialogTrigger asChild>
                <motion.button
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="group relative overflow-hidden rounded-2xl border border-slate-700 bg-slate-800/50 backdrop-blur-sm text-left hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -10 }}
                >
                  <div className="aspect-[4/3] relative bg-cover bg-center" style={{ backgroundImage: `url(${it.image})` }}>
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-purple-600 opacity-30" />
                  </div>
                  <div className="p-8">
                    <div className="text-sm text-gray-400">{it.category}</div>
                    <h3 className="text-xl font-bold text-white">{it.title}</h3>
                  </div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br from-cyan-500 to-purple-600 transition-opacity pointer-events-none" />
                </motion.button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>{it.title}</DialogTitle>
                  <DialogDescription>{it.category}</DialogDescription>
                </DialogHeader>
                <div
                  className="rounded-lg overflow-hidden border border-slate-800 mb-4 h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${it.image})` }}
                />
                <p className="text-gray-400">{it.description}</p>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
