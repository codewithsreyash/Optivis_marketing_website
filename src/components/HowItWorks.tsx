import { motion } from 'motion/react';
import { Plug, Brain, Bell, BarChart } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      icon: Plug,
      title: 'Integrate CCTV',
      description: 'Connect your existing camera infrastructure to Optivis in minutes — no hardware replacement needed.',
      color: '#0066ff',
    },
    {
      icon: Brain,
      title: 'AI Analyzes',
      description: 'Our intelligent algorithms continuously monitor and analyze video feeds for threats, anomalies, and patterns.',
      color: '#10b981',
    },
    {
      icon: Bell,
      title: 'Instant Alerts',
      description: 'Receive real-time notifications via mobile, email, or SMS when suspicious activities are detected.',
      color: '#0066ff',
    },
    {
      icon: BarChart,
      title: 'Dashboard Insights',
      description: 'Access comprehensive analytics, historical data, and actionable intelligence from your centralized dashboard.',
      color: '#1a2a4a',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-[#f9fafb] to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, #0066ff 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-[#1a2a4a] mb-4" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
            How It Works
          </h2>
          <p className="text-[#6b7280] text-xl max-w-3xl mx-auto">
            Getting started with intelligent security is simple and seamless.
          </p>
        </motion.div>

        {/* Desktop View - Horizontal Flow */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-[#0066ff] via-[#10b981] to-[#1a2a4a] opacity-20" style={{ top: '4rem' }} />

            <div className="grid grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  {/* Step Number */}
                  <div className="flex justify-center mb-6">
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center text-white relative z-10 shadow-lg"
                      style={{ backgroundColor: step.color }}
                    >
                      <span style={{ fontSize: '1.5rem', fontWeight: 700 }}>{index + 1}</span>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <div 
                      className="w-20 h-20 rounded-2xl flex items-center justify-center"
                      style={{ backgroundColor: `${step.color}15` }}
                    >
                      <step.icon className="w-10 h-10" style={{ color: step.color }} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-[#1a2a4a] mb-3" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                      {step.title}
                    </h3>
                    <p className="text-[#6b7280] leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-16 -right-4 hidden lg:block">
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path d="M4 16h24m0 0l-8-8m8 8l-8 8" stroke={step.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.3" />
                      </svg>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile View - Vertical Flow */}
        <div className="md:hidden space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="flex items-start space-x-4">
                {/* Step Number & Icon Column */}
                <div className="flex flex-col items-center">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg mb-4"
                    style={{ backgroundColor: step.color }}
                  >
                    <span style={{ fontWeight: 700 }}>{index + 1}</span>
                  </div>
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: `${step.color}15` }}
                  >
                    <step.icon className="w-8 h-8" style={{ color: step.color }} />
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-1 h-16 mt-4" style={{ backgroundColor: `${step.color}30` }} />
                  )}
                </div>

                {/* Content Column */}
                <div className="flex-1 pt-2">
                  <h3 className="text-[#1a2a4a] mb-2" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                    {step.title}
                  </h3>
                  <p className="text-[#6b7280] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
