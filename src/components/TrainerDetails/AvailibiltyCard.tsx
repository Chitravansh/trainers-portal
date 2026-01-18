// components/TrainerDetails/AvailabilityCard.tsx
"use client";

import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useState } from "react";


export default function AvailabilityCard() {

    // const availableFrom = new Date(2026,7,15);
    // const availableTo = new Date(2026,8,30);
    const today = new Date();

     // 👇 normalize to first day of month (important)
    const currentMonth = new Date(today.getFullYear(), today.getMonth());
     console.log(currentMonth);
     const availableRanges = [
    { from: new Date(2026, 7, 15), to: new Date(2026, 7, 25) },
    { from: new Date(2026, 8, 5), to: new Date(2026, 8, 20) },
  ];

  const blockedDates = [
    new Date(2026, 7, 20),
    new Date(2026, 8, 10),
  ];

  const firstAvailability = availableRanges.reduce((earliest, range) =>
  range.from < earliest ? range.from : earliest
, availableRanges[0].from);

const initialMonth = new Date(
  firstAvailability.getFullYear(),
  firstAvailability.getMonth()
);

// //Normalize to  Month start
//   // 👇 Normalize to month start
//   const [month, setMonth] = useState(
//     new Date(
//       firstAvailability.getFullYear(),
//       firstAvailability.getMonth()
//     )
//   );


  return (
    <div className="
      bg-white text-black
      rounded-xl p-6
      space-y-4
      sticky top-28
    ">

      <h3 className="text-lg font-semibold">Availability</h3>

      {/** Calendar  */}
      {/* <DayPicker 
      mode = "range"
      defaultMonth={availableFrom}
      selected={{from:availableFrom, to:availableTo}}
      numberOfMonths={2}
      disabled = {{before: availableFrom, to:availableTo}}
      /> */}
      <DayPicker 
        numberOfMonths={2}
        defaultMonth={initialMonth}
        // onMonthChange={setMonth}
        modifiers={{
          available: availableRanges,
          blocked: blockedDates,
        }}
        modifiersClassNames={{
          available: "bg-teal-500 text-white",
          blocked: "bg-gray-300 text-gray-500 line-through",
        }}
        disabled={[
          { before: today },
          ...blockedDates,
        ]}
      />

    <div className="text-sm space-y-1">
        <p><span className="font-medium text-teal-600">●</span> Available</p>
        <p><span className="font-medium text-gray-400">●</span> Unavailable</p>
      </div>

      <p className="text-sm text-gray-600">
        Available from:
      </p>
      <p className="font-medium">15 Aug 2026 – 30 Sep 2026</p>

      <div>
        <p className="text-sm text-gray-600">Duration</p>
        <p className="font-medium">30 – 60 days</p>
      </div>

      <div>
        <p className="text-sm text-gray-600">Price</p>
        <p className="text-xl font-bold text-teal-600">
          ₹3,00,000 – ₹6,00,000
        </p>
      </div>

      <div>
        <p className="text-sm text-gray-600">Mode</p>
        <p className="font-medium">Remote / Onsite</p>
      </div>

    </div>
  );
}
