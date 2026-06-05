import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-24 pb-12 sm:pb-32">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/auto_repair_hero_1780596937206.png"
          alt="Modern Workshop"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-brand-charcoal/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-block bg-brand-blue text-white text-xs font-bold px-3 py-1 rounded-full tracking-widest uppercase mb-6"
            >
              Gig Brothers • Complete Auto Care
            </motion.span>
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.9] mb-4">
              GIG <br className="hidden md:block" />
              <span className="text-brand-blue">BROTHERS</span>
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-white mb-6 uppercase tracking-tight">
              Complete Auto Care
            </h2>
            <p className="text-lg sm:text-xl text-brand-red font-bold mb-8 leading-tight italic">
              "From Engine to Panel, We’ve Got You Covered."
            </p>
            <p className="text-base sm:text-lg text-gray-300 mb-10 leading-relaxed max-w-xl">
              Lusikisiki's premium automotive solution for all makes and models. 
              Official workshop for Gig Brothers Trading, delivering excellence 
              in every repair.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-20 sm:mb-0">
              <a href="tel:0390011660" className="btn-primary text-center px-10 py-4 flex items-center justify-center gap-2">
                CALL NOW
              </a>
              <a href="#services" className="btn-outline !border-white !text-white hover:!bg-white hover:!text-brand-blue text-center px-10 py-4 font-bold">
                EXPLORE SERVICES
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative bg-black rounded-3xl overflow-hidden shadow-2xl aspect-video border border-white/10"
          >
            <iframe 
               src="https://player.vimeo.com/video/1198768638?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
               className="absolute inset-0 w-full h-full"
               frameBorder="0" 
               allow="autoplay; fullscreen; picture-in-picture; clipboard-write" 
               title="Gig Brothers Workshop"
            ></iframe>
          </motion.div>
        </div>
      </div>

      {/* Stats/Bottom Detail */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/80 to-transparent pb-6 sm:pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 border-t border-white/10 pt-6 sm:pt-10">
            <div className="flex flex-col">
              <span className="text-brand-blue font-bold text-xl sm:text-2xl">24/7</span>
              <span className="text-gray-400 text-[10px] sm:text-xs uppercase tracking-widest">Road Assistance</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-xl sm:text-2xl">100%</span>
              <span className="text-gray-400 text-[10px] sm:text-xs uppercase tracking-widest">Certified Team</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-xl sm:text-2xl">L-Siki</span>
              <span className="text-gray-400 text-[10px] sm:text-xs uppercase tracking-widest">Main Street</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-xl sm:text-2xl">Elite</span>
              <span className="text-gray-400 text-[10px] sm:text-xs uppercase tracking-widest">Standards</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
