// app/components/Header.tsx

import Link from "next/link";
import { Phone, Calendar, MessageCircle } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-200">

      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">

        {/* Logo Block */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-brand-600 rounded-md flex items-center justify-center text-white font-bold text-lg">
            D
          </div>

          <div className="leading-tight">
            <p className="font-semibold text-slate-900 text-base">
              Dr. Aarya Sharma
            </p>
            <p className="text-xs text-slate-500 tracking-wide uppercase">
              Dental Studio
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-6">

          <a
            href="tel:+919876543210"
            className="flex items-center gap-2 text-slate-700 text-sm font-medium"
          >
            <Phone className="w-4 h-4" />
            Call
          </a>

          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-emerald-600 text-sm font-medium"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>

          <Link
            href="#book"
            className="inline-flex items-center gap-2 bg-brand-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold"
          >
            <Calendar className="w-4 h-4" />
            Book Appointment
          </Link>

        </div>
      </div>
    </header>
  );
}