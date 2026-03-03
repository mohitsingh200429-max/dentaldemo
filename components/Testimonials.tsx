'use client';

import { Star, Quote } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Rahul Verma',
    location: 'Lajpat Nagar',
    text: 'Best dentist in Lajpat Nagar. Very painless root canal treatment. Highly recommended for anyone afraid of dentists!',
    rating: 5,
    img: 'https://picsum.photos/seed/user1/100/100',
  },
  {
    name: 'Priya Singh',
    location: 'Greater Kailash',
    text: 'The clinic is spotless and the staff is incredibly professional. My teeth whitening results were amazing.',
    rating: 5,
    img: 'https://picsum.photos/seed/user2/100/100',
  },
  {
    name: 'Amit Kumar',
    location: 'South Extension',
    text: 'Got my dental implants done here. Dr. Sharma explained everything clearly and the procedure was smooth.',
    rating: 5,
    img: 'https://picsum.photos/seed/user3/100/100',
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 -mt-24 -mr-24 w-96 h-96 bg-brand-50 rounded-full opacity-50 blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-brand-600 uppercase mb-3">Local Proof</h2>
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-6">
            What Our Delhi Patients Say
          </h3>
          <p className="text-lg text-slate-600">
            Don't just take our word for it. Read reviews from our satisfied patients across South Delhi.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 relative group">
              <Quote className="absolute top-8 right-8 w-12 h-12 text-brand-50 opacity-50 group-hover:text-brand-100 transition-colors" />
              
              <div className="flex gap-1 mb-6 text-accent">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              
              <p className="text-slate-700 italic mb-8 relative z-10 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-brand-100">
                  <Image 
                    src={testimonial.img} 
                    alt={testimonial.name} 
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                  <p className="text-sm text-slate-500">{testimonial.location}, South Delhi</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
