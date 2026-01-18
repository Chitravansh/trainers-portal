// // components/Trainings/TrainerCard.tsx
// export default function TrainerCard() {
//   return (
//     <div className="bg-white text-black rounded-xl p-6 flex justify-between items-center">
//       <div>
//         <p className="text-sm text-gray-500">10 min ago</p>
//         <h3 className="text-xl font-semibold">Mobile Development Trainer</h3>
//         <p className="text-gray-600">8+ years experience</p>

//         <div className="flex gap-4 mt-3 text-sm text-gray-500">
//           <span>₹3L – ₹6L</span>
//           <span>30 days</span>
//           <span>Remote</span>
//         </div>
//       </div>

//       <button className="bg-teal-500 text-white px-4 py-2 rounded-lg">
//         View Details
//       </button>
//     </div>
//   );
// }

// components/Trainings/TrainerCard.tsx
"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function TrainerCard() {
  const router = useRouter();
  return (
    <div
      className="
        bg-white text-black
        rounded-xl shadow-md
        p-4
        flex flex-col
        hover:shadow-lg transition
      "
    >
      {/* Profile Image */}
      <div className="flex justify-center">
        <Image
          src="/profile/default.png" // placeholder image
          alt="Trainer Profile"
          width={96}
          height={96}
          className="rounded-full object-cover"
        />
      </div>

      {/* Info */}
      <div className="text-center mt-4">
        <h3 className="text-lg font-semibold">
          Mobile Development Trainer
        </h3>

        <p className="text-sm text-gray-600 mt-1">
          8+ years experience
        </p>

        <p className="text-xs text-gray-500 mt-1">
          Posted 10 min ago
        </p>
      </div>

      {/* Meta */}
      <div className="flex justify-center gap-3 mt-4 text-xs text-gray-500">
        <span>₹3L–₹6L</span>
        <span>30 days</span>
        <span>Remote</span>
      </div>

      {/* Action */}
      <button onClick={()=>router.push("/trainers/abc123")}
        className="
          mt-4
          bg-teal-500 text-white
          py-2 rounded-lg
          text-sm
          hover:bg-teal-600
        "
      >
        View Details
      </button>
    </div>
  );
}
