import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Martinez',
      title: 'Director of Security, RetailCorp',
      quote: 'Optivis reduced our theft incidents by 65% in the first quarter alone. The real-time alerts have transformed how our security team operates.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1425421669292-0c3da3b8f529?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBlcnNvbnxlbnwxfHx8fDE3NjIxNDg5MzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Michael Chen',
      title: 'Facilities Manager, TechHub Campus',
      quote: 'The AI-powered behavior analysis is incredible. We caught a potential security breach before it happened. The ROI has been phenomenal.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1425421669292-0c3da3b8f529?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBlcnNvbnxlbnwxfHx8fDE3NjIxNDg5MzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Jennifer Williams',
      title: 'Operations Director, Grand Plaza Hotel',
      quote: 'Our guests feel safer, and our staff is more confident. The analytics dashboard provides insights we never had before. Highly recommended!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1425421669292-0c3da3b8f529?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBlcnNvbnxlbnwxfHx8fDE3NjIxNDg5MzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'David Thompson',
      title: 'Safety Coordinator, Industrial Solutions Inc.',
      quote: 'The integration with our existing cameras was seamless. Safety incidents dropped by 55% and compliance audits have never been easier.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1425421669292-0c3da3b8f529?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBlcnNvbnxlbnwxfHx8fDE3NjIxNDg5MzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <section className="py-24 bg-[#f9fafb] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-[#1a2a4a] mb-4" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
            Trusted by Security Leaders
          </h2>
          <p className="text-[#6b7280] text-xl max-w-3xl mx-auto">
            See what industry professionals are saying about their experience with Optivis.
          </p>
        </motion.div>

        <Carousel className="max-w-5xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                <motion.div
                  className="p-4 h-full"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#e5e7eb] h-full flex flex-col">
                    {/* Stars */}
                    <div className="flex space-x-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-[#fbbf24] text-[#fbbf24]" />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-[#374151] text-lg leading-relaxed mb-8 flex-grow">
                      "{testimonial.quote}"
                    </blockquote>

                    {/* Author */}
                    <div className="flex items-center space-x-4">
                      <div className="w-14 h-14 rounded-full overflow-hidden bg-gradient-to-br from-[#0066ff] to-[#10b981]">
                        <ImageWithFallback
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="text-[#1a2a4a]" style={{ fontWeight: 600 }}>
                          {testimonial.name}
                        </div>
                        <div className="text-[#6b7280] text-sm">
                          {testimonial.title}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>

        {/* Trust Indicators */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {[
            { value: '500+', label: 'Installations' },
            { value: '99.9%', label: 'Uptime' },
            { value: '24/7', label: 'Support' },
            { value: '4.9/5', label: 'Customer Rating' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-[#0066ff] mb-2" style={{ fontSize: '2rem', fontWeight: 700 }}>
                {stat.value}
              </div>
              <div className="text-[#6b7280]">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
