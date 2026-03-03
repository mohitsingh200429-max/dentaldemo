// app/components/Treatments.tsx

import Link from "next/link";
import {
  ArrowRight,
  Stethoscope,
  Syringe,
  Sparkles,
  Smile,
  Baby,
  Activity,
} from "lucide-react";

const treatments = [
  {
    id: "rct",
    title: "Root Canal Treatment",
    description:
      "Painless single-sitting RCT using modern rotary technology.",
    icon: Activity,
    color: "bg-blue-50 text-blue-600",
  },
  {
    id: "implants",
    title: "Dental Implants",
    description:
      "Permanent, natural-looking tooth replacements for lasting function.",
    icon: Syringe,
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    id: "braces",
    title: "Braces & Invisalign",
    description:
      "Clear aligners and braces for precise alignment.",
    icon: Smile,
    color: "bg-indigo-50 text-indigo-600",
  },
  {
    id: "whitening",
    title: "Teeth Whitening",
    description:
      "Professional whitening treatments for a brighter smile.",
    icon: Sparkles,
    color: "bg-amber-50 text-amber-600",
  },
  {
    id: "makeover",
    title: "Smile Makeover",
    description:
      "Cosmetic solutions including veneers and laminates.",
    icon: Stethoscope,
    color: "bg-rose-50 text-rose-600",
  },
  {
    id: "kids",
    title: "Kids Dentistry",
    description:
      "Child-friendly preventive and restorative dental care.",
    icon: Baby,
    color: "bg-purple-50 text-purple-600",
  },
];

export default function Treatments() {
  return (
    <section className="py-24 bg-slate-50" id="treatments">
      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold tracking-widest text-brand-600 uppercase mb-3">
            Our Services
          </h2>

          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Comprehensive Dental Care
          </h3>

          <p className="text-base md:text-lg text-slate-600">
            Preventive, restorative and cosmetic treatments delivered with precision and care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((treatment) => (
            <div
              key={treatment.id}
              className="
                group
                bg-white
                rounded-2xl
                p-8
                border border-slate-200
                shadow-sm
                transition
                duration-200
                ease-out
                hover:shadow-md
                hover:-translate-y-1
                transform-gpu
              "
            >
              <div
                className={`
                  w-12 h-12 rounded-xl flex items-center justify-center mb-6
                  ${treatment.color}
                  transition-transform duration-200 ease-out
                  group-hover:scale-[1.05]
                `}
              >
                <treatment.icon className="w-6 h-6" />
              </div>

              <h4 className="text-lg font-semibold text-slate-900 mb-3">
                {treatment.title}
              </h4>

              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {treatment.description}
              </p>

              <Link
                href="#book"
                className="
                  inline-flex items-center gap-2
                  text-brand-600 font-medium text-sm
                  transition-colors duration-200 ease-out
                  group-hover:text-brand-700
                "
              >
                Learn More
                <ArrowRight
                  className="
                    w-4 h-4
                    transition-transform duration-200 ease-out
                    group-hover:translate-x-1
                  "
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}