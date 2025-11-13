import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { ArrowRight, Calendar, Phone } from 'lucide-react';
import { useState } from 'react';

export function CTASection() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <section id="cta-section" className="py-24 bg-gradient-to-br from-[#1a2a4a] via-[#0066ff] to-[#10b981] relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-white mb-6" style={{ fontSize: '3rem', fontWeight: 700 }}>
            Ready to Transform Your Security?
          </h2>
          <p className="text-white/90 text-xl max-w-3xl mx-auto mb-12">
            Join hundreds of organizations leveraging AI to protect what matters most. Get started with a personalized demo today.
          </p>

          {/* Primary CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button
              size="lg"
              className="bg-white text-[#0066ff] hover:bg-white/90 px-8 py-6 text-lg group"
            >
              <Calendar className="mr-2" />
              Schedule Demo
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg backdrop-blur-sm"
            >
              <Phone className="mr-2" />
              Contact Sales
            </Button>
          </div>

          {/* Email Capture Form */}
          <motion.div
            className="max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your work email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 backdrop-blur-sm border-white/30 text-white placeholder:text-white/60 flex-1"
                required
              />
              <Button
                type="submit"
                className="bg-[#10b981] hover:bg-[#059669] text-white"
              >
                Get Started
              </Button>
            </form>
            <p className="text-white/70 text-sm mt-4">
              No credit card required • Free 30-day trial • Setup in minutes
            </p>
          </motion.div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-white/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {[
            { icon: '🔒', text: 'SOC 2 Certified' },
            { icon: '⚡', text: '5-Min Setup' },
            { icon: '💰', text: 'Money-Back Guarantee' },
            { icon: '🏆', text: 'Award-Winning' },
          ].map((badge, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-2">{badge.icon}</div>
              <div className="text-white/90">{badge.text}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
