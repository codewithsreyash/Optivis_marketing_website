import { motion } from 'motion/react';
import { Zap, Heart, Award, Globe } from 'lucide-react';

export function Benefits() {
  const benefits = [
    {
      icon: Zap,
      title: 'Functional Benefits',
      subtitle: 'Faster Detection',
      description: 'Reduce incident response time by 90% with real-time AI-powered alerts and automated threat detection across all camera feeds.',
      color: '#0066ff',
    },
    {
      icon: Heart,
      title: 'Emotional Benefits',
      subtitle: 'Peace of Mind',
      description: 'Sleep soundly knowing your property is protected 24/7 by intelligent systems that never miss a moment or overlook suspicious activity.',
      color: '#10b981',
    },
    {
      icon: Award,
      title: 'Social Benefits',
      subtitle: 'Industry Recognition',
      description: 'Position your organization as a safety-focused leader with cutting-edge security technology that demonstrates commitment to protection.',
      color: '#1a2a4a',
    },
    {
      icon: Globe,
      title: 'Macro Benefits',
      subtitle: 'Ecosystem Value',
      description: 'Contribute to safer communities through proactive security measures, creating a ripple effect of protection and deterrence.',
      color: '#0066ff',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-[#f9fafb] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-[#1a2a4a] mb-4" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
            Why Organizations Choose Optivis
          </h2>
          <p className="text-[#6b7280] text-xl max-w-3xl mx-auto">
            Beyond just features — experience tangible benefits across every dimension of your security operations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-[#e5e7eb] hover:border-[#0066ff]/30 transition-all duration-300 h-full shadow-lg hover:shadow-xl group-hover:-translate-y-2">
                {/* Icon */}
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                  style={{ 
                    background: `linear-gradient(135deg, ${benefit.color}15, ${benefit.color}30)` 
                  }}
                >
                  <benefit.icon className="w-8 h-8" style={{ color: benefit.color }} />
                </div>

                {/* Title */}
                <h3 className="text-[#1a2a4a] mb-2" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                  {benefit.title}
                </h3>

                {/* Subtitle */}
                <div 
                  className="mb-4 inline-block px-3 py-1 rounded-full text-sm"
                  style={{ 
                    backgroundColor: `${benefit.color}15`,
                    color: benefit.color 
                  }}
                >
                  {benefit.subtitle}
                </div>

                {/* Description */}
                <p className="text-[#6b7280] leading-relaxed">
                  {benefit.description}
                </p>

                {/* Hover gradient */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  style={{
                    background: `linear-gradient(135deg, ${benefit.color}05, transparent)`
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Value Proposition */}
        <motion.div
          className="mt-16 text-center bg-gradient-to-r from-[#0066ff]/5 via-[#10b981]/5 to-[#0066ff]/5 rounded-2xl p-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-[#1a2a4a] mb-4" style={{ fontSize: '1.75rem', fontWeight: 600 }}>
            More Than Just Security — It's Strategic Advantage
          </h3>
          <p className="text-[#6b7280] text-lg max-w-3xl mx-auto">
            Optivis transforms your security infrastructure from a cost center into a strategic asset that enhances operations, reduces risks, and creates measurable business value.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
