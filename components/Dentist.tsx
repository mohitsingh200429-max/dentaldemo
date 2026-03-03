
import Image from "next/image";
import { Award, GraduationCap, Users } from "lucide-react";

export default function Dentist() {
  return (
    <section className="py-24 bg-white" id="doctor">
      <div className="max-w-7xl mx-auto px-4">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image Column */}
          <div className="relative">

            <div className="relative w-full max-w-md mx-auto aspect-[3/4] rounded-2xl overflow-hidden border border-slate-200">
              <Image
                src="/images/doctor.jpg"
                alt="Dr. Aarya Sharma, Specialist in Conservative Dentistry, South Delhi"
                fill
                sizes="(max-width: 1024px) 90vw, 500px"
                quality={85}
                className="object-cover"
              />
            </div>

          </div>

          {/* Content Column */}
          <div>
            <h2 className="text-sm font-semibold tracking-widest text-brand-600 uppercase mb-3">
              Meet the Specialist
            </h2>

            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Dr. Aarya Sharma
            </h3>

            <p className="text-lg text-slate-700 italic mb-8 border-l-4 border-brand-600 pl-5">
              “I believe dental care should be painless, transparent, and focused on long-term oral health.”
            </p>

            <p className="text-base text-slate-600 mb-10 leading-relaxed">
              With over a decade of clinical experience, Dr. Sharma specializes in conservative dentistry and endodontics. Her approach combines modern technology with patient-focused care, ensuring comfort and clinical precision.
            </p>

            {/* Credentials Grid */}
            <div className="grid sm:grid-cols-2 gap-8">

              <InfoItem
                icon={<GraduationCap className="w-5 h-5" />}
                title="BDS, MDS"
                text="Conservative Dentistry & Endodontics"
              />

              <InfoItem
                icon={<Award className="w-5 h-5" />}
                title="12+ Years"
                text="Clinical Experience"
              />

              <InfoItem
                icon={<Users className="w-5 h-5" />}
                title="5,000+"
                text="Patients Treated"
              />

              <InfoItem
                icon={<Award className="w-5 h-5" />}
                title="Member"
                text="Indian Dental Association"
              />

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Lightweight static subcomponent */
function InfoItem({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center text-brand-600 shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-slate-900">{title}</h4>
        <p className="text-sm text-slate-500">{text}</p>
      </div>
    </div>
  );
}