import { Heart } from 'lucide-react';
import { CONTACT } from '../constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-charcoal text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Col */}
          <div>
            <div className="flex flex-col mb-6">
              <img 
                src="https://i.ibb.co/wZDLQ9xs/1000480672-removebg-preview-logo.png" 
                alt="Gig Brothers Logo" 
                className="h-12 w-auto object-contain self-start mb-2 brightness-0 invert"
                referrerPolicy="no-referrer"
              />
              <span className="text-brand-blue text-[10px] font-bold uppercase tracking-[0.2em]">
                Complete Auto Care
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Official Gig Brothers Trading workshop. Providing top-tier 
              automotive repair from engine to panel since Lusikisiki's expansion.
            </p>
            <div className="flex gap-2">
               <div className="w-4 h-4 bg-brand-charcoal rounded-full border border-gray-600" title="Steel Charcoal"></div>
               <div className="w-4 h-4 bg-brand-blue rounded-full" title="Primary Blue"></div>
               <div className="w-4 h-4 bg-brand-red rounded-full" title="Accent Red"></div>
               <div className="w-4 h-4 bg-brand-bg rounded-full border border-gray-700" title="Light Gray"></div>
            </div>
            <p className="text-[10px] text-gray-500 mt-2 uppercase tracking-tighter">
              Steel Charcoal • Primary Blue • Accent Red
            </p>
          </div>

          {/* Quick Links Col */}
          <div>
            <h4 className="font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#services" className="hover:text-brand-blue transition-colors">Engine Overhauls</a></li>
              <li><a href="#services" className="hover:text-brand-blue transition-colors">Body Repair & Painting</a></li>
              <li><a href="#services" className="hover:text-brand-blue transition-colors">Electrical & Transmission</a></li>
              <li><a href="#road-assistance" className="hover:text-brand-red transition-colors font-bold text-brand-red">24/7 Road Assistance</a></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contact Details</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex gap-3">
                <address className="not-italic leading-relaxed">
                  {CONTACT.address}
                </address>
              </li>
              <li className="flex gap-3">
                <span className="text-white font-semibold">T:</span>
                <span>{CONTACT.officePhone}</span>
              </li>
              <li className="flex gap-3">
                <span className="text-white font-semibold">M:</span>
                <span className="flex flex-col">
                  <span>{CONTACT.mobile1}</span>
                  <span>{CONTACT.mobile2}</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {currentYear} Gig Brothers | Complete Auto Care. All Rights Reserved.</p>
          <p className="flex items-center gap-1">
            {CONTACT.officePhone} • {CONTACT.mobile1} • {CONTACT.email}
          </p>
          <p className="flex items-center gap-1">
            Built with <Heart className="w-3 h-3 text-brand-red fill-brand-red" /> in Lusikisiki
          </p>
        </div>
      </div>
    </footer>
  );
}
