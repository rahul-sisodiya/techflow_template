import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

const services = [
  {
    title: 'Video Editing',
    description: 'Cinematic edits, motion graphics, and social-ready cuts tailored to your brand story.',
    gradient: 'from-cyan-500 to-blue-600',
    image: 'https://source.unsplash.com/1600x900/?video,editing',
  },
  {
    title: 'Product Photography',
    description: 'High-impact product shoots with lighting and styling that convert browsers into buyers.',
    gradient: 'from-blue-500 to-purple-600',
    image: 'https://source.unsplash.com/1600x900/?product,photography',
  },
  {
    title: 'Digital Marketing',
    description: 'Full-funnel performance marketing: SEO, SEM, social ads, and analytics that drive ROI.',
    gradient: 'from-purple-500 to-pink-600',
    image: 'https://source.unsplash.com/1600x900/?digital,marketing',
  },
  {
    title: 'Influencer Marketing',
    description: 'Strategic creator partnerships, authentic content, and measurable campaign impact.',
    gradient: 'from-pink-500 to-cyan-600',
    image: 'https://source.unsplash.com/1600x900/?influencer,marketing',
  },
  {
    title: 'Model Shooting',
    description: 'End-to-end model shoots: casting, styling, and direction for editorial-grade visuals.',
    gradient: 'from-cyan-500 to-blue-600',
    image: 'https://source.unsplash.com/1600x900/?model,photoshoot',
  },
  {
    title: 'Portfolio Management',
    description: 'Curate, organize, and present your best work across web and social platforms.',
    gradient: 'from-blue-500 to-purple-600',
    image: 'https://source.unsplash.com/1600x900/?portfolio,design',
  },
  {
    title: 'Product Designing',
    description: 'From concept to prototype: user-centered product design and iteration.',
    gradient: 'from-purple-500 to-pink-600',
    image: 'https://source.unsplash.com/1600x900/?product,design',
  },
  {
    title: 'Graphic Designing',
    description: 'Brand identities, marketing collaterals, and visuals that communicate with clarity.',
    gradient: 'from-pink-500 to-cyan-600',
    image: 'https://source.unsplash.com/1600x900/?graphic,design',
  },
  {
    title: 'Packaging Design',
    description: 'Shelf-ready packaging with structural design and retail compliance in mind.',
    gradient: 'from-cyan-500 to-blue-600',
    image: 'https://source.unsplash.com/1600x900/?packaging,design',
  },
  {
    title: 'Ad Campaigns',
    description: 'Creative concepts, media planning, and execution across digital and offline channels.',
    gradient: 'from-blue-500 to-purple-600',
    image: 'https://source.unsplash.com/1600x900/?advertising,campaign',
  },
  {
    title: 'Web Development',
    description: 'Modern, performant websites with responsive UI and SEO-friendly architecture.',
    gradient: 'from-purple-500 to-pink-600',
    image: 'https://source.unsplash.com/1600x900/?web,development',
  },
  {
    title: 'App Development',
    description: 'Cross-platform apps with intuitive experiences and robust backend integrations.',
    gradient: 'from-pink-500 to-cyan-600',
    image: 'https://source.unsplash.com/1600x900/?app,development',
  },
  {
    title: 'Server Management',
    description: 'Secure, scalable infrastructure setup, monitoring, and maintenance.',
    gradient: 'from-cyan-500 to-blue-600',
    image: 'https://source.unsplash.com/1600x900/?server,datacenter',
  },
  {
    title: 'Database Management',
    description: 'Schema design, migrations, backups, and performance tuning for reliability.',
    gradient: 'from-blue-500 to-purple-600',
    image: 'https://source.unsplash.com/1600x900/?database,data',
  },
  {
    title: 'UI/UX Designing',
    description: 'Research-driven interfaces and prototypes that delight users and achieve goals.',
    gradient: 'from-purple-500 to-pink-600',
    image: 'https://source.unsplash.com/1600x900/?ui,ux',
  },
  {
    title: 'Content Creation',
    description: 'Copy, visuals, and formats tailored to platforms and audiences for engagement.',
    gradient: 'from-pink-500 to-cyan-600',
    image: 'https://source.unsplash.com/1600x900/?content,creation',
  },
];

export function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="services" className="relative py-32 bg-slate-900 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Services
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive creative, marketing, and engineering services to power your growth
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="h-full rounded-2xl overflow-hidden border border-slate-700 bg-slate-800/50 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20">
                <div
                  className="aspect-[4/3] relative"
                  style={{
                    backgroundImage: `url(${service.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-30`} />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
