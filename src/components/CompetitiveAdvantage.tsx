import { motion } from 'motion/react';
import { Check, X } from 'lucide-react';

export function CompetitiveAdvantage() {
  const comparisons = [
    { feature: 'Real-time Alerts', traditional: false, optivis: true },
    { feature: 'Behavior Detection', traditional: false, optivis: true },
    { feature: 'Easy Integration', traditional: false, optivis: true },
    { feature: 'Analytics Dashboard', traditional: false, optivis: true },
    { feature: 'Cost-Effective', traditional: false, optivis: true },
    { feature: 'AI-Powered Analysis', traditional: false, optivis: true },
    { feature: 'Automated Logging', traditional: false, optivis: true },
    { feature: 'Facial Recognition', traditional: false, optivis: true },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-[#1a2a4a] mb-4" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
            Why Optivis Outperforms Traditional CCTV
          </h2>
          <p className="text-[#6b7280] text-xl max-w-3xl mx-auto">
            See how our AI-powered platform delivers capabilities that traditional surveillance simply cannot match.
          </p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Table Header */}
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="col-span-1" />
            <div className="bg-[#f9fafb] rounded-t-2xl p-6 text-center border-2 border-[#e5e7eb]">
              <h3 className="text-[#6b7280]" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                Traditional CCTV
              </h3>
            </div>
            <div className="bg-gradient-to-br from-[#0066ff] to-[#0052cc] rounded-t-2xl p-6 text-center border-2 border-[#0066ff]">
              <h3 className="text-white" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                Optivis
              </h3>
            </div>
          </div>

          {/* Table Rows */}
          <div className="space-y-2">
            {comparisons.map((item, index) => (
              <motion.div
                key={index}
                className="grid grid-cols-3 gap-4 items-center"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                {/* Feature Name */}
                <div className="bg-white p-4 rounded-lg border border-[#e5e7eb]">
                  <p className="text-[#1a2a4a]" style={{ fontWeight: 500 }}>
                    {item.feature}
                  </p>
                </div>

                {/* Traditional CCTV */}
                <div className="bg-[#f9fafb] p-4 rounded-lg border border-[#e5e7eb] flex justify-center">
                  {item.traditional ? (
                    <Check className="w-6 h-6 text-[#10b981]" />
                  ) : (
                    <X className="w-6 h-6 text-[#9ca3af]" />
                  )}
                </div>

                {/* Optivis */}
                <div className="bg-gradient-to-br from-[#0066ff]/5 to-[#0052cc]/5 p-4 rounded-lg border-2 border-[#0066ff]/30 flex justify-center">
                  {item.optivis ? (
                    <Check className="w-6 h-6 text-[#10b981]" />
                  ) : (
                    <X className="w-6 h-6 text-[#9ca3af]" />
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Accent */}
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="col-span-1" />
            <div className="bg-[#f9fafb] rounded-b-2xl h-2 border-x-2 border-b-2 border-[#e5e7eb]" />
            <div className="bg-gradient-to-r from-[#0066ff] to-[#0052cc] rounded-b-2xl h-2 border-x-2 border-b-2 border-[#0066ff]" />
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-[#6b7280] text-lg mb-6">
            Ready to upgrade from passive recording to intelligent monitoring?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="bg-gradient-to-r from-[#0066ff]/10 to-[#10b981]/10 rounded-2xl p-6 flex-1 max-w-xs">
              <div className="text-[#0066ff] mb-2" style={{ fontSize: '2rem', fontWeight: 700 }}>
                10x
              </div>
              <p className="text-[#6b7280]">Faster incident detection vs traditional systems</p>
            </div>
            <div className="bg-gradient-to-r from-[#10b981]/10 to-[#0066ff]/10 rounded-2xl p-6 flex-1 max-w-xs">
              <div className="text-[#10b981] mb-2" style={{ fontSize: '2rem', fontWeight: 700 }}>
                70%
              </div>
              <p className="text-[#6b7280]">Reduction in security personnel costs</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
