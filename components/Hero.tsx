// app/components/Hero.tsx
import Image from "next/image";
import Link from "next/link";
import { Star, Calendar, Phone, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center text-white overflow-hidden">

      {/* Background Image (LCP Element) */}
      <Image
        src="/images/hero.jpg"   // Use real optimized image
        alt="Dr. Aarya Sharma in modern dental clinic in South Delhi"
        fill
        priority
        quality={85}
        sizes="100vw"
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

        {/* Location Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm mb-6">
          <MapPin className="w-4 h-4" />
          South Delhi • Accepting New Patients
        </div>

        {/* Credentials */}
        <p className="text-base md:text-lg font-medium text-white/90 mb-3">
          Dr. Aarya Sharma, BDS, MDS
        </p>

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Trusted & Gentle Dental Care
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto mb-8 leading-relaxed">
          Advanced, safe and comfortable treatments for families in South Delhi.
          Over 12 years of clinical excellence focused on patient comfort and precision.
        </p>

        {/* Rating */}
        <div className="flex justify-center items-center gap-3 mb-10">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" />
            ))}
          </div>
          <span className="font-semibold text-lg">4.9/5</span>
          <span className="text-white/80 text-sm">
            Rated by 320+ Patients on Google
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="#book"
            className="inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 px-8 py-4 rounded-full font-semibold text-lg transition-colors"
          >
            <Calendar className="w-5 h-5" />
            Book Appointment
          </Link>

          <a
            href="tel:+919876543210"
            className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 rounded-full font-semibold text-lg transition-colors"
          >
            <Phone className="w-5 h-5" />
            Call +91 98765 43210
          </a>
        </div>
      </div>
    </section>
  );
}