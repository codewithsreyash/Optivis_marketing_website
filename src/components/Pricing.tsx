import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { Button } from './ui/button';

export function Pricing() {
  const tiers = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for small businesses and single locations',
      features: [
        'Up to 10 cameras',
        'Real-time alerts',
        'Basic analytics',
        'Email support',
        '30-day storage',
        'Mobile app access',
      ],
      cta: 'Start Free Trial',
      popular: false,
      gradient: 'from-[#6b7280] to-[#4b5563]',
    },
    {
      name: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Advanced features for growing businesses',
      features: [
        'Up to 50 cameras',
        'AI behavior analysis',
        'Advanced analytics dashboard',
        'Priority support',
        '90-day storage',
        'API access',
        'Face detection',
        'Custom alerts',
      ],
      cta: 'Get Started',
      popular: true,
      gradient: 'from-[#0066ff] to-[#0052cc]',
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations',
      features: [
        'Unlimited cameras',
        'Full AI suite',
        'Custom integrations',
        'Dedicated support',
        'Unlimited storage',
        'On-premise deployment',
        'SLA guarantee',
        'Training & onboarding',
      ],
      cta: 'Contact Sales',
      popular: false,
      gradient: 'from-[#10b981] to-[#059669]',
    },
  ];

  const revenueGrowth = [
    { year: 'Year 1', revenue: '$250K', growth: 'Initial adoption' },
    { year: 'Year 2', revenue: '$680K', growth: '+172% growth' },
    { year: 'Year 3', revenue: '$1.2M', growth: '+76% growth' },
  ];

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-[#1a2a4a] mb-4" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
            Choose Your Security Plan
          </h2>
          <p className="text-[#6b7280] text-xl max-w-3xl mx-auto">
            Flexible pricing options to match your needs and scale with your organization.
          </p>
        </motion.div>

        {/* Pricing Tiers */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              className={`relative ${tier.popular ? 'md:-mt-4' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {tier.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-[#0066ff] to-[#10b981] text-white px-4 py-1 rounded-full text-sm">
                    Most Popular
                  </div>
                </div>
              )}

              <div className={`bg-white rounded-2xl border-2 ${tier.popular ? 'border-[#0066ff] shadow-2xl' : 'border-[#e5e7eb] shadow-lg'} p-8 h-full flex flex-col hover:-translate-y-2 transition-transform duration-300`}>
                {/* Header */}
                <div className="mb-8">
                  <h3 className="text-[#1a2a4a] mb-2" style={{ fontSize: '1.75rem', fontWeight: 600 }}>
                    {tier.name}
                  </h3>
                  <p className="text-[#6b7280] mb-6">
                    {tier.description}
                  </p>
                  <div className="flex items-baseline">
                    <span className="text-[#1a2a4a]" style={{ fontSize: '3rem', fontWeight: 700 }}>
                      {tier.price}
                    </span>
                    {tier.period && (
                      <span className="text-[#6b7280] ml-2">
                        {tier.period}
                      </span>
                    )}
                  </div>
                </div>

                {/* Features */}
                <div className="flex-grow mb-8">
                  <ul className="space-y-4">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" />
                        <span className="text-[#374151]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <Button
                  className={`w-full ${tier.popular ? `bg-gradient-to-r ${tier.gradient} text-white hover:opacity-90` : 'bg-[#f3f4f6] text-[#1a2a4a] hover:bg-[#e5e7eb]'}`}
                  size="lg"
                >
                  {tier.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Revenue Growth Projection */}
        <motion.div
          className="bg-gradient-to-br from-[#f9fafb] to-white rounded-2xl p-12 border border-[#e5e7eb]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-[#1a2a4a] text-center mb-8" style={{ fontSize: '2rem', fontWeight: 600 }}>
            Projected Revenue Growth
          </h3>
          <p className="text-[#6b7280] text-center mb-12 max-w-2xl mx-auto">
            Based on average customer expansion and market penetration rates
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {revenueGrowth.map((data, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#e5e7eb]">
                  <div className="text-[#6b7280] mb-2">{data.year}</div>
                  <div className="text-[#0066ff] mb-2" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
                    {data.revenue}
                  </div>
                  <div className="inline-block bg-[#10b981]/10 text-[#10b981] px-3 py-1 rounded-full text-sm">
                    {data.growth}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-[#6b7280] text-sm">
              * Projections based on industry averages and current customer data. Individual results may vary.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
