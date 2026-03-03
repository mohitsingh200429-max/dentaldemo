'use client';

import { Calendar, Clock } from 'lucide-react';

export function FinalCTA() {
  return (
    <section className="py-32 bg-brand-900 text-white relative overflow-hidden" id="book">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,white_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-brand-500 rounded-full opacity-30 blur-3xl"></div>
      
      <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-brand-100 text-sm font-bold uppercase tracking-widest mb-8 backdrop-blur-sm">
          <Clock className="w-4 h-4" />
          Limited same-day slots available
        </div>
        
        <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8 leading-tight">
          Your Healthy Smile <br className="hidden md:block" />
          <span className="text-brand-300">Starts Today</span>
        </h2>
        
        <p className="text-xl text-brand-100 mb-12 max-w-2xl mx-auto leading-relaxed">
          Don't wait for dental pain. Schedule your visit with Dr. Aarya Sharma and experience premium dental care in South Delhi.
        </p>
        
        <form className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl max-w-3xl mx-auto text-left relative z-20 border border-brand-100">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 font-heading text-center">Book Your Appointment</h3>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all text-slate-900 bg-slate-50 focus:bg-white"
                placeholder="John Doe"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
              <input 
                type="tel" 
                id="phone" 
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all text-slate-900 bg-slate-50 focus:bg-white"
                placeholder="+91 98765 43210"
                required
              />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="date" className="block text-sm font-bold text-slate-700 mb-2">Preferred Date</label>
              <input 
                type="date" 
                id="date" 
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all text-slate-900 bg-slate-50 focus:bg-white"
                required
              />
            </div>
          </div>
          
          <button 
            type="submit" 
            className="w-full flex justify-center items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            <Calendar className="w-5 h-5" />
            Schedule Your Visit
          </button>
          
          <p className="text-center text-sm text-slate-500 mt-6">
            We will call you to confirm your appointment time.
          </p>
        </form>
      </div>
    </section>
  );
}
