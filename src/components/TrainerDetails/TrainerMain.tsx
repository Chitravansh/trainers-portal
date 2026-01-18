// components/TrainerDetails/TrainerMain.tsx
import Image from "next/image";

export default function TrainerMain() {
  return (
    <div className="space-y-8">

      {/* Profile Header */}
      <div className="flex flex-col sm:flex-row gap-6">
        <Image
          src="/profile/default.png"
          
          alt="Trainer"
          width={120}
          height={120}
          className="rounded-full object-cover"
        />

        <div>
          <h1 className="text-3xl font-bold">
            Rahul Sharma
          </h1>
          <p className="text-gray-400">
            Senior Mobile Development Trainer
          </p>
          <p className="text-sm text-gray-500 mt-1">
            8+ years experience · 120+ trainings delivered
          </p>
        </div>
      </div>

      {/* Description */}
      <div>
        <h2 className="text-xl font-semibold mb-2">
          About the Trainer
        </h2>
        <p className="text-gray-300 leading-relaxed">
          Experienced mobile application trainer specializing in
          Flutter and React Native. Has trained corporate teams
          across fintech, healthcare, and edtech domains.
        </p>
      </div>

      {/* Skills */}
      <div>
        <h2 className="text-xl font-semibold mb-2">
          Skills & Expertise
        </h2>
        <div className="flex flex-wrap gap-3">
          {["Flutter", "React Native", "Dart", "Firebase"].map((skill) => (
            <span
              key={skill}
              className="bg-gray-800 px-3 py-1 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        <button className="bg-teal-500 px-6 py-3 rounded-lg text-white hover:bg-cyan-300">
          Request Booking
        </button>
        <button className="border border-white px-6 py-3 rounded-lg hover:text-cyan-300">
          Contact Trainer
        </button>
      </div>

    </div>
  );
}
