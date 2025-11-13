import { motion } from 'motion/react';

export function TechStack() {
  const technologies = [
    {
      name: 'React',
      description: 'Lightning-fast, responsive dashboard interface',
      color: '#61dafb',
    },
    {
      name: 'Node.js',
      description: 'Scalable backend processing infrastructure',
      color: '#68a063',
    },
    {
      name: 'Python',
      description: 'Advanced AI and machine learning algorithms',
      color: '#3776ab',
    },
    {
      name: 'PostgreSQL',
      description: 'Reliable, high-performance data storage',
      color: '#336791',
    },
    {
      name: 'AWS',
      description: 'Enterprise-grade cloud infrastructure',
      color: '#ff9900',
    },
    {
      name: 'TensorFlow',
      description: 'Deep learning models for video analysis',
      color: '#ff6f00',
    },
  ];

  return (
    <section id="tech-stack" className="py-24 bg-gradient-to-br from-[#1a2a4a] to-[#0f1729] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, #0066ff 1px, transparent 1px),
            linear-gradient(to bottom, #0066ff 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-white mb-4" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
            Built on Enterprise-Grade Technology
          </h2>
          <p className="text-white/70 text-xl max-w-3xl mx-auto">
            Powered by industry-leading technologies to deliver unmatched performance, reliability, and scalability.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 h-full group-hover:-translate-y-2">
                {/* Logo/Icon */}
                <div className="flex items-center space-x-4 mb-6">
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${tech.color}20` }}
                  >
                    <div 
                      className="w-8 h-8 rounded-lg"
                      style={{ backgroundColor: tech.color }}
                    />
                  </div>
                  <h3 className="text-white" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
                    {tech.name}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-white/70 leading-relaxed">
                  {tech.description}
                </p>

                {/* Accent Line */}
                <div 
                  className="mt-6 h-1 rounded-full w-0 group-hover:w-full transition-all duration-500"
                  style={{ backgroundColor: tech.color }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Security Badge */}
        <motion.div
          className="mt-16 text-center bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="w-12 h-12 bg-[#10b981]/20 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-[#10b981]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-white" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
              Enterprise Security & Compliance
            </h3>
          </div>
          <p className="text-white/70">
            SOC 2 Type II certified, GDPR compliant, and built with end-to-end encryption to protect your sensitive data.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
