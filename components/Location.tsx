'use client';

import { MapPin, Clock, Car, Train, Calendar } from 'lucide-react';
import Link from 'next/link';

export function Location() {
  return (
    <section className="py-24 bg-white" id="location">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-brand-600 uppercase mb-3">Location & Contact</h2>
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-6">
            Visit Our South Delhi Clinic
          </h3>
          <p className="text-lg text-slate-600">
            Conveniently located in Lajpat Nagar with easy access via metro and ample parking space.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          
          <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100 shadow-sm">
            <h4 className="text-2xl font-bold text-slate-900 mb-8 font-heading">Clinic Details</h4>
            
            <ul className="space-y-8 mb-10">
              <li className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="font-bold text-slate-900 text-lg mb-1">Full Address</h5>
                  <p className="text-slate-600 leading-relaxed">
                    123, Ring Road, Near Vinobapuri Metro Station,<br />
                    Lajpat Nagar IV, New Delhi - 110024
                  </p>
                </div>
              </li>
              
              <li className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="font-bold text-slate-900 text-lg mb-1">Clinic Timings</h5>
                  <p className="text-slate-600">Mon - Sat: 10:00 AM - 8:00 PM</p>
                  <p className="text-slate-600">Sunday: By Appointment Only</p>
                </div>
              </li>
              
              <li className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 shrink-0">
                  <Car className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="font-bold text-slate-900 text-lg mb-1">Parking Info</h5>
                  <p className="text-slate-600">Dedicated free parking available for patients.</p>
                </div>
              </li>
              
              <li className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 shrink-0">
                  <Train className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="font-bold text-slate-900 text-lg mb-1">Metro Connectivity</h5>
                  <p className="text-slate-600">2 mins walk from Vinobapuri Metro Station (Pink Line).</p>
                </div>
              </li>
            </ul>
            
            <Link href="#book" className="w-full flex justify-center items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-md hover:shadow-lg">
              <Calendar className="w-5 h-5" />
              Book Your Appointment Now
            </Link>
          </div>
          
          <div className="h-[500px] rounded-3xl overflow-hidden shadow-lg border border-slate-200 relative bg-slate-100">
            {/* Map Placeholder */}
            <div className="absolute inset-0 flex items-center justify-center flex-col text-slate-400">
              <MapPin className="w-16 h-16 mb-4 opacity-50" />
              <p className="font-medium text-lg">Interactive Map Placeholder</p>
              <p className="text-sm">Embed Google Maps iframe here</p>
            </div>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14015.65584852945!2d77.23438255!3d28.57235475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3b4f1b4c3b5%3A0x6d1b244498305f8!2sLajpat%20Nagar%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 z-10 opacity-80 hover:opacity-100 transition-opacity"
            ></iframe>
          </div>
          
        </div>
      </div>
    </section>
  );
}
