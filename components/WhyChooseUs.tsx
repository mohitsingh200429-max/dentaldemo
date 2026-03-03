// app/components/WhyChooseUs.tsx

import {
  ShieldCheck,
  Zap,
  CreditCard,
  HeartHandshake,
} from "lucide-react";

const benefits = [
  {
    id: "painfree",
    title: "Pain-Free Procedures",
    description:
      "Advanced anesthesia techniques ensuring maximum comfort.",
    icon: HeartHandshake,
  },
  {
    id: "digital",
    title: "Digital X-Ray & Modern Equipment",
    description:
      "State-of-the-art technology for precise diagnosis.",
    icon: Zap,
  },
  {
    id: "pricing",
    title: "Transparent Pricing",
    description:
      "Clear treatment estimates with no hidden costs.",
    icon: CreditCard,
  },
  {
    id: "sterilization",
    title: "Strict Sterilization Protocol",
    description:
      "Class B autoclaves and disposable materials for safety.",
    icon: ShieldCheck,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-brand-900 text-white relative overflow-hidden">
      
      {/* Lightweight Background Pattern */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[size:32px_32px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold tracking-widest text-brand-300 uppercase mb-3">
            Why Delhi Patients Choose Us
          </h2>

          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Excellence in Modern Dental Care
          </h3>

          <p className="text-base md:text-lg text-brand-100">
            Combining clinical expertise, empathy, and advanced technology to deliver safe and predictable outcomes.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="
                group
                bg-white/10
                rounded-2xl
                p-8
                border border-white/15
                transition
                duration-200
                ease-out
                hover:bg-white/15
                hover:-translate-y-1
                transform-gpu
              "
            >
              <div className="w-12 h-12 bg-brand-500 rounded-xl flex items-center justify-center mb-6 text-white transition-transform duration-200 ease-out group-hover:scale-105">
                <benefit.icon className="w-6 h-6" />
              </div>

              <h4 className="text-lg font-semibold mb-3">
                {benefit.title}
              </h4>

              <p className="text-brand-100 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}