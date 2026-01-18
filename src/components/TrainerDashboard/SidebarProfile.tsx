import AvailabilityManager from "./AvailabilityManager";

export default function SidebarProfile() {
  return (
    <div className="bg-white text-black rounded-xl p-6 space-y-6">

      <div className="text-center">
        <img
          src="/profile/default.png"
          className="w-24 h-24 rounded-full mx-auto"
        />
        <h3 className="mt-3 text-lg font-semibold">Rahul Sharma</h3>
        <p className="text-sm text-gray-600">Mobile Trainer</p>
        <p className="text-yellow-500 mt-1">⭐ 4.8 (120 reviews)</p>
      </div>

      <div>
        <p className="text-sm text-gray-600">Rate</p>
         <div className="flex items-center gap-3">
        <p className="text-lg font-bold">₹4,000 / day</p>
         <button
      className="
        text-teal-600
        text-sm
        hover:underline
        flex items-center
        gap-1
      "
    >
      Edit
    </button>
    </div>
        
      </div>

      <div>
        <p className="text-sm text-gray-600">Tech Stack</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {["Flutter", "React Native", "Firebase"].map(skill => (
            <span key={skill} className="bg-gray-200 px-2 py-1 rounded text-xs">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* //<AvailabilityManager /> */}
      <AvailabilityManager />
         <div className="flex justify-end">
        <button className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-300 transition" >
          Apply
        </button>
        </div>
    </div>
  );
}
