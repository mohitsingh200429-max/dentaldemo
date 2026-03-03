'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'Is root canal painful?',
    answer: 'Not at all! With modern anesthesia and our rotary technology, a root canal is as painless as getting a regular filling. Most patients feel no discomfort during the procedure.',
  },
  {
    question: 'How many sittings are required for a root canal?',
    answer: 'In most cases, we perform single-sitting root canals using advanced equipment. However, complex cases might require 2-3 visits depending on the infection.',
  },
  {
    question: 'Do you offer EMI options?',
    answer: 'Yes, we offer easy EMI options for major treatments like dental implants, braces, and full mouth rehabilitation to make dental care affordable.',
  },
  {
    question: 'Is the clinic open on Sundays?',
    answer: 'Yes, we are open on Sundays by appointment to accommodate patients with busy weekday schedules.',
  },
  {
    question: 'Do you treat children?',
    answer: 'Absolutely! We have specialized pediatric dentistry services designed to make children feel comfortable and safe during their dental visits.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-slate-50 relative" id="faq">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-brand-600 uppercase mb-3">FAQ Section</h2>
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-6">
            Frequently Asked Questions
          </h3>
          <p className="text-lg text-slate-600">
            Find answers to common questions about our treatments and clinic.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl border ${openIndex === index ? 'border-brand-200 shadow-md' : 'border-slate-200 shadow-sm'} overflow-hidden transition-all duration-300`}
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className={`font-bold text-lg ${openIndex === index ? 'text-brand-600' : 'text-slate-900'}`}>
                  {faq.question}
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${openIndex === index ? 'bg-brand-50 text-brand-600' : 'bg-slate-50 text-slate-400'}`}>
                  {openIndex === index ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </div>
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
