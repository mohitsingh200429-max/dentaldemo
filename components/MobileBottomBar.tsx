'use client';

import { Phone, MessageCircle, Calendar } from 'lucide-react';
import Link from 'next/link';

export function MobileBottomBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 shadow-[0_-4px_10px_rgba(0,0,0,0.05)] z-50 flex items-stretch h-16">
      <a 
        href="tel:+919876543210" 
        className="flex-1 flex flex-col items-center justify-center gap-1 text-slate-600 hover:text-brand-600 hover:bg-slate-50 transition-colors border-r border-slate-100"
      >
        <Phone className="w-5 h-5" />
        <span className="text-[10px] font-bold uppercase tracking-wider">Call</span>
      </a>
      
      <a 
        href="https://wa.me/919876543210" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="flex-1 flex flex-col items-center justify-center gap-1 text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 transition-colors border-r border-slate-100"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="text-[10px] font-bold uppercase tracking-wider">WhatsApp</span>
      </a>
      
      <Link 
        href="#book" 
        className="flex-[1.5] flex flex-col items-center justify-center gap-1 bg-brand-600 text-white hover:bg-brand-700 transition-colors"
      >
        <Calendar className="w-5 h-5" />
        <span className="text-[10px] font-bold uppercase tracking-wider">Book</span>
      </Link>
    </div>
  );
}
