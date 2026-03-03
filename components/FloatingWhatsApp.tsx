'use client';

import { MessageCircle } from 'lucide-react';

export function FloatingWhatsApp() {
  return (
    <a 
      href="https://wa.me/919876543210" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="fixed bottom-24 md:bottom-8 right-8 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
      <span className="absolute right-full mr-4 bg-white text-slate-800 px-4 py-2 rounded-xl text-sm font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Chat with us
      </span>
    </a>
  );
}
