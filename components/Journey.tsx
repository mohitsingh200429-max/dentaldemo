// app/components/Journey.tsx

import {
  CalendarCheck,
  Search,
  FileText,
  SmilePlus,
  HeartPulse,
} from "lucide-react";

const steps = [
  {
    id: "consult",
    title: "Book Consultation",
    description: "Schedule your visit online or via call.",
    icon: CalendarCheck,
  },
  {
    id: "diagnosis",
    title: "Detailed Diagnosis",
    description: "Comprehensive checkup and digital X-rays.",
    icon: Search,
  },
  {
    id: "plan",
    title: "Personalized Plan",
    description: "Tailored treatment options discussed.",
    icon: FileText,
  },
  {
    id: "procedure",
    title: "Comfortable Procedure",
    description: "Painless treatment using modern technology.",
    icon: SmilePlus,
  },
  {
    id: "followup",
    title: "Follow-Up Care",
    description: "Post-treatment guidance for lasting results.",
    icon: HeartPulse,
  },
];

export default function Journey() {
  return (
    <section className="py-24 bg-slate-50" id="journey">
      <div className="max-w-7xl mx-auto px-4">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold tracking-widest text-brand-600 uppercase mb-3">
            Treatment Process
          </h2>

          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Your Treatment Journey
          </h3>

          <p className="text-base md:text-lg text-slate-600">
            Transparent, structured, and patient-focused care from consultation to recovery.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-5xl mx-auto">

          {/* Connecting Line (Perfectly aligned to icon center) */}
          <div className="hidden md:block absolute top-[40px] left-12 right-12 h-[2px] bg-brand-100" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 relative">

            {steps.map((step, index) => (
              <div
                key={step.id}
                className="flex flex-col items-center text-center group"
              >
                {/* Icon Circle */}
                <div
                  className="
                    relative
                    w-20 h-20
                    rounded-full
                    bg-white
                    border-4 border-brand-50
                    shadow-sm
                    flex items-center justify-center
                    mb-6
                    transition-colors duration-200 ease-out
                    group-hover:border-brand-200
                    transform-gpu group-hover:-translate-y-1
                  "
                >
                  {/* Step Number Badge */}
                  <span
                    className="
                      absolute -top-2 -right-2
                      w-8 h-8
                      rounded-full
                      bg-brand-600
                      text-white
                      font-semibold
                      flex items-center justify-center
                      text-sm
                    "
                  >
                    {index + 1}
                  </span>

                  <step.icon
                    className="
                      w-7 h-7
                      text-brand-500
                      transition-colors duration-200 ease-out
                      group-hover:text-brand-600
                    "
                  />
                </div>

                {/* Title */}
                <h4 className="text-lg font-semibold text-slate-900 mb-2">
                  {step.title}
                </h4>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed max-w-[180px]">
                  {step.description}
                </p>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}