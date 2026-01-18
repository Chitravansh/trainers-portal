// components/Trainings/Filters.tsx

"use client";

import {useState} from "react";


export default function Filters() {
  const [budget, setBudget] = useState(1000000); // Rs.10L
  const [days, setDays] = useState(30);
  // const [search, setSearch] = useState("");

  return (
    <div className="space-y-6">
        {/**Budget Filter */}
      <div>
        <h4 className="font-semibold mb-2">Budget (₹)</h4>
        <input type="range" min={0} max={1000000} step ={50000} value={budget}
        onChange={(e)=> setBudget(Number(e.target.value))} className="w-full accent-teal-500" />
        <p className="text-sm text-gray-600">₹0 – ₹{(budget / 100000).toFixed(1)} Lakhs</p>
      </div>

      {/* Duration Filter */}
      <div>
        <h4 className="font-semibold mb-2">Duration (Days)</h4>
        <input type="range" min={5} max={90} step={5} value={days} onChange={(e)=>setDays(Number(e.target.value))} className="w-full accent-teal-500"/>
        <p className="text-sm text-gray-600"> 5 – {days} days</p>
      </div>

      <div>
        <h4 className="font-semibold mb-2">Category</h4>
        <label className="block">
          <input type="checkbox" /> Mobile Development
        </label>
        <label className="block">
          <input type="checkbox" /> Web Development
        </label>
                <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" />
          AI / ML
        </label>
      </div>

    </div>
  );
}
