// app/components/Gallery.tsx

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const cases = [
  {
    id: "align",
    title: "Teeth Alignment",
    desc: "Orthodontic correction with clear aligners.",
    img: "/images/gallery/align.jpg",
  },
  {
    id: "whitening",
    title: "Professional Whitening",
    desc: "In-clinic whitening for a brighter smile.",
    img: "/images/gallery/whitening.jpg",
  },
  {
    id: "implant",
    title: "Dental Implant",
    desc: "Permanent tooth replacement solution.",
    img: "/images/gallery/implant.jpg",
  },
];

export default function Gallery() {
  return (
    <section className="py-24 bg-slate-50" id="gallery">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-semibold tracking-widest text-brand-600 uppercase mb-3">
              Patient Success Stories
            </h2>

            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Before & After Smile Gallery
            </h3>

            <p className="text-base md:text-lg text-slate-600">
              Real clinical results achieved through precision and patient-focused care.
            </p>
          </div>

          <Link
            href="#book"
            className="inline-flex items-center gap-2 text-brand-600 font-medium transition-colors hover:text-brand-700 whitespace-nowrap"
          >
            Start Your Transformation
            <ArrowRight className="w-4 h-4 transition-transform duration-200 hover:translate-x-1" />
          </Link>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((item) => (
            <div
              key={item.id}
              className="
                group
                relative
                rounded-2xl
                overflow-hidden
                border border-slate-200
                bg-white
                transition
                duration-200
                ease-out
                hover:-translate-y-1
                transform-gpu
                hover:shadow-md
              "
            >
              <div className="aspect-[3/4] relative">
                <Image
                  src={item.img}
                  alt={`${item.title} before and after case`}
                  fill
                  sizes="(max-width: 768px) 90vw, 33vw"
                  quality={85}
                  className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-200 group-hover:from-black/80" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h4 className="text-lg font-semibold text-white mb-1">
                  {item.title}
                </h4>
                <p className="text-sm text-slate-200 opacity-90">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}