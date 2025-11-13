import { motion } from 'motion/react';
import { ShoppingBag, Building2, Hotel, GraduationCap, Factory } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function UseCases() {
  const industries = [
    {
      icon: ShoppingBag,
      title: 'Retail',
      description: 'Prevent theft, monitor customer flow, and optimize staff deployment with real-time shopper behavior analytics.',
      metrics: [
        { label: 'Faster Response', value: '50%' },
        { label: 'Theft Reduction', value: '65%' },
      ],
      image: 'https://images.unsplash.com/photo-1733503747506-773e56e4078f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRhaWwlMjBzdG9yZSUyMHNlY3VyaXR5fGVufDF8fHx8MTc2MjE2MDQ4Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      gradient: 'from-[#0066ff] to-[#0052cc]',
    },
    {
      icon: Building2,
      title: 'Corporate',
      description: 'Secure office spaces, manage access control, and ensure employee safety with intelligent perimeter monitoring.',
      metrics: [
        { label: 'Security Cost', value: '-40%' },
        { label: 'Incident Detection', value: '95%' },
      ],
      image: 'https://images.unsplash.com/photo-1666541679286-1cf6b3434483?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBvZmZpY2UlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjIxMDYzNDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      gradient: 'from-[#10b981] to-[#059669]',
    },
    {
      icon: Hotel,
      title: 'Hospitality',
      description: 'Enhance guest safety, monitor public areas, and provide premium security services that elevate the guest experience.',
      metrics: [
        { label: 'Guest Satisfaction', value: '+35%' },
        { label: 'Response Time', value: '2 min' },
      ],
      image: 'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGhvc3BpdGFsaXR5fGVufDF8fHx8MTc2MjE5NDk5OHww&ixlib=rb-4.1.0&q=80&w=1080',
      gradient: 'from-[#1a2a4a] to-[#0066ff]',
    },
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'Protect students and staff, detect unauthorized visitors, and create a safe learning environment across campus.',
      metrics: [
        { label: 'Safety Score', value: '99%' },
        { label: 'Coverage', value: '24/7' },
      ],
      image: 'https://images.unsplash.com/photo-1725738704638-361eac814fca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBlZHVjYXRpb24lMjBjYW1wdXN8ZW58MXx8fHwxNzYyMTQ1MzUwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      gradient: 'from-[#0066ff] to-[#10b981]',
    },
    {
      icon: Factory,
      title: 'Industrial',
      description: 'Monitor hazardous zones, ensure compliance with safety protocols, and prevent unauthorized access to restricted areas.',
      metrics: [
        { label: 'Safety Incidents', value: '-55%' },
        { label: 'Compliance', value: '100%' },
      ],
      image: 'https://images.unsplash.com/photo-1727199079123-ba845d5ab4f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZmFjdG9yeSUyMHdhcmVob3VzZXxlbnwxfHx8fDE3NjIxODY2NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      gradient: 'from-[#10b981] to-[#0066ff]',
    },
  ];

  return (
    <section id="use-cases" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-[#1a2a4a] mb-4" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
            Trusted Across Industries
          </h2>
          <p className="text-[#6b7280] text-xl max-w-3xl mx-auto">
            From retail to education, Optivis delivers tailored security intelligence for every sector.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              {/* Background Image */}
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={industry.image}
                  alt={industry.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} opacity-80 group-hover:opacity-70 transition-opacity`} />
                
                {/* Icon */}
                <div className="absolute top-6 left-6">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/30">
                    <industry.icon className="w-7 h-7 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="bg-white p-8">
                <h3 className="text-[#1a2a4a] mb-3" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
                  {industry.title}
                </h3>
                
                <p className="text-[#6b7280] mb-6 leading-relaxed">
                  {industry.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  {industry.metrics.map((metric, idx) => (
                    <div key={idx} className="bg-[#f9fafb] rounded-xl p-4">
                      <div className="text-[#0066ff] mb-1" style={{ fontSize: '1.5rem', fontWeight: 700 }}>
                        {metric.value}
                      </div>
                      <div className="text-[#9ca3af] text-sm">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
