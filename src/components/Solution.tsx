import { motion } from 'motion/react';
import { Bell, FileText, BarChart3, Users, Activity, Zap } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Solution() {
  const features = [
    {
      icon: Bell,
      title: 'Real-time Detection',
      description: 'Instant alerts for suspicious activities, unauthorized access, and anomalous behavior patterns detected by advanced AI algorithms.',
      gradient: 'from-[#0066ff] to-[#0052cc]',
    },
    {
      icon: FileText,
      title: 'Automated Logs',
      description: 'Comprehensive event logging with timestamps, locations, and context automatically generated for compliance and investigations.',
      gradient: 'from-[#10b981] to-[#059669]',
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Visual insights into security trends, incident patterns, and operational metrics with customizable reporting tools.',
      gradient: 'from-[#0066ff] to-[#10b981]',
    },
    {
      icon: Users,
      title: 'Face Detection',
      description: 'Advanced facial recognition for access control, VIP identification, and watchlist monitoring with privacy-first design.',
      gradient: 'from-[#1a2a4a] to-[#0066ff]',
    },
    {
      icon: Activity,
      title: 'Behavior Analysis',
      description: 'AI-powered analysis of movement patterns to detect loitering, crowd formation, perimeter breaches, and unusual activities.',
      gradient: 'from-[#10b981] to-[#0066ff]',
    },
    {
      icon: Zap,
      title: 'Easy Integration',
      description: 'Seamless compatibility with existing CCTV infrastructure — no need to replace cameras or rewire your entire system.',
      gradient: 'from-[#0066ff] to-[#1a2a4a]',
    },
  ];

  return (
    <section id="solution" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-[#1a2a4a] mb-4" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
            Transform Your Security with AI
          </h2>
          <p className="text-[#6b7280] text-xl max-w-3xl mx-auto">
            Optivis leverages cutting-edge artificial intelligence to monitor, analyze, and alert in real-time — turning passive cameras into proactive security guardians.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="bg-white rounded-2xl p-8 border border-[#e5e7eb] hover:border-[#0066ff]/50 transition-all duration-300 h-full backdrop-blur-sm shadow-lg hover:shadow-xl group-hover:-translate-y-2">
                <div className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-[#1a2a4a] mb-3" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                  {feature.title}
                </h3>
                
                <p className="text-[#6b7280] leading-relaxed">
                  {feature.description}
                </p>

                {/* Glassmorphism overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0066ff]/5 to-[#10b981]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dashboard Mockup */}
        <motion.div
          className="relative rounded-2xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-[#0066ff]/20 to-[#10b981]/20 z-10 pointer-events-none" />
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1675627453084-505806a00406?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWN1cml0eSUyMGRhc2hib2FyZCUyMGFuYWx5dGljc3xlbnwxfHx8fDE3NjIxOTQ5OTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Optivis Analytics Dashboard"
            className="w-full h-auto"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1a2a4a] to-transparent p-8 z-20">
            <p className="text-white text-lg">
              Comprehensive analytics and real-time monitoring at your fingertips
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
