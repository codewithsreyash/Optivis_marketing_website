import { motion } from 'motion/react';
import { Eye, DollarSign, AlertTriangle } from 'lucide-react';

export function Problem() {
  const problems = [
    {
      icon: Eye,
      title: 'Staff Fatigue & Missed Incidents',
      description: 'Security personnel cannot effectively monitor multiple camera feeds simultaneously, leading to missed critical events and delayed responses.',
      stat: '90%',
      statLabel: 'of footage unwatched',
    },
    {
      icon: DollarSign,
      title: 'Manual Inefficiency & High Costs',
      description: 'Traditional surveillance requires extensive human resources for monitoring and reviewing footage, driving up operational costs significantly.',
      stat: '70%',
      statLabel: 'wasted labor hours',
    },
    {
      icon: AlertTriangle,
      title: 'Safety Gaps & Storage Waste',
      description: 'Critical incidents are discovered hours or days later during manual reviews, while terabytes of irrelevant footage consume expensive storage.',
      stat: '85%',
      statLabel: 'storage on non-events',
    },
  ];

  return (
    <section className="py-24 bg-[#f9fafb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[#1a2a4a] mb-4" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
            The Problem with Traditional CCTV
          </h2>
          <p className="text-[#6b7280] text-xl max-w-3xl mx-auto">
            Security teams are overwhelmed, incidents go unnoticed, and organizations waste resources on ineffective surveillance.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#e5e7eb] group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -8 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#0066ff]/10 to-[#10b981]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <problem.icon className="w-8 h-8 text-[#0066ff]" />
              </div>
              
              <h3 className="text-[#1a2a4a] mb-4" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
                {problem.title}
              </h3>
              
              <p className="text-[#6b7280] mb-6 leading-relaxed">
                {problem.description}
              </p>

              <div className="pt-6 border-t border-[#e5e7eb]">
                <div className="text-[#0066ff]" style={{ fontSize: '2rem', fontWeight: 700 }}>
                  {problem.stat}
                </div>
                <div className="text-[#9ca3af] text-sm">
                  {problem.statLabel}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Highlight 90% Statistic */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-[#1a2a4a] to-[#0066ff] rounded-2xl p-12 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="text-[#10b981] mb-4" style={{ fontSize: '4rem', fontWeight: 700 }}>
            90%
          </div>
          <p className="text-white text-2xl max-w-2xl mx-auto">
            Of surveillance footage is never reviewed, making traditional CCTV systems reactive rather than preventive.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
