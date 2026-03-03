'use client';

import { CheckCircle2, Info } from 'lucide-react';

const pricing = [
  {
    service: 'Teeth Cleaning',
    price: '₹1,000',
    description: 'Professional scaling and polishing.',
    popular: false,
  },
  {
    service: 'Root Canal Treatment',
    price: '₹4,500',
    description: 'Painless single-sitting RCT.',
    popular: true,
  },
  {
    service: 'Teeth Whitening',
    price: '₹6,000',
    description: 'Laser whitening for instant results.',
    popular: false,
  },
];

export function Pricing() {
  return (
    <section className="py-24 bg-white relative" id="pricing">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-brand-600 uppercase mb-3">Strategic Transparency</h2>
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-6">
            Pricing Transparency
          </h3>
          <p className="text-lg text-slate-600">
            We believe in upfront pricing with no hidden surprises.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricing.map((item, index) => (
            <div 
              key={index} 
              className={`rounded-3xl p-8 border ${item.popular ? 'border-brand-500 shadow-xl relative scale-105 z-10 bg-white' : 'border-slate-200 shadow-sm bg-slate-50'} transition-all duration-300 hover:shadow-xl`}
            >
              {item.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-500 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide shadow-sm">
                  Most Popular
                </div>
              )}
              <h4 className="text-xl font-bold text-slate-900 mb-2">{item.service}</h4>
              <p className="text-slate-500 mb-6 h-12">{item.description}</p>
              <div className="mb-8">
                <span className="text-sm text-slate-500 font-medium">Starting From</span>
                <div className="text-4xl font-heading font-bold text-slate-900 mt-1">{item.price}</div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                  <span className="text-slate-700">Expert Consultation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                  <span className="text-slate-700">Digital X-Rays (if needed)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                  <span className="text-slate-700">Post-treatment Care</span>
                </li>
              </ul>
              <button className={`w-full py-3 rounded-full font-bold transition-colors ${item.popular ? 'bg-brand-600 text-white hover:bg-brand-700 shadow-md' : 'bg-white text-brand-600 border border-brand-200 hover:bg-brand-50'}`}>
                Book Now
              </button>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center flex items-center justify-center gap-2 text-slate-500 bg-slate-50 py-3 px-6 rounded-full w-fit mx-auto border border-slate-200">
          <Info className="w-4 h-4" />
          <span className="text-sm font-medium">Final pricing depends on clinical evaluation.</span>
        </div>
      </div>
    </section>
  );
}
