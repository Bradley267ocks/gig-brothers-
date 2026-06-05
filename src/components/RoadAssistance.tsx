import { Phone, Clock, Truck } from 'lucide-react';
import { CONTACT } from '../constants';
import { motion } from 'motion/react';

export default function RoadAssistance() {
  return (
    <section id="road-assistance" className="bg-brand-charcoal py-24 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
        <Truck className="w-full h-full text-white rotate-[-15deg]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="bg-gradient-to-r from-brand-red to-brand-dark-red rounded-3xl p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 shadow-2xl">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-widest mb-6">
              <Clock className="w-4 h-4" /> 24/7 EMERGENCY SUPPORT
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Stuck on the road? <br className="hidden md:block" />
              <span>We're on our way.</span>
            </h2>
            <p className="text-white/80 text-xl mb-8 max-w-xl">
              Our dedicated road assistance team is available 24 hours a day, 7 days a week. 
              Save these numbers for immediate mechanical help or towing.
            </p>
          </div>

          <div className="flex-1 flex flex-col sm:flex-row gap-6 w-full max-w-md">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={`tel:${CONTACT.mobile1}`}
              className="flex-1 bg-white p-6 rounded-2xl flex flex-col items-center text-center group shadow-xl"
            >
              <div className="w-12 h-12 bg-blue-50 text-brand-blue rounded-full flex items-center justify-center mb-4 transition-colors group-hover:bg-brand-blue group-hover:text-white">
                <Phone className="w-6 h-6" />
              </div>
              <span className="text-gray-500 text-sm font-bold uppercase tracking-wider mb-2">Road Team 1</span>
              <span className="text-brand-charcoal text-xl font-black">{CONTACT.mobile1}</span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={`tel:${CONTACT.mobile2}`}
              className="flex-1 bg-white p-6 rounded-2xl flex flex-col items-center text-center group shadow-xl"
            >
              <div className="w-12 h-12 bg-red-50 text-brand-red rounded-full flex items-center justify-center mb-4 transition-colors group-hover:bg-brand-red group-hover:text-white">
                <Phone className="w-6 h-6" />
              </div>
              <span className="text-gray-500 text-sm font-bold uppercase tracking-wider mb-2">Road Team 2</span>
              <span className="text-brand-charcoal text-xl font-black">{CONTACT.mobile2}</span>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
