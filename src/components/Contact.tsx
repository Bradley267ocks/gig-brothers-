import { MapPin, Phone, Mail, ExternalLink, Clock } from 'lucide-react';
import { CONTACT } from '../constants';

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-brand-charcoal text-4xl font-bold mb-4">Contact Information</h2>
          <div className="w-20 h-1 bg-brand-blue mb-10" />
          
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-brand-blue shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-brand-charcoal font-bold text-lg mb-1">Our Workshop</h4>
                <p className="text-gray-600 leading-relaxed max-w-sm">
                  {CONTACT.address}
                </p>
                <a 
                  href={CONTACT.googleMapsLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-brand-blue font-bold mt-2 hover:underline"
                >
                  View on Google Maps <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-brand-red shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-brand-charcoal font-bold text-lg mb-1">Call Us</h4>
                <div className="space-y-1">
                  <p className="text-gray-600">Office: <a href={`tel:${CONTACT.officePhone}`} className="text-brand-charcoal font-semibold hover:text-brand-red">{CONTACT.officePhone}</a></p>
                  <p className="text-gray-600">Mobile 1: <a href={`tel:${CONTACT.mobile1}`} className="text-brand-charcoal font-semibold hover:text-brand-red">{CONTACT.mobile1}</a></p>
                  <p className="text-gray-600">Mobile 2: <a href={`tel:${CONTACT.mobile2}`} className="text-brand-charcoal font-semibold hover:text-brand-red">{CONTACT.mobile2}</a></p>
                </div>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-brand-blue shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-brand-charcoal font-bold text-lg mb-1">Email Us</h4>
                <a href={`mailto:${CONTACT.email}`} className="text-gray-600 font-semibold hover:text-brand-blue break-all">
                  {CONTACT.email}
                </a>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-brand-red shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-brand-charcoal font-bold text-lg mb-1">Working Hours</h4>
                <p className="text-gray-600">Monday — Friday: 08:00 - 17:00</p>
                <p className="text-gray-600">Saturday: 08:00 - 13:00</p>
                <p className="text-brand-red font-bold text-sm mt-1 uppercase tracking-wider">24/7 Road Assistance Available</p>
              </div>
            </div>
          </div>
        </div>

        <div id="location" className="relative group">
          <div className="absolute -inset-4 bg-brand-blue/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative aspect-square md:aspect-auto md:h-full border border-gray-100 rounded-3xl overflow-hidden shadow-sm bg-gray-100">
            {/* Embedded Google Maps Placeholder */}
            <iframe
              title="Workshop Location"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3448.670559419163!2d29.563065076214227!3d-31.3323097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e5d79196b0100f7%3A0xe103ee928f4116c!2sLusikisiki!5e0!3m2!1sen!2sza!4v1717524900000!5m2!1sen!2sza"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 grayscale contrast-125"
            ></iframe>
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl">
              <p className="text-brand-charcoal font-bold mb-1">Lusikisiki Main Street</p>
              <p className="text-gray-600 text-sm">Opposite Lilitha College</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
