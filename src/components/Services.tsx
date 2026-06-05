import { SERVICES } from '../constants';
import { motion } from 'motion/react';

export default function Services() {
  return (
    <section id="services" className="bg-brand-bg section-padding">
      <div className="text-center mb-16">
        <h2 className="text-brand-charcoal text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
        <div className="w-20 h-1 bg-brand-blue mx-auto mb-6" />
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          We offer a comprehensive range of automotive repairs and maintenance services 
          designed to keep your vehicle running smoothly.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 flex flex-col"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img 
                src={service.image} 
                alt={service.title}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <h3 className="text-2xl font-bold text-brand-charcoal mb-4 group-hover:text-brand-blue transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6 flex-1">
                {service.description}
              </p>
              <div className="pt-4 border-t border-gray-100 group-hover:border-brand-blue/20 transition-colors">
                <span className="text-brand-blue font-bold text-sm tracking-widest uppercase inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                  Contact Us <span className="text-xl">→</span>
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
